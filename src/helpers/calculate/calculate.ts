export const timeAgo = (timestamp: string): string => {
  const now = new Date();
  const createdAt = new Date(timestamp);
  const diffMs = now.getTime() - createdAt.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
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
