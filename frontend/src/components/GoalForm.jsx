import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'


function GoalForm() {
   const [text, setText] = useState('')
   
   const disPatch = useDispatch()

    const onSubmit = (e) =>{
        e.preventDefault()
        disPatch(createGoal({text}))
        setText('')
    }
  return (
    <section className='form'>
    <form onSubmit ={onSubmit}>
    <div className='form-group'>
     <label htmlFor='text'>Goal</label>
     <input type='text'name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} />
    </div>
    <div className='form-group'>
      <button className='btn btn-block' type='submit'>
       Add goal
      </button>
    </div>
    </form>
    </section>
   )
}

export default GoalForm