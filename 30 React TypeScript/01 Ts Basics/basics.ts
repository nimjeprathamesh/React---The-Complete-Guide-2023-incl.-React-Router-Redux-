// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primitives
let age: number;
age = 12;
let username: string;
username = 'Max';
let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cookies'];
let person: {
    name: string;
    age: number;
};
person = {
    name: 'Max',
    age: 32
};
// person = {
//     isEmployee: true
// };
let people: {
    name: string;
    age: number;
}[];

// Type inference
let course: string | number = 'React - The Complete Guide';
course = 12341;

// Functions & types
function additions(a: number, b:number): number | string {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split('');