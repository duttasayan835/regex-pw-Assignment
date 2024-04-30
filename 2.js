function random() {
  return Math.floor(Math.random() * 100);
}

function generateRAndom(delay) {
  console.log(`Generating a random number after a delay of ${delay} seconds`);
  let countdown = delay;
  const interval = setInterval(() => {
    console.log(`${countdown} seconds remaining`);
    countdown--;
    if (countdown === 0) {
      clearInterval(interval);
      const random1 = random();
      console.log(`Random numbers generated : ${random1}`);
    }
  }, delay * 1000);
}
generateRAndom(3);
