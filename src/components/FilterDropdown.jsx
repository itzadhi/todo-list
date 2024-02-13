import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

function FilterDropdown({ defaultOption, optionsList, setTodoFilter }) {
  const [selectedItem, setSelectedItem] = useState(defaultOption);

  //Needs to be updated in todolist to refresh the list
  const handleSelect = (item) => {
    setSelectedItem(item);
    setTodoFilter(item.option);
  };

  return (
    <Dropdown className='mx-2'>
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

export default FilterDropdown;
