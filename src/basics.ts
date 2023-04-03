// Primitives

let age: number;

age = 12;

let userName: string;

userName = "username";

let isStudent: boolean;

isStudent = false;

// More complex

// define array of strings
let hobbies: string[]; 

hobbies = ["run", "read", "nature walk"];

// define object 
let person: {
    name: string;
    age: number;
};                  

person = {
    name: "Max",
    age: 23,
};

// define an array of objects 
let people:{
    name: string;
    age: number;
} [];  

people = [{name: "john",
age: 29,},{name: "Max",
age: 23,}];

// type inference
// how to add more types?
let book1 = "Atomic Habbits";
// book= 45;

let course: string | number ;
course = "Time management";
course = 23;

// define a type
 
type Book = {
    title:string;
    author:string;
    pages:number;
    year:number;
};

let book: Book;

book = {
    title:"Atomic Habits",
    author: "J.",
    pages: 300,
    year: 2020,
};

let books: Book[]; // an array that containes objects 

// Functions 
function add(a:number, b:number) {
    return a+b;
};

// Generics

function insertNewItem (array:any[], value: any) {
    const newArray = [value, ... array];
    return newArray;
}




