import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TodoForm({
  todoList,
  setTodoList,
  editOn,
  todoName,
  setTodoName,
  todoDescription,
  setTodoDescription,
  handleAddTodo,
  handleUpdatedTodoList,
}) {
  const [validated, setValidated] = useState(false);

  return (
    <Form
      onSubmit={editOn ? handleUpdatedTodoList : handleAddTodo}
      className='row d-flex justify-content-center align-item-center mb-5'
    >
      <Form.Group className='col-4'>
        <Form.Control
          type='text'
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          placeholder='Todo name'
          required
        />
      </Form.Group>

      <Form.Group className='col-4'>
        <Form.Control
          type='text'
          placeholder='Todo description'
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
          required
        />
      </Form.Group>
      <Button
        variant='primary'
        type='submit'
        className='col-3 h-50 align-self-end mb-0.5'
      >
        {editOn ? 'Edit todo' : 'Add todo'}
      </Button>
    </Form>
  );
}

export default TodoForm;
