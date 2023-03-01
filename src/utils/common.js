const getTime = (time) => {
  const formattedTime = new Date(time);
  return `${formattedTime.toDateString()} ${formattedTime.toLocaleTimeString()}`;
};

export default getTime;
