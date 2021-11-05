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
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const getFormatDate = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  return (
    days[dateObject.getDay() - 1] +
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
  return arr.filter((e, index) => index % 8 === 0);
};
