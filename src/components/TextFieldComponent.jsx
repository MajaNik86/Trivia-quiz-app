import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { handleAmountChange } from '../redux/actions';


const TextFieldComponent = () => {
const dispatch=useDispatch();
    const handleChange=(e)=>{
dispatch(handleAmountChange(e.target.value))
    };

  return (
    <Form.Group className="mb-3">
      <Form.Label>Amount of questions:</Form.Label>
      <Form.Control type="number"  onChange={handleChange} size='small'/>
    </Form.Group>
     

  )
}

export default TextFieldComponent