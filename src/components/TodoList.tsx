import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import "./Styles.css";
import TodoCard from "./TodoCard";

interface Props {
  todoItem: Todo[];
  setTodoItems: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todoItem,
  setTodoItems,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="Active-todoId">
        {(provided) => (
          <div
            className="todos"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <span className="todos__heading">ACTIVE TASKS</span>
            {todoItem.map((todo, index) => (
              <TodoCard
                index={index}
                todo={todo}
                key={todo.id}
                todoItem={todoItem}
                setTodoItems={setTodoItems}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="CompleteTodos">
        {(provided) => (
          <div
            className="todos complete"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <span className="todos__heading">COMPLETED TASKS</span>
            {completedTodos.map((todo, index) => (
              <TodoCard
                index={index}
                todo={todo}
                todoItem={completedTodos}
                key={todo.id}
                setTodoItems={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
