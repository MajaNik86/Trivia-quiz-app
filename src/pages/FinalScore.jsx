import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import {handleScoreChange,handleAmountChange} from '../redux/actions';

const FinalScore = () => {
const dispatch = useDispatch();
const history = useHistory();
const {score} =useSelector(state=>state);

  const handleBackToSettings=()=>{
dispatch(handleScoreChange(0));
dispatch(handleAmountChange(10));
history.push('/');
  }
  return (
    <div>
      <h3 > Final score is: {score} </h3>
      <Button onClick={handleBackToSettings}>back to settings!</Button>
    </div>
  )
}

export default FinalScore