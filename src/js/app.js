import { Bowman, Magician, Swordsman, Daemon } from "./Character";
import Team from "./team";

const userSanta = new Bowman("Santa");

const userAndroid = new Magician("Android");
const userSnake = new Swordsman("Snake");
const userRockie = new Daemon("Rockie");


const setMember = new Team();

setMember.add(userAndroid);
setMember.add(userSanta);
setMember.add(userSnake);

setMember.addAll(userAndroid, userSanta, userSnake, userSanta, userRockie);
console.log('setMember.members', setMember.members);

console.log(setMember.toArray());