import React, {useState} from 'react'
import {useGlobalContext} from '../context'

export default function Search() {
  const [text, setText] = useState('');
  const {setSearchTerm, fetchRandomMeals} = useGlobalContext();
  
  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(text){
      setSearchTerm(text)
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeals()
  }

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='type favourite meal' value={text} className='form-input' onChange={handleChange}/>
        <button type="submit" className="btn">Search</button>
        <button type='button' className='btn btn-hipster' onClick={handleRandomMeal}>Surprise Me!</button>
      </form>
    </header>
  )
}
