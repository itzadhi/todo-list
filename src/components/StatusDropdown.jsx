import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function StatusDropdown({
  defaultOption,
  optionsList,
  id,
  todoList,
  setTodoList,
}) {
  const [selectedItem, setSelectedItem] = useState(defaultOption);

  //Handles the dropdown select option
  const handleSelect = (item) => {
    setSelectedItem(item);

    //Needs to be updated in todolist to refresh the list
    const updateDetails = todoList.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          status: item.option,
        };
      }
      return obj;
    });
    setTodoList(updateDetails);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant={selectedItem.optionColor} id='dropdown-basic'>
        {selectedItem.option}
      </Dropdown.Toggle>

      {optionsList && (
        <Dropdown.Menu>
          {optionsList.map((item, index) => (
            <Dropdown.Item onClick={() => handleSelect(item)} key={index}>
              {item.option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
}

export default StatusDropdown;
