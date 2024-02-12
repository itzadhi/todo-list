import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import FilterDropdown from './components/FilterDropdown';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [todoFilter, setTodoFilter] = useState('All');
  const [todo, setTodo] = useState({
    id: '',
    name: '',
    description: '',
    status: 'Not Completed',
  });
  const [editOn, setEditOn] = useState(false);

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
  }, [todoFilter]);

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

  const handleUpdateTodo = (id) => {
    const updateTodo = todoList.find((item) => item.id === id);
    setTodo(updateTodo);
    setEditOn(true);
  };

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

  const handleDeleteTodo = (id) => {
    const filterTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(filterTodoList);
  };

  return (
    <Container>
      <h1 className='text-success text-center'>My todo</h1>
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
        <div className='d-flex justify-content-between align-item-center'>
          <h5>My Todos</h5>
          <div className='d-inline-flex'>
            <h5>Status Filter:</h5>
            <FilterDropdown
              defaultOption={{ option: 'All', optionColor: 'primary' }}
              optionsList={[
                { option: 'All', optionColor: 'primary' },
                { option: 'Completed', optionColor: 'primary' },
                { option: 'Not Completed', optionColor: 'primary' },
              ]}
              setTodoFilter={setTodoFilter}
            />
          </div>
        </div>
        <div className='row d-flex justify-content-between'>
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
