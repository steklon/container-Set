import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from "../Character";
import { characters } from "../characters";

test("checking the Bowman function", () => {
  expect(new Bowman("user")).toEqual(characters.bowman);
});

test("checking the Swordsman function", () => {
  expect(new Swordsman("user")).toEqual(characters.swordsman);
});

test("checking the Magician function", () => {
  expect(new Magician("user")).toEqual(characters.magician);
});

test("checking the Undead function", () => {
  expect(new Undead("user")).toEqual(characters.undead);
});

test("checking the Daemon function", () => {
  expect(new Daemon("user")).toEqual(characters.daemon);
});

test("checking the Zombie function", () => {
  expect(new Zombie("user")).toEqual(characters.zombie);
});