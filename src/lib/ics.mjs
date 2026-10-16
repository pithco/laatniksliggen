function escapeText(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

function fold(line) {
  const bytes = Buffer.from(line, 'utf8');
  if (bytes.length <= 75) return line;
  const parts = [];
  let start = 0;
  while (start < bytes.length) {
    let end = Math.min(start + (start === 0 ? 75 : 74), bytes.length);
    while (end > start && (bytes[end - 1] & 0xc0) === 0x80) end -= 1;
    if (end === start) end = Math.min(start + 1, bytes.length);
    const chunk = bytes.subarray(start, end).toString('utf8');
    parts.push(start === 0 ? chunk : ` ${chunk}`);
    start = end;
  }
  return parts.join('\r\n');
}

function compactDate(iso) {
  return iso.replaceAll('-', '');
}

function nextDay(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

export function buildIcs(events, { nu = new Date() } = {}) {
  const stamp = nu.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Laat Niks Liggen//Deadlines//NL',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Laat Niks Liggen',
  ];

  for (const event of events) {
    const endInclusive = event.eind || event.start;
    const dtEnd = compactDate(nextDay(endInclusive));
    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${event.id}@laatniksliggen.nl`);
    lines.push(`DTSTAMP:${stamp}`);
    lines.push(`DTSTART;VALUE=DATE:${compactDate(event.start)}`);
    lines.push(`DTEND;VALUE=DATE:${dtEnd}`);
    lines.push(`SUMMARY:${escapeText(event.titel)}`);
    lines.push(`DESCRIPTION:${escapeText(event.toelichting)}`);
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');
  return lines.map(fold).join('\r\n') + '\r\n';
}
