"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
  }
  const deletehandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }
  let rendertask=<h2>No task Available</h2>

  if (mainTask.length > 0)
  {
    rendertask = mainTask.map((t,i) => {
    return (
      <li key={i} className='flex items-center justify-between m-3'>
        <div className='flex justify-between w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title }</h5>
        <h6 className='text-xl font-medium'>{t.desc }</h6>
        </div>
        <button
          onClick={() => {
            deletehandler(i)
         }}  className='bg-red-400 text-white font-bold rounded p-3'>Delete</button>
      </li>
    )
  })
  }
  return (
    <>
      <h1 className='bg-slate-900 text-white p-4 text-4xl font-bold text-center'>Raktim TodoList</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter the Task here' value={title} onChange={(elem)=>{
          // console.log(e.target.value)
          settitle(elem.target.value)
        }}/>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter the Description here' value={desc} onChange={(e)=>{
          // console.log(e.target.value)
          setdesc(e.target.value)
        }}/>
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-4'>Add Task</button>
        
      </form>
      <hr />
      <div className='p-6 bg-slate-300'>
        <ul>
          {rendertask}
        </ul>
      </div>
    </>
  )
}

export default page