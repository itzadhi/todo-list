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
    <div className='col-md-4 mb-2'>
      <Card className='custom-card'>
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text className='text-truncate'>
            Description: {description}
          </Card.Text>

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
            <Button
              className='m-1 px-4 btn-outline-light'
              style={{ backgroundColor: '#4F7942' }}
              onClick={() => handleUpdateTodo(id)}
            >
              Edit
            </Button>
            <Button
              className='m-1 px-4 btn-outline-light'
              style={{ backgroundColor: '#C41E3A' }}
              onClick={() => handleDeleteTodo(id)}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TodoCard;
