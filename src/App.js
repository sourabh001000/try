import React ,{useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import Edit from"./Edit"

function App() {
 const [text,setText]=useState("");
 const [date,setDate]=useState("");
 const [time,setTime]=useState("");
 const [img,setImg]=useState(null);

 const [data,setData]=useState([]);
console.log(img)
const submit1=()=>{
  setData(data.concat( {
    text:text,
    date:date,
    time:time
  }));
  setText("");
  setTime("");
  setDate("");
}
const updateList= (text,date,time,orignalTime)=>{
  const newlink=data.map(list=>{
    if(list.time===orignalTime){
        list.text=text;
       list.date=date;
        list.time=time;
    }
    return list;
    // console.log("data")

  })
  setData(newlink);

  console.log(data);


}
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const classes = useStyles();

  return (
    

    <div className="App">
       <form className={classes.root} noValidate autoComplete="off"> 
        <TextField
          id="standard-password-input"
          label="Meating Title"
          type="text"
          value={text}
          onChange={(e)=>{
            setText(e.target.value);
           }}
          autoComplete="current-password"
        />
         <TextField
    id="date"
    onChange={(e)=>{
      setDate(e.target.value);
     }}
    label="Birthday"
    type="date"
    value={date}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
          <TextField
    id="time"
    label="Time"
    value={time}
    onChange={(e)=>{
      setTime(e.target.value);
     }}

    type="time"
    defaultValue={date}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  /> 
  <input type="file" onChange={(e)=>{
     setImg(URL.createObjectURL(e.target.files[0]));
  }}/>    
    </form>
    <div className="button"> <Button  type="submit" onClick={submit1} variant="contained" color="primary">
        Add Meating
      </Button></div> 
      <iframe src={img}></iframe>       
       
        {data.map(data1=>{
          return(
            <Edit text={data1.text} date={data1.date} time={data1.time} onUpdate={updateList}/>
          )
        //  <li key={data1.time} >

           {/* {data1.text}        {data1.time}         {data1.date} <Button   onClick={()=>updateList} variant="contained" color="primary">
         update
       </Button> */}
      //  </li>      
          
        })}
        
        {/* {isEdit?    <form >
      <input  value={text} type="text" onChange={(e)=>{
         setText(e.target.value);
        }}/>
      <input type="date" value={date}  onChange={(e)=>{
         setDate(e.target.value);
        }}/>
      <input type="time" value={time} onChange={(e)=>{
         setTime(e.target.value);
        }}/>
          <Button   variant="contained" color="primary">
        submit
      </Button>
        </form>
      
      :""} */}
    </div>
  );
}

export default App;
