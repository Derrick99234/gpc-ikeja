import { CHURCH_INFO } from "@/data/churchData";

/**
 * Calculates the next occurrence of a day of the week (0 = Sunday, 6 = Saturday)
 * at a specific UTC hour and minute.
 */
export function getNextDayOfWeek(dayOfWeek: number, hourUTC = 0, minuteUTC = 0): Date {
  const now = new Date();
  const result = new Date(now);
  const currentDay = now.getUTCDay();
  let diff = dayOfWeek - currentDay;

  if (diff < 0) {
    diff += 7;
  } else if (diff === 0) {
    const todayTarget = new Date(now);
    todayTarget.setUTCHours(hourUTC, minuteUTC, 0, 0);
    if (now.getTime() >= todayTarget.getTime()) {
      diff = 7;
    }
  }

  result.setUTCDate(now.getUTCDate() + diff);
  result.setUTCHours(hourUTC, minuteUTC, 0, 0);
  return result;
}

export function toICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

/**
 * Generates an RFC-5545 compliant iCalendar (.ics) string containing:
 * 1. An eve-of-worship Saturday reminder event (repeats weekly on Saturdays).
 * 2. The Sunday Service event (repeats weekly on Sundays), with alarms
 *    set for 24h prior (Saturday) and 2h prior (Sunday morning).
 */
export function generateChurchCalendarICS(): string {
  // Saturday reminder: 17:00 UTC = 18:00 WAT (6:00 PM)
  const satDate = getNextDayOfWeek(6, 17, 0);
  const satEndDate = new Date(satDate.getTime() + 30 * 60 * 1000);

  // Sunday service: 07:00 UTC = 08:00 WAT (8:00 AM)
  const sunDate = getNextDayOfWeek(0, 7, 0);
  const sunEndDate = new Date(sunDate.getTime() + 3.5 * 60 * 60 * 1000);

  const dtStamp = toICSDate(new Date());
  const satStart = toICSDate(satDate);
  const satEnd = toICSDate(satEndDate);
  const sunStart = toICSDate(sunDate);
  const sunEnd = toICSDate(sunEndDate);

  const location = "The Ark of Light for All Nations, Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria";

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Gospel Pillars Church Ikeja//Service Reminders//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Gospel Pillars Church - Sunday Service & Reminders",
    "X-WR-TIMEZONE:Africa/Lagos",

    // Event 1: Saturday Reminder Event
    "BEGIN:VEVENT",
    `UID:gpc-sat-reminder-${satDate.getTime()}@gospelpillarsikeja.org`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${satStart}`,
    `DTEND:${satEnd}`,
    "RRULE:FREQ=WEEKLY;BYDAY=SA",
    "SUMMARY:Reminder: Tomorrow is Sunday Service at Gospel Pillars Church",
    "DESCRIPTION:Tomorrow is Sunday Service at The Ark of Light for All Nations, Gospel Pillars Church Ikeja.\\n\\nFirst Service: 8:00 AM | Second Service: 9:15 AM WAT.\\nPrepare your heart and family for a glorious encounter!\\nLocation: Plot 11, Kudirat Abiola Way, Alausa, Ikeja.",
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Tomorrow is Sunday Service at Gospel Pillars Church!",
    "END:VALARM",
    "END:VEVENT",

    // Event 2: Sunday Service Event with Alarms
    "BEGIN:VEVENT",
    `UID:gpc-sun-service-${sunDate.getTime()}@gospelpillarsikeja.org`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${sunStart}`,
    `DTEND:${sunEnd}`,
    "RRULE:FREQ=WEEKLY;BYDAY=SU",
    "SUMMARY:Sunday Service - Gospel Pillars Church",
    "DESCRIPTION:Join us for Sunday Service at The Ark of Light for All Nations, Ikeja.\\n\\nFirst Service: 8:00 AM | Second Service: 9:15 AM WAT.\\nPreacher: Prophet Dr. Isaiah Macwealth & Pastoral Team.\\nLocation: Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos.",
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    // 24-hour alarm (Saturday)
    "BEGIN:VALARM",
    "TRIGGER:-P1D",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Tomorrow is Sunday Service at Gospel Pillars Church!",
    "END:VALARM",
    // 2-hour alarm (Sunday morning)
    "BEGIN:VALARM",
    "TRIGGER:-PT2H",
    "ACTION:DISPLAY",
    "DESCRIPTION:Reminder: Today is Sunday Service at Gospel Pillars Church!",
    "END:VALARM",
    "END:VEVENT",

    "END:VCALENDAR"
  ];

  return lines.join("\r\n");
}

/**
 * Initiates an immediate download of the .ics calendar file.
 */
export function downloadChurchCalendarICS(filename = "gpc-sunday-service-reminders.ics") {
  const icsData = generateChurchCalendarICS();
  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Returns a direct web link to add the recurring Sunday Service to Google Calendar.
 */
export function getGoogleCalendarSundayUrl(): string {
  const sunDate = getNextDayOfWeek(0, 7, 0);
  const sunEndDate = new Date(sunDate.getTime() + 3.5 * 60 * 60 * 1000);
  const start = toICSDate(sunDate);
  const end = toICSDate(sunEndDate);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Sunday Service - Gospel Pillars Church",
    dates: `${start}/${end}`,
    recur: "RRULE:FREQ=WEEKLY;BYDAY=SU",
    details: `Join us for Sunday Service at The Ark of Light for All Nations, Ikeja.\n\nFirst Service: 8:00 AM | Second Service: 9:15 AM WAT\nPreacher: Prophet Dr. Isaiah Macwealth & Pastoral Team.\n\nLocation: Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria.\nHotline: ${CHURCH_INFO.hotlines[0]}`,
    location: "The Ark of Light for All Nations, Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria"
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Returns a direct web link to add the recurring Saturday Reminder to Google Calendar.
 */
export function getGoogleCalendarSaturdayUrl(): string {
  const satDate = getNextDayOfWeek(6, 17, 0);
  const satEndDate = new Date(satDate.getTime() + 30 * 60 * 1000);
  const start = toICSDate(satDate);
  const end = toICSDate(satEndDate);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Reminder: Tomorrow is Sunday Service at Gospel Pillars Church",
    dates: `${start}/${end}`,
    recur: "RRULE:FREQ=WEEKLY;BYDAY=SA",
    details: `Tomorrow is Sunday Service at The Ark of Light for All Nations, Gospel Pillars Church Ikeja.\n\nFirst Service: 8:00 AM | Second Service: 9:15 AM WAT\nLocation: Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos.`,
    location: "The Ark of Light for All Nations, Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria"
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Returns a direct web link to add the event to Outlook Live / 365.
 */
export function getOutlookCalendarSundayUrl(): string {
  const sunDate = getNextDayOfWeek(0, 7, 0);
  const sunEndDate = new Date(sunDate.getTime() + 3.5 * 60 * 60 * 1000);

  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: "Sunday Service - Gospel Pillars Church",
    startdt: sunDate.toISOString(),
    enddt: sunEndDate.toISOString(),
    body: "Join us for Sunday Service at The Ark of Light for All Nations, Ikeja.\nFirst Service: 8:00 AM | Second Service: 9:15 AM WAT.",
    location: "The Ark of Light for All Nations, Plot 11, Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria"
  });

  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}
