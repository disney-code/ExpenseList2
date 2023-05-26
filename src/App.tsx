import { useState } from 'react';

import ExpenseFilter from './ExpenseTracker/ExpenseFilter.tsx';
import ExpenseList from './ExpenseTracker/ExpenseList.tsx'
import ExpenseForm from './ExpenseTracker/ExpenseForm.tsx'

export const categories=["Groceries","Utilities","Entertainment"];
function App(){
const initialExpense=[{id:1,description:"Milk",amount:20,category:"Groceries"},
{id:2,description:"Banana",amount:30,category:"Groceries"},
{id:3,description:"Sailing",amount:60,category:"Entertainment"},
{id:4,description:"water",amount:80,category:"Utilities"}]
enum ExpenseCategory {
	
	Groceries ="Groceries",
	Utilities ="Utilities",
  Entertainment ="Entertainment",
	
      }

 const [expenses, setExpenses]=useState(initialExpense);


 const handleDeleteExpense1 = (expenseId: number) => {
  const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
  setExpenses(updatedExpenses)
};

const [selectedCategory1, setSelectedCategory] = useState('');



const handleAddExpense=(newExpense)=>{setExpenses([...expenses,newExpense])}
const visibleExpenses = selectedCategory1 
? expenses.filter(expense => expense.category === selectedCategory1) 
: expenses;
  return(
    <>
    <div className="mb-5">
    <ExpenseForm onAddExpense={handleAddExpense} expenses={expenses}/>
    </div>
    <div className="mb-3">
      
    <ExpenseFilter category={selectedCategory1} onCategoryChange={(categorySelected)=>{setSelectedCategory(categorySelected)}}/>
    <ExpenseList expenses={visibleExpenses} handletDeleteExpense={handleDeleteExpense1} selectedCategory={selectedCategory1}/>
    </div>
       
    
    
    
    </>
  )
}

export default App;