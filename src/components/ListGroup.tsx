//import {  useState } from "react"
import './ListGroup.css'
import { AiFillAccountBook } from 'react-icons/ai';
interface Props{
	items:string[];
	heading:string; //heading is of type string
	onSelectItem?:(item:string)=>void; //onSelectItem is a function
}

// function ListGroup({items,heading,onSelectItem}:Props){
	function ListGroup({items,heading}:Props){
	//let items=["New york", "San Francisco","Tokyo","London","Paris","Munich"];
	
	//Hook
	//const [selectedIndex,setSelectedIndex]=useState(-1)
	//items=[];
	
	const itemcomponent=items.map((item)=><li>{item}</li>)
	// <li 
	// key={item} 
	// onClick={()=>{setSelectedIndex(index); 
	// onSelectItem(item)}}
	// className={
	// 	selectedIndex === index 
	// 	? "list-group-item active"
	// 	:"list-group-item"}>
	//  	{item}

	// </li>)

		
	return (
		<>
	<h1>{heading}</h1>
	<AiFillAccountBook color="pink" size="60" />
	{items.length===0
	? <p>no items present</p>
	:<ul className="myclass " >{itemcomponent}</ul>}
	
      </>)
}

export default ListGroup