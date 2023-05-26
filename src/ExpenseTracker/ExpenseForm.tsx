import { useState } from 'react';
import { z} from 'zod';

const categories = ["Groceries","Utilities","Entertainment"];
interface ExpenseFormProps {
	onAddExpense: (newExpense:{}) => void;
	expenses:{
		id:number,
		description:string;
	amount:number;
	category:string;
	}[]
      }

const schema = z.object({
	description: z.string().min(1, 'description must be at least 1 character').max(50, 'Description exceeds maximum length of 50 characters'),
	amount: z.number({invalid_type_error:"amount is required"}).refine((val) => val > 0.01),
	      
	category: z.enum(categories,{errorMap:()=>({message:"category is required"})})
      });
const ExpenseForm = ({onAddExpense,expenses}:ExpenseFormProps) => {
	
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');
	const [category, setCategory] = useState('');
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	    
		try {
			const parsedAmount = parseFloat(amount);
			schema.parse({
			  description,
			  amount: parsedAmount,
			  category,
			});
		
		const newExpense = {
		  id: expenses.length+1, // Generate a unique ID (you may use a different method)
		  description:description,
		  amount: parsedAmount, // Convert amount to a number
		  category:category,
		};
	    
		
		onAddExpense(newExpense);
	    
		
		setDescription('');
		setAmount('');
		setCategory('');
	      }
	      catch (error) {
		const arrayOfErrors = error.issues.map((issue: any) => issue.message);

      const newErrors = {
        description: arrayOfErrors.find((error: string) =>
          error.includes('description')
        ),
        amount: arrayOfErrors.find((error: string) => error.includes('amount')),
        category: arrayOfErrors.find((error: string) =>
          error.includes('category')
        ),
      };

      setErrors(newErrors);
      console.log(newErrors)
      
		console.log("hello")
	      }}

	return (
    <form onSubmit={handleSubmit}>
	<div className="mb-3">
        <label htmlFor="description1" className="form-label">Description</label>
        <input
	id="description1"
	className="form-control"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
	{errors.description && (
    <p className="error-message text-danger">{errors.description}</p>)}
	
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor='amount'>Amount</label>
        <input
	id="amount"
	className="form-control"
	  type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
	{errors.amount && (
    <p className="error-message text-danger">{errors.amount}</p>)}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="category">Category</label>
	<select
	id="category"
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category)=>(<option key={category} value={category}>{category}</option>))}
        </select>
        {errors.category && <p className="error-message text-danger">{errors.category}</p>}
      </div>
      <div className="mb-3">
	<button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

export default ExpenseForm