import { useState } from 'react'

import './App.css'

const articles = [

  ' '

]

function App() {

  const [titles, setTitles] = useState(articles)

  const [newTitle, setNewTitle] = useState ('')


  function addTitle(e){
    e.preventDefault()
    const newTitles = [newTitle, ...titles]

    setTitles(newTitles)

    setNewTitle('')

    console.log(newTitles);
    
  }

  return (
    <>
      <div className='container'>
      <h2>Your Article</h2>

      
        <form onSubmit={addTitle}>
          <div className='mb-3'>
            <label htmlFor='task' className='form-label'>Title</label>
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" value={newTitle}
            onChange={e=> setNewTitle(e.target.value)}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>

        </form>

        <ul className="list-group">
                {titles.map((title, index)=> <li key={index} className='list-group-item'>{title} 
              </li>)} 
        </ul>   
      </div>
      
    </>
  )
}

export default App
