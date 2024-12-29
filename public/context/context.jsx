import { createContext, useReducer } from "react";

import { INITIALSTATE, reducerContext } from "./reducerContext";

export const ToDoContext = createContext(INITIALSTATE)

export const Provider = ({ children }) => {
    const [toDo, dispatch] = useReducer(reducerContext, INITIALSTATE)

    // actions

    const addToDo = (todo) => {
        console.log(toDo)
        dispatch({ type: "FETCH_TASKS_SUCCESS", payload: todo })
    }

    const deleteToDo = (id) => {

        dispatch({ type: "DELETE_TASKS", payload: id })
    }

    const toggleToDo = (id) => {
        dispatch({ type: "TOGGLE_COMPLETE", payload: id })
    }


    return (

        <ToDoContext.Provider value={{
            addToDo,
            deleteToDo,
            toDo,
            toggleToDo
        }}>
            {children}
        </ToDoContext.Provider>

    )

}