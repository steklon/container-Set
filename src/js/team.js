export default class Team {
  constructor() {
    this.members  = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`объект по имени "${character.name}" уже есть в команде`);
    }

    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach(character => {
      try {
        this.add(character);
      } catch(err) {
        return;
      }
    });
  }

  toArray() {
    return [...this.members];
  }
};