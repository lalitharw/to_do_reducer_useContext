import { useReducer } from "react";

export const INITIALSTATE = {
    tasks: [],
    loading: false,
    error: null
};


export const reducerContext = (state, action) => {
    switch (action.type) {
        case "FETCH_TASKS":

            return {
                ...state,
                loading: true
            }
        case "DELETE_TASKS":
            return {
                ...state,
                tasks: state.tasks.filter((todo) => todo.id !== action.payload) // Filter out the task
            };
        case "FETCH_TASKS_SUCCESS":
            return {
                ...state,
                loading: false,
                tasks: [
                    action.payload, ...state.tasks
                ]
            }

        case "TOGGLE_COMPLETE":
            return {
                ...state,
                tasks: state.tasks.map((task) => (task.id === action.payload) ? { ...task, completed: !task.completed } : task)
            }
        // return {
        //     ...state,
        //     tasks: state.tasks.map((task) => {
        //         task.id === action.payload ? { ...task, completed: !task.completed } : task
        //     })
        // }
        case "FETCH_TASKS_ERROR":
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}