import React from 'react';
import { Form, Button } from 'react-bootstrap';

function TodoForm({
  todo,
  setTodo,
  editOn,
  handleAddTodo,
  handleUpdatedTodoList,
}) {
  return (
    <Form
      onSubmit={editOn ? handleUpdatedTodoList : handleAddTodo}
      className='row d-flex justify-content-center align-item-center mb-5'
    >
      <Form.Group className='col-4'>
        <Form.Control
          type='text'
          className='custom-input'
          value={todo.name}
          onChange={(e) =>
            setTodo((prevState) => ({ ...prevState, name: e.target.value }))
          }
          placeholder='Todo name'
          required
        />
      </Form.Group>

      <Form.Group className='col-4'>
        <Form.Control
          type='text'
          className='custom-input'
          placeholder='Todo description'
          value={todo.description}
          onChange={(e) =>
            setTodo((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
          required
        />
      </Form.Group>
      <Button
        type='submit'
        className='col-3 align-self-end mb-0.5 custom-btn btn-outline-light'
      >
        {editOn ? 'Edit todo' : 'Add todo'}
      </Button>
    </Form>
  );
}

export default TodoForm;
