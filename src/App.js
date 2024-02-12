import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import StatusDropdown from './components/StatusDropdown';
import TodoCard from './components/TodoCard';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoId, setTodoId] = useState('');
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [editOn, setEditOn] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();
    let id = uuid();
    setTodoList([
      ...todoList,
      {
        id: id,
        name: todoName,
        description: todoDescription,
        status: 'Not Completed',
      },
    ]);
    setTodoId('');
    setTodoName('');
    setTodoDescription('');
  };

  const handleUpdateTodo = (id) => {
    const updateTodo = todoList.find((item) => item.id === id);
    setTodoId(updateTodo.id);
    setTodoName(updateTodo.name);
    setTodoDescription(updateTodo.description);
    setEditOn(true);
  };

  const handleUpdatedTodoList = (e) => {
    e.preventDefault();

    const updateDetails = todoList.map((obj) => {
      if (obj.id === todoId) {
        return { ...obj, name: todoName, description: todoDescription };
      }
      return obj;
    });
    setTodoList(updateDetails);

    setEditOn(false);
    setTodoId('');
    setTodoName('');
    setTodoDescription('');
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
        todoName={todoName}
        setTodoName={setTodoName}
        todoDescription={todoDescription}
        setTodoDescription={setTodoDescription}
        handleAddTodo={handleAddTodo}
        handleUpdatedTodoList={handleUpdatedTodoList}
      />
      <section className=''>
        <div className='d-flex justify-content-between align-item-center'>
          <h5>My Todos</h5>
          {/* <div className='d-inline-flex'>
            <h5>Status Filter:</h5>
            <StatusDropdown
              defaultOption={{ option: 'All', optionColor: 'primary' }}
              optionsList={[
                { option: 'All', optionColor: 'primary' },
                { option: 'Completed', optionColor: 'primary' },
                { option: 'Not Completed', optionColor: 'primary' },
              ]}
            />
          </div> */}
        </div>
        <div className='row d-flex justify-content-between'>
          {todoList.map((item) => (
            <TodoCard
              id={item.id}
              name={item.name}
              description={item.description}
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
