import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { deleteRequest, getRequest, postRequest } from './Api/request'
import ToDoListItems from './ToDoListItems'

const ToDoList = (props) => {
    const [todoInput, setToDoInput] = useState({ msg: '', isDone: false })
    const [todoData, setTodoData] = useState([])
    const onChangeEventHandler = (e) => {
        setToDoInput({ ...todoInput, msg: e.target.value })
    }
    const getData = async() => {
        const data = []
        const res = await getRequest('todo.json')
        console.log(res.data);
        for (let key in res.data) {
            let obj={...res.data[key],id:key}
            data.push(obj)
            
        }
        setTodoData(data)
    }

    useEffect(() => {
        getData()
    }, [])
    const onSubmitEventHandler = async (e) => {
        e.preventDefault()
        
        await postRequest('todo.json', todoInput)
        setToDoInput({ msg: '', isDone: false })
        getData()

    }

    return (
        <div className="container my-5">
            <div className='row text-center'><h3>Todo List</h3></div>
            <div className='row ml-0'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Add Todo</label>
                    <input type="email" className="form-control" value={todoInput.msg} onChange={onChangeEventHandler} id="exampleFormControlInput1" placeholder="Add new todo" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={onSubmitEventHandler}>Submit</button>
                </div>
            </div>
            {(todoData && todoData.length > 0) && todoData.map((item, index) => {
                return (
                    <ToDoListItems key={index} todoListItem={item} getData={getData}/>
                )
            })}
        </div>
    )

}

export default ToDoList