import './createform.css'
import { useState } from 'react'
function CreateForm(){
    let [title, Settitle] = useState('')
    let [desc, Setdesc] = useState('')
    let [num, Setnum] = useState('1')
    let [del, Setdel] = useState('')
    let [check, Setcheck] = useState('')
    function handleSave(){
        let num2 = num+"d"
        localStorage.setItem(num, title)
        localStorage.setItem(num2, desc)
        window.location.reload(false)
    }
    function handleDelete(){
        localStorage.removeItem(del)
        localStorage.removeItem(del+"d")
        window.location.reload(false)
    }
    function handleCheck(){
        localStorage.setItem(check, "Done")
        window.location.reload(false)
    }
    return(
        <div className="Form">
            <label>The Title</label>
            <input type="text" onChange={(e) => Settitle(e.target.value)} /><br />
            <label>The Description</label>
            <input type="text" onChange={(e) => Setdesc(e.target.value)}/><br />
            <label>Choose Square</label>
            <input type="num" min="1" max="12" onChange={(e) => Setnum(e.target.value)}/><br />
            <button onClick={handleSave} >Save</button>
            <div className='checkbox'>
                <label>Mark as done</label><br />
                <input type="num" min="1" max="12" onChange={(e) => Setcheck(e.target.value)}/><br />
                <button onClick={handleCheck}>Done</button>
            </div>
            <div className="deletebox">
                <label>Delete todo number</label><br />
                <input type="num" min="1" max="12" onChange={(e) => Setdel(e.target.value)}/><br />
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
export default CreateForm