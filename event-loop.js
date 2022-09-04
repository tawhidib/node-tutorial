console.log("first");

setTimeout(() => {
  console.log("second");
}, 1);

for (let i = 0; i < 1000000000; i++) {
  if (i === 1000000000 - 1) {
    console.log("third");
  }
}

// OUTPUT:
// -> first
// -> third
// -> second
