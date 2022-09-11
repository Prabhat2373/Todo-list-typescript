import React from "react";
import { Todo } from "../model";
import "./Styles.css";
import TodoCard from "./TodoCard";

interface Props {
    todoItem: Todo[];
    setTodoItems: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoItem, setTodoItems }: Props) => {
    return (
        <div className="container">
            <div className="todos">
                <span className="todos__heading">ACTIVE TASKS</span>
                {todoItem.map((todo) => (
                    <TodoCard
                        todo={todo}
                        key={todo.id}
                        todoItem={todoItem}
                        setTodoItems={setTodoItems}
                    />
                ))}
            </div>
            <div className="todos complete">
            <span className="todos__heading">COMPLETED TASKS</span>
                {todoItem.map((todo) => (
                    <TodoCard
                        todo={todo}
                        key={todo.id}
                        todoItem={todoItem}
                        setTodoItems={setTodoItems}
                    />
                ))} 
            </div>
        </div>
    );
};

export default TodoList;
