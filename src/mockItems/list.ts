export type listItem = {
  id: number;
  name: string;
  type: string;
};

const alphabet = [
  "Ape",
  "Bike",
  "Corn",
  "Dolphin",
  "Elephant",
  "Fragola",
  "Giostra",
  "Helium",
  "Istrix",
  "Javelin",
  "Karma",
  "Love",
  "Mountain",
  "Nosepass",
  "Ortodox",
  "Paddel",
  "Qwerty",
  "Rave",
  "Sex",
  "Trip",
  "Uber",
  "Velocity",
  "Weasel",
  "Xavier",
  "Y",
  "Zed",
];

const categories = ["pc", "other"];

export const mockList = [] as listItem[];

function generateRandomItem() {
  return {
    id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
    name: alphabet[Math.floor(Math.random() * 26)],
    type: categories[Math.floor(Math.random() * 1)],
  };
}

for (let i = 0; i < 20; i++) {
  mockList.push(generateRandomItem());
}
