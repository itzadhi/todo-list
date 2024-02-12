import React from 'react';
import { Button, Card } from 'react-bootstrap';
import StatusDropdown from './StatusDropdown';

function TodoCard({
  todo,
  todoList,
  setTodoList,
  handleUpdateTodo,
  handleDeleteTodo,
}) {
  const { id, name, description, status } = todo;
  return (
    <Card className='col-3 m-1'>
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>Description: {description}</Card.Text>

        <span>Status:</span>
        <StatusDropdown
          defaultOption={{
            option: status,
            optionColor: status === 'Not Completed' ? 'danger' : 'success',
          }}
          optionsList={[
            { option: 'Completed', optionColor: 'success' },
            { option: 'Not Completed', optionColor: 'danger' },
          ]}
          id={id}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <div className='d-flex justify-content-end'>
          <Button className='m-1 px-4' onClick={() => handleUpdateTodo(id)}>
            Edit
          </Button>
          <Button className='m-1 px-4' onClick={() => handleDeleteTodo(id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
