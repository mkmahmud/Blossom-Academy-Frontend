export const timeAgo = (timestamp: string): string => {
  const now = new Date();
  const createdAt = new Date(timestamp);
  const diffMs = now.getTime() - createdAt.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); // Approximate 30 days in a month
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
};

// Conver timestamp to time and date
export const timeAndDate = (timestamp: string | number | Date) => {
  const dateObject = new Date(timestamp);

  // Date Options
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Time Options
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  // @ts-ignore
  const formattedDate = dateObject.toLocaleDateString("en-GB", options);

  // @ts-ignore
  const formattedTime = dateObject.toLocaleTimeString("en-US", timeOptions);

  return { formattedDate, formattedTime };
};

// Convert number to spliting
export const numberToSplitting = (number: number) => {
  const numberString = number.toString();
  const parts = [];
  for (let i = numberString.length - 3; i > 0; i -= 3) {
    parts.unshift(numberString.slice(i, i + 3));
  }
  parts.unshift(numberString.slice(0, numberString.length % 3 || 3));
  return parts.join(",");
};

// Convertt this format into time Thu Oct 10 2024 11:15:28 GMT+0600 (Bangladesh Standard Time)
export const formatCustomDate = (inputDate: any) => {
  const now = new Date();
  const date = new Date(inputDate);

  // Helper function to format AM/PM
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    return `${hours}:${minutes}${ampm}`;
  };

  // Check if the date is today
  const isToday = date.toDateString() === now.toDateString();

  // Check if the date is yesterday
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = date.toDateString() === yesterday.toDateString();

  if (isToday) {
    return formatTime(date); // If today, return time in "hh:mmAM/PM"
  } else if (isYesterday) {
    return date.toLocaleDateString("en-US", { weekday: "short" }); // If yesterday, return day (e.g., "Wed")
  } else {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" }); // Else, return month and day (e.g., "Oct 9")
  }
};
