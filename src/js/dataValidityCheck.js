import { typesList } from "./typesList";

function nameValidityCheck(name) {
  if(!(typeof(name) === "string")) {
    throw new Error("name is not a string");
  }

  if (name.length < 2) {
    throw new Error("The minimum number of characters in the name is 2");
  }

  if (name.length > 10) {
    throw new Error("The maximum number of characters in the name is 10");
  }

  return;
}

function typeValidityCheck(type) {
  if (!(typesList.includes(type))) {
    throw new Error(`type: "${type}", not found!`);
  }
}

export {
  nameValidityCheck,
  typeValidityCheck
};