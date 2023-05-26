import { useRef, useState } from "react";

const Form = () => {
	const [person,setPerson]=useState({name:'charlene',age:0});
  return (
	<>
    <form onSubmit={(event)=>{
	event.preventDefault();
	console.log(person)
	
    }}>
	<div className="mb-3">
		<label htmlFor="name" className="form-label">Name</label>
		<input value={person.name} onChange={(event)=>
		{setPerson({...person,name:event.target.value});
		console.log(event.target.value)}}
	id="name" type="text" className='form-control'/>
	</div>
	<div className="mb-3">
		<label htmlFor="age" className="form-label">
			Age
		</label>
		<input  onChange={(event)=>{setPerson({...person,age:parseInt(event.target.value)})}} id="age" type="number" className="form-control" />
	</div>
	<button className="btn btn-primary" type="submit">Submit</button>
    </form>
    </>
  )
}

export default Form