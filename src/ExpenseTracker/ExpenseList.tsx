
interface Props{
	expenses:{
	id:number;
	description:string;
	amount:number;
	category:string;}[];
	handletDeleteExpense:(expenseId:number)=>void;
	selectedCategory:string;

}
const ExpenseList = ({expenses,handletDeleteExpense,selectedCategory}:Props) => {
	if (expenses.length === 0) {return null;}
	
	//console.log(filteredExpenses)
	const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2);
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
			{expenses.map((expense)=>{
				return(
				<tr key={expense.id}>
					<td>{expense.description}</td>
					<td>{expense.amount}</td>
					<td>{expense.category}</td>
					<td>
						<button className="btn btn-outline-danger" onClick={()=>handletDeleteExpense(expense.id)}>Delete</button>
					</td>
				</tr>)
			})}
		</tbody>
	<tfoot>
	<tr >
            <td colSpan={1} >Total</td>
            <td >${totalAmount}</td>
	    <td></td>
	    <td></td>
          </tr>
	</tfoot>
	  </table>
       
      
    </div>
  );
};

export default ExpenseList
