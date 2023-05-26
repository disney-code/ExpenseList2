import {useState,ChangeEvent,FormEvent,ComponentType } from 'react'
import './FormItem.css'
interface FormData{
  description:string,
		amount:number,
		category:string
}
interface FormProps {
  onSubmitProp: (data: FormData) => void;
}
const FormItem: ComponentType<FormProps> = ({onSubmitProp}:FormProps) => {
	const [formItem,setFormitem]=useState({
		description:"",
		amount:0,
		category:""
	})
	
	const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setFormitem({...formItem,category:event.target.value});
	      };
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		
		setFormitem({...formItem,description:e.target.value});
	      };
	const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		
		setFormitem({...formItem,amount:parseInt(e.target.value)});
	      };      

	const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
		event.preventDefault();
		onSubmitProp(formItem)
		
	}

	
  return (
    <form onSubmit={handleSubmit}>
	<div className="mb-3">
<label htmlFor="description">Description</label>
<input
      type="text"
      id="description"
      value={formItem.description}
      onChange={handleInputChange}
      className='form-control'
    />
    </div>
    <div className="mb-3">
<label htmlFor="amount">Amount</label>
<input
      type="text"
      id="amount"
      value={formItem.amount}
      onChange={handleAmountChange}
      className='form-control'
    />
    </div>
    <div className="mb-3">
<label htmlFor="category">Category</label>
<div className="select-wrapper">
<select className="form-control" value={formItem.category} onChange={handleCategoryChange}>
        <option value="" ></option>
        <option value="groceries">Groceries</option>
        <option value="option2">Utilities</option>
        <option value="option3">Entertainment</option>
      </select>
      <div className="dropdown-icon">&#9662;</div>
    </div>
    </div>
    <button  type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default FormItem
