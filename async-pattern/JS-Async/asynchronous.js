const myClock = () => {
  const d = new Date();
  console.log(`${d.getHours() % 12}:${d.getMinutes()}:${d.getSeconds()}`);
};

setInterval(myClock, 1000);
