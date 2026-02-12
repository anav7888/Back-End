import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([])

  function fetchNotes() {
    axios.get('http://localhost:3000/api/notes')
      .then((res) => {
        setNotes(res.data.notes)
      })
  }
  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const { title, description } = e.target.elements
    console.log(title.value, description.value)

    axios.post('http://localhost:3000/api/notes', {
      title: title.value,
      description: description.value
    })
    .then((res) =>{
      console.log(res.data)
      fetchNotes()
    })


  }

function handleDeleteNote(noteid){
  axios.delete("http://localhost:3000/api/notes/"+noteid)
  .then((res)=>{
    console.log(res.data)
    fetchNotes()
  })
}

function handleUpdateNote(noteid){
  const newDescription = prompt("Enter New Description")
  axios.patch("http://localhost:3000/api/notes/"+noteid,{
    description:newDescription
  })
  .then((res)=>{
    console.log(res.data)
    fetchNotes()
  })
  
}


  return (
    <>

      <form className="form w-fit h-fit text-white/90 p-5 flex gap-3"
        onSubmit={handleSubmit}>
        <input name='title' className='border-2 py-1.5 px-3 rounded-[10px] opacity-70' type="text" placeholder='Enter Title' />
        <input name='description' className='border-2 py-1.5 px-3 rounded-[10px] opacity-70' type="text" placeholder='Enter Description' />
        <button className="bg-amber-50 text-black/80 py-1.5 px-3.5 rounded-[10px] font-bold ">Create notes</button>
      </form>

      <div className='w-fit h-fit text-white/90 p-5 flex gap-2.5'>
        {
          notes.map(note => {
            return <div className=' w-fit h-fit notes flex items-center flex-col bg-[#474747] py-2 px-5 rounded-2xl '>
              <h1 className='font-bold'>{note.title}</h1>
              <p className='font-semibold'>{note.description}</p>
             <div className='flex  gap-1'> <button 
              onClick={()=>{
                handleUpdateNote(note._id)
              }}
              className='bg-white text-black px-2 py-0.5 mt-2 font-bold rounded-[5px]'>Update</button>
              <button 
              onClick={()=>{
                handleDeleteNote(note._id)
              }}
              className='bg-white text-black px-2 py-0.5 mt-2 font-bold rounded-[5px]'>Delete</button></div>
            </div>
          })
        }

      </div>
    </>
  )

}

export default App