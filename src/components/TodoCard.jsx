import React from 'react';
import { Button, Card } from 'react-bootstrap';
import StatusDropdown from './StatusDropdown';

function TodoCard({
  id,
  name,
  description,
  handleUpdateTodo,
  handleDeleteTodo,
}) {
  return (
    <Card className='col-3 m-1'>
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text>
          <span>Status:</span>
          <StatusDropdown
            defaultOption={{ option: 'Not Completed', optionColor: 'danger' }}
            optionsList={[
              { option: 'Completed', optionColor: 'success' },
              { option: 'Not Completed', optionColor: 'danger' },
            ]}
          />
        </Card.Text>
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
