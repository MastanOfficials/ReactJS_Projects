import React, { useEffect, useState } from 'react';
import './Styles.css';
import { v4 } from 'uuid';
const Home = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList'))||[]);
  const [displayList,setDisplayList] = useState(todoList);
  const [newTodo, setNewTodo] = useState({id:null, task: '', dueDate: '' });
  const [isUpdating, setIsUpdating] = useState(false);
  const [index,setIndex] = useState(0);
  const [filterValue,setFilterValue] = useState("")
  const [filter,setFilter] = useState(false);
 
  //To handle the input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTodo({
      ...newTodo,id:v4(),
      [name]: value,
    });
  };

  //To Add todos in the list
  const handleAddClick = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo({id:null, task: '', dueDate: '' });
  };

  //To update the previous list
  const handleUpdateClick = () => {
    console.log(index);
    const temp = [...todoList]
    temp[index] = newTodo;
    setTodoList(temp);
    setNewTodo({id:null, task: '', dueDate: '' });
    setIsUpdating(false);
  };

  //To do the functionalities like edit,delete,done
  const handleUpdate = (id,event)=>{
    const type = event.target.value;
    const temp = [...todoList];
    const index = temp.findIndex((item)=>item.id === id)
    if(type === "edit"){
      setNewTodo(todoList[index]);
      setIsUpdating(true);
      setIndex(index);
    }
    else if(type === "delete"){
      
      temp.splice(index,1);
      setTodoList(temp);
    }
    else if(type === "done"){
      temp[index] = { ...temp[index], completed: true };
      setTodoList(temp);
    }
  }


  //To search data depends on the date
  const handleSearch = (type) =>{
    
    if(type === "search"){
      setFilter(true);
      console.log(filterValue);
      const matchedValues = todoList.filter(item=>{return item.dueDate === filterValue})
      setDisplayList(matchedValues)
    }
    else if(type==="clear"){
      setFilter(false);
      setFilterValue('');
      setDisplayList(todoList);
    }
  }

  //To get Data from the localStorage
  useEffect(()=>{
  const temp = localStorage.getItem('todoList')
      setTodoList(JSON.parse(temp));
    },[])

  //To Store Data in the localStorage
  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(todoList))
    },[todoList])

   //To handle the display LIst 
    useEffect(() => {
      if (filter) {
        const matchedValues = todoList.filter(item => item.dueDate === filterValue);
        setDisplayList(matchedValues);
      } else {
        setDisplayList(todoList);
      }
    }, [todoList, filter, filterValue]);
    
  return (
    <div className='main-container'>
      <div className='task-container'>
        <input
          name='task'
          placeholder='Enter the Task'
          className='todo-name'
          value={newTodo.task}
          onChange={handleInputChange}
        />
        <input
          name='dueDate'
          type='date'
          className='todo-date'
          value={newTodo.dueDate}
          disabled={filter}
          onChange={handleInputChange}
        />
        {isUpdating ? (
          <button className='addbtn' onClick={handleUpdateClick}>
            Update
          </button>
        ) : (
          <button className='addbtn' onClick={handleAddClick}>
            Add
          </button>
        )}
      </div>
      <div className='list-container'>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Task</th>
              <th>Due Date</th>
              <th>
                <input type='date' className='todo-date' value={filterValue} onChange={({target:{value}})=>setFilterValue(value)}/>
                {!filter?<button className='addbtn' onClick={() => handleSearch("search")}>Search</button>:<button className='addbtn' onClick={()=>handleSearch("clear")}>Clear</button>}
              </th>
            </tr>
          </thead>
          <tbody>
              {displayList && displayList.map((item,index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td className={item.completed ? 'strikethrough' : ''}>{item.task}</td>
                  <td className={item.completed ? 'strikethrough' : ''}>{item.dueDate}</td>
                  <td>
                    <button onClick={(event) => handleUpdate(item.id,event)} value="edit">
                      edit
                    </button>
                    <button onClick={(event) => handleUpdate(item.id,event)} value="delete">
                      Delete
                    </button>
                    <button onClick={(event) => handleUpdate(item.id,event)} value="done">
                      Done
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
