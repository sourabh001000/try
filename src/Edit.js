import React,{useState} from 'react'
import "./App.css";
import {Button} from '@material-ui/core'


function Edit(props) {
    const [isEdit,setIsEdit]=useState(false);
const [text,setText]=useState("");
 const [date,setDate]=useState("");
 const [time,setTime]=useState("");
    const onEdit=()=>{
        if(!isEdit){
            setIsEdit(true);
        }
        console.log(isEdit)
    }
    const onUpdate1=(e)=>{
        e.preventDefault();
        props.onUpdate(text,date,time,props.time);
        console.log("updated")
        setIsEdit(false);

    }
    return (
        <div>
            {isEdit?(<form >
      <input   type="text" defaultValue={props.text} onChange={(e)=>{
         setText(e.target.value);
        }}/>
      <input type="date" defaultValue={props.date}  onChange={(e)=>{
         setDate(e.target.value);
        }}/>
      <input type="time" defaultValue={props.time} onChange={(e)=>{
          console.log("hi")
         setTime(e.target.value);
        }}/>
        {" "}
          <Button  type="submit" onClick={onUpdate1} variant="contained" color="primary">
        save
      </Button>
            </form>):(<li onClick={onEdit}>{props.text} {"   "} {props.date}{"   "}{props.time}{"   "}  </li>)}

        </div>
    )
}

export default Edit
