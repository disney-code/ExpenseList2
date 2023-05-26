
import './ExpenditureList.css'
interface Expense{
	id:number;
	description:string;
	amount:number;
	category:string;
      }
interface Props {
	expenses: Expense[];
	onDelete:(id:number)=>void;
	selectedCategory:string;
      }
const ExpenditureList = ({expenses,onDelete,selectedCategory}:Props) => {
	if(expenses.length===0) return null

	const filteredExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;
  return (
    <div>
	
	
	<table className="table table-bordered">
		<thead>
			<tr>
				<th>Description</th>
				<th>Amount</th>
				<th>Category</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{filteredExpenses.map(expense=><tr key={expense.id}>
				<td>{expense.description}</td>
				<td>{expense.amount}</td>
				<td>{expense.category}</td>
				<td><button className="btn btn-outline-danger" onClick={()=>onDelete(expense.id)}>Delete</button></td>
			</tr>)}
			
		</tbody>
		<tfoot>
			<tr>
				<td>Total</td>
				<td>${filteredExpenses.reduce((acc,expense)=>expense.amount+acc,0).toFixed(2)}</td>
			</tr>
		</tfoot>
	</table>
    </div>
  )
}

export default ExpenditureList