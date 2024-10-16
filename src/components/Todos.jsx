import { useState } from "react";


const Todos = () =>{
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange =(e)=>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodos( [...todos, inputValue]);
        setInputValue('');
    }
    const handleDelete = (index) =>{
        const updatedTodo = [...todos];
        updatedTodo.splice(index, 1);
        setTodos(updatedTodo);
    }
    return (
        <>
        <input type='text' value={inputValue} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Add Todo</button>
        <ol typeof="number">
        {todos.map((todo, index )=>(
            <li key={index}>
                {todo}
                <button onClick={()=>handleDelete(index)}>Delete</button>
            </li>
        ))}
        </ol>
        
        </>
    )
};

export default Todos;