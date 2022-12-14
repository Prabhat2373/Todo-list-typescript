import React, { useState, useRef, useEffect } from "react";
import "./Styles.css";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdFileDownloadDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  todo: Todo;
  index: number;
  todoItem: Todo[];
  setTodoItems: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard = ({ todo, todoItem, setTodoItems, index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [edtiTodoTxt, setEdtiTodoTxt] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodoItems(
      todoItem.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoItems(todoItem.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodoItems(
      todoItem.map((todo) =>
        todo.id === id ? { ...todo, todo: edtiTodoTxt } : todo
      )
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [edit]);

  return (
      <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided) => (
          <form
          
            className="todoCard"
            onSubmit={(e) => handleEdit(e, todo.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {edit ? (
              <input
                ref={inputRef}
                value={edtiTodoTxt}
                onChange={(e) => {
                  setEdtiTodoTxt(e.target.value);
                }}
                className="todos_card_text inp"
              />
            ) : todo.isDone ? (
              <s className="todos_card_text">{todo.todo}</s>
            ) : (
              <span className="todos_card_text">{todo.todo}</span>
            )}

            <div>
              <span
                className="icon"
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              <span className="icon" onClick={() => handleDelete(todo.id)}>
                <AiFillDelete />
              </span>
              <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdFileDownloadDone />
              </span>
            </div>
          </form>
        )}
      </Draggable>
    
  );
};

export default TodoCard;
