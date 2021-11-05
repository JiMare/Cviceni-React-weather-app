const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getFormatDate = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  return (
    days[dateObject.getDay()] +
    ", " +
    dateObject.getDate() +
    " " +
    months[dateObject.getMonth()]
  );
};

export const formatTime = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  return dateObject.getHours() + ":" + dateObject.getMinutes();
};

export const getFiveForecasts = (arr) => {
  return arr.filter((e, index) => (index + 1) % 8 === 0);
};
