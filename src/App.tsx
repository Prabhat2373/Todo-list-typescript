import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

// String Data Type
let name: string = "clash"
console.log(name)
//Number Data Type
let age: number = 17
console.log(age)

// Write Functions in Typescript

let printName = (name: string) => console.log(name);
printName("CC")

// function printName(name:any){
//   console.log(name)
// }
// printName("Clash")

// Array of String 
// let hobbies: string[] = ['code', 'learn', 'eat']
// console.log(hobbies)

// // Array of Numbers
// let numbers:number[] = [177,1232,234,344]
// console.log(numbers)

// // Tuple in typescript
// let roles: [string, number] = ["Prabhat", 12] // It can contain only one string and one number and it must use as the way it's defined
// console.log(roles)

// // Defining types of an Object
// type Person = {
//   name: string,
//   age?: number // if you want to make that property as optional then give "?" after that variable
// }

interface Person {
  name: string,
  age?: number
}
interface Guy extends Person {
  profession: string,
  experience?: number
}

let programmer: Guy = {
  name: "Clash",
  age: 25,
  profession: "Frontend Developer",
  experience: 2
}
let newProgrammer: Guy = {
  name: "Clash",
  age: 25,
  profession: "Frontend Developer",
}
console.log(newProgrammer)
console.log(programmer)

// type a ={
//   a:string,
//   b:number,
// }

// type b = a &{
//   c:string,
//   d:number
// }

// let d:b = {
//   a:"a",
//   b:1,
//   c:"c",
//   d:2
// }


// // use that defined object type 
// let persons: Person = {
//   name:"Prabhat",
//   age : 17
// }
// console.log(persons);

// // Define Array of defined Object
// let lotsOfPersons: Person[] = [
//   {name:"clash"},
//   {name:"Prabhat", age:17},
//   {name:"something"}
// ]
// console.log(lotsOfPersons);

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoItem, setTodoItems] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodoItems([...todoItem, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  console.log(todoItem)

  return (
    <div className="App">
      <span className="taskify">
        Tasks.Ly
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoItem={todoItem} setTodoItems={setTodoItems} />
    </div>
  );
}

export default App;
