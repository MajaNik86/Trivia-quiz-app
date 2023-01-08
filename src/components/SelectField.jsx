import React from 'react'
import { Container, FormSelect,FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {handleCategoryChange,handleDifficultyChange,handleTypeChange} from '../redux/actions';

const SelectField = (props) => {
    const {label,options}=props;
    const dispatch = useDispatch();
    const [value,setValue] = useState('')

     const handleChange = (e) => {
    setValue(e.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value));
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value));
        break;
      default:
        return;
    }
  };
  

  return (
  <Container>
     <FloatingLabel controlId="floatingSelect" label={label}>
    <FormSelect value={value} label={label} onChange={handleChange}>
      {options.map(({id,name})=>(
        <option value={id} key={id}>
          {name}
        </option>
      ))}
    </FormSelect>
    </FloatingLabel>
  </Container>
   
  )
}

export default SelectField;