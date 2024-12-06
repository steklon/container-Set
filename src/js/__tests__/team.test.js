import { Bowman, Magician, Swordsman, Daemon } from "../Character";
import Team from "../team";

describe('проверка метода add() класса Team', () => {
  test('добавление объекта который есть в команде', () => {
    const userSanta = new Bowman("Santa");
    const setMember = new Team();
    setMember.add(userSanta);

    expect(() => setMember.add(userSanta)).toThrow();
  });

  test('добавление объекта которого нет в команде', () => {
    const userSanta = new Bowman("Santa");
    const userAndroid = new Magician("Android");
    const userSnake = new Swordsman("Snake");
    const setMember = new Team();
    setMember.add(userSanta);
    setMember.add(userAndroid);
    setMember.add(userSnake);

    expect(setMember.members.size).toBe(3);
  });
});

describe('проверка метода addAll() класса Team', () => {
  test('добавление объектов в команду с задвоением', () => {
    const userSanta = new Bowman("Santa");
    const userAndroid = new Magician("Android");
    const userSnake = new Swordsman("Snake");
    const setMember = new Team();
    setMember.addAll(userSanta, userAndroid, userSanta, userSnake);

    expect(setMember.members.size).toBe(3);
  });

  test('добавление объектов в команду без задвоения', () => {
    const userSanta = new Bowman("Santa");
    const userAndroid = new Magician("Android");
    const userSnake = new Swordsman("Snake");
    const setMember = new Team();
    setMember.addAll(userSanta, userAndroid, userSnake);

    expect(setMember.members.size).toBe(3);
  });
});

describe('проверка метода toArray() класса Team', () => {
  test('Метод toArray должен производить конвертацию Set в массив', () => {
    const userSanta = new Bowman("Santa");
    const userAndroid = new Magician("Android");
    const userSnake = new Swordsman("Snake");
    const setMember = new Team();
    setMember.addAll(userSanta, userAndroid, userSanta, userSnake);

    expect(setMember.toArray()).toBeInstanceOf(Array);
  });
});