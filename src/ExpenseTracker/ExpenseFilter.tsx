import React from 'react'
import { categories } from '../App';
interface ExpenseFilterProps {
	category: string;
	
	onCategoryChange: (categorySelected: string) => void;
      }

const ExpenseFilter = ({category, onCategoryChange}:ExpenseFilterProps) => {
	const handleCategoryChange=(event: React.ChangeEvent<HTMLSelectElement>) => {
		const categorySelected = event.target.value as string;
		onCategoryChange(categorySelected);
		console.log(categorySelected)
	      };
  return (
    <div className="mb-3">
	<select className="form-select" id="category" value={category} onChange={handleCategoryChange}>
	<option value="">All Categories</option>
	{categories.map((category)=>(<option key={category} value={category}>{category}</option>))}
        
      </select>
    </div>
  )
}

export default ExpenseFilter