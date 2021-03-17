// //object
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Araik",
//   age: 33,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

//type alias 
type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

//enum
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
} // the =5 after admin determines the  index start
//obj
const person = {
  name: "Araik",
  age: 33,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role[1] = 10;
console.log(person.name);

//array  Any list with one type of data
// so string array will
let favoriteAcitvities: string[];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

//Union types
function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultType === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, "as-text");
const combinedNames = combine("Max", "Anna", "as-text");
const combinedStringAge = combine("10", "20", "as-number");
console.log(combinedAges);
console.log(combinedStringAge);
console.log(combinedNames);

//literal types  - Certain variagble or parameter should hold number
// or string but are also very clear about the exact value
