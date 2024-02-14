import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import FilterDropdown from './components/FilterDropdown';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: '111',
      name: 'Sample',
      description: 'Completed',
      status: 'Not Completed',
    },
  ]); //Used to store the list
  const [filterList, setFilterList] = useState([]); //Used to display the list based on filters
  const [todoFilter, setTodoFilter] = useState('All');
  const [todo, setTodo] = useState({
    id: '',
    name: '',
    description: '',
    status: 'Not Completed',
  });
  const [editOn, setEditOn] = useState(false); //Used for update flag

  //Handle the filter functionality based on All, Completed and Not Completed
  const handleFilter = () => {
    if (todoFilter === 'Not Completed') {
      const filterTodoList = todoList.filter(
        (item) => item.status === 'Not Completed'
      );
      setFilterList(filterTodoList);
    } else if (todoFilter === 'Completed') {
      const filterTodoList = todoList.filter(
        (item) => item.status === 'Completed'
      );
      setFilterList(filterTodoList);
    } else if (todoFilter === 'All') {
      setFilterList(todoList);
    }
  };

  useEffect(() => {
    setFilterList(todoList);
  }, [todoList]);

  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line
  }, [todoFilter]);

  //Adds the todo to list
  const handleAddTodo = (e) => {
    e.preventDefault();
    let id = uuid();
    setTodoList([...todoList, { ...todo, id: id }]);
    setTodo({
      id: '',
      name: '',
      description: '',
      status: 'Not Completed',
    });
  };

  //Update which todo to be updated in list and place in input
  const handleUpdateTodo = (id) => {
    const updateTodo = todoList.find((item) => item.id === id);
    setTodo(updateTodo);
    setEditOn(true);
  };

  //After updating will gets replaced in todo list
  const handleUpdatedTodoList = (e) => {
    e.preventDefault();

    const updateDetails = todoList.map((obj) => {
      if (obj.id === todo.id) {
        return {
          ...obj,
          name: todo.name,
          description: todo.description,
          status: todo.status,
        };
      }
      return obj;
    });
    setTodoList(updateDetails);

    setEditOn(false);
    setTodo({
      id: '',
      name: '',
      description: '',
      status: 'Not Completed',
    });
  };

  //Delete the todo in list
  const handleDeleteTodo = (id) => {
    const filterTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(filterTodoList);
  };

  return (
    <Container>
      <h1 className='text-center mb-4' style={{ color: 'rgb(73, 120, 73)' }}>
        My Todolist
      </h1>
      <TodoForm
        todoList={todoList}
        setTodoList={setTodoList}
        editOn={editOn}
        todo={todo}
        setTodo={setTodo}
        handleAddTodo={handleAddTodo}
        handleUpdatedTodoList={handleUpdatedTodoList}
      />
      <section>
        <div className='d-flex justify-content-between align-items-center mb-2'>
          <h3>My Todos</h3>
          <div className='d-inline-flex justify-content-center align-item-center'>
            <h4 className='d-md-inline d-none'>Status Filter:</h4>
            <FilterDropdown
              defaultOption={{ option: 'All', optionColor: 'danger' }}
              optionsList={[
                { option: 'All', optionColor: 'danger' },
                { option: 'Completed', optionColor: 'danger' },
                { option: 'Not Completed', optionColor: 'danger' },
              ]}
              setTodoFilter={setTodoFilter}
            />
          </div>
        </div>
        <div className='row'>
          {filterList.map((item) => (
            <TodoCard
              key={item.id}
              todo={item}
              todoList={todoList}
              setTodoList={setTodoList}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}

export default App;
