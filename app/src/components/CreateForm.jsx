import './createform.css'
import { useState } from 'react'
function CreateForm(){
    let [title, Settitle] = useState('')
    let [desc, Setdesc] = useState('')
    let [num, Setnum] = useState('1')
    function handleSave(){
        let num2 = num+"d"
        localStorage.setItem(num, title)
        localStorage.setItem(num2, desc)
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
        </div>
    )
}
export default CreateForm