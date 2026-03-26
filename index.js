const prefixes = ["Gob", "Wiz", "Shadow", "Dark", "Iron", "Mud"];
const suffixes = ["lin", "ard", "stalker", "crusher", "fist", "rot"];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const names = new Set();
// Keep trying until we have 10 unique names
while (names.size < 10) {
  names.add(getRandomElement(prefixes) + getRandomElement(suffixes));
}

// Print them out
names.forEach((name, index) => {
  console.log("Unique Name " + (index + 1) + ": " + name);
});

