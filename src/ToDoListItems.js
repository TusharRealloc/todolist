import React from 'react'
import { useState } from 'react'
import { deleteRequest, updateRequest } from './Api/request'
import './index.css'
const ToDoListItems = (props) => {


    const { msg, id, isDone } = props.todoListItem
    const [editTodoItem, setEditTodoItem] = useState(msg)
    const deleteData = async (id) => {
        await deleteRequest(`todo/${id}.json`)
        alert("your task delete Successfully ")
        props.getData()

    }

    const doneData = async (id, msg) => {

        await updateRequest(`todo/${id}.json`, { msg: msg, isDone: true })
        alert("your task is done")
        props.getData()
    }
    const doneclass=isDone? 'done_task': ''

    const updateEditedData = async (id) => {
        await updateRequest(`todo/${id}.json`, { msg: editTodoItem, isDone: false })
        alert("your task Edited Successfully ")
        props.getData()
    }
    const editData = (e) => {
        setEditTodoItem(e.target.value)
    }

    return (
        <>
            <div className="row todoItems">
                <div className='col-sm-9' id={id}   >
                    <input type="text" className={`input ${doneclass}`} value={editTodoItem} onChange={editData} />
                </div>
                <div className='col buttons-div'>
                    <div className="button"><button type="button" className="btn btn-primary" onClick={() => { updateEditedData(id) }}>Edit</button></div>
                    <div className="button"><button type="button" className="btn btn-success" onClick={() => { doneData(id, msg) }}>Done</button></div>
                    <div className="button"><button type="button" className="btn btn-danger" onClick={() => { deleteData(id) }}>Delete</button></div>
                </div>
            </div>

        </>
    )

}

export default ToDoListItems