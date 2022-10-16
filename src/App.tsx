import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
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


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoItem, setTodoItems] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodoItems([...todoItem, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  console.log(todoItem)
  console.log(completedTodos)

  return (
    <DragDropContext onDragEnd={() => {
      setCompletedTodos(todoItem)
    }}>
      <div className="App">
        <span className="taskify">
          Tasks.Ly
        </span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todoItem={todoItem}
          setTodoItems={setTodoItems}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />

      </div>
    </DragDropContext>

  );
}

export default App;
