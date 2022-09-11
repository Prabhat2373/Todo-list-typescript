import React, { useReducer } from 'react'
import { Todo } from '../model'


export const ReducerExample = () => {
    // type Actions =
    //     { type: "add", payload: string }
    //     |
    //     { type: "remove", payload: number }
    //     |
    //     { type: "done", payload: number }

    // interface Props {
    //     state: Todo[];
    //     action: Actions
    // }
    // const TodoReducer = ({ state, action }: Props) => {
    //     switch (action, type) {
    //         case 'add':
    //             return [
    //                 ...state,
    //                 {id: Date.now(), todo: action.payload, isDone:false}
    //             ]
    //         case 'remove':
    //             return state.filter((todo)=> todo.id !== action.payload)
    //         case 'done':
    //             return state.map((todo)=> todo.id !== action.payload ? {...todo, isDone: !todo.isDone } : [])

    //         default:
    //             return state;
    //     }
    // }

    // const [state, dispatch] = useReducer(TodoReducer, [])

    return (
        <div>

        </div>
    )
}
