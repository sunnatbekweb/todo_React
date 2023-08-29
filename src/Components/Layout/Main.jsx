import React, { useReducer, useState } from 'react'
import { TextField, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Main = () => {
    const ints = {
        todo: [],
        taskTitle: "",
    }

    const reducer = (state, action) => {
        // console.log(state)
        // console.log(action)

        switch (action.type) {
            case 'TITLE':
                return { ...state, taskTitle: action.payload };
            case 'ADDTASK':
                return { ...state, todo: [...state.todo, action.payload] };
            case "DELETED":
                return { ...state, todo: [...action.payload] };


        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, ints)

    const addTask = (e) => {
        const newTask = {
            title: state.taskTitle,
            id: Date.now(),
        }

        if (newTask.title.trim().length > 0) {
            dispatch({ type: "ADDTASK", payload: newTask })
        }
    }

    const removetask = (id) => {
        let latestTodo = state.todo.filter((item) => item.id != id);
        console.log("mana: ", latestTodo);
        dispatch({ type: "DELETED", payload: latestTodo });

    };


    return (
        <main className='py-10'>
            <div className="container">
                <div className='flex items-center gap-5 mb-8'>
                    <TextField onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })} fullWidth label="Enter task" id="fullWidth" size='small' />
                    <Button onClick={() => addTask()} variant="contained" color='primary' size='medium'>Add</Button>
                </div>

                <div className='flex flex-col h-[700px] w-full border overflow-y-scroll px-5 py-3 bg-blue-50 rounded'>
                    {
                        state.todo.length ? state.todo.map((item) => {
                            console.log(state.todo)
                            return (
                                <div key={item.id} className='py-3 px-5 bg-blue-100 w-full my-3 rounded-md flex items-center justify-between'>
                                    <h4>{item.title}</h4>
                                    <Button onClick={() => removetask(item.id)} variant="outlined" color='error' startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </div>
                            )
                        }) : <h2 className='text-center py-10 text-red-500 text-2xl'>You don't have tasks</h2>
                    }
                </div>
            </div>
        </main>
    )
}

export default Main