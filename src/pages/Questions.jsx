import React,{useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { useAxios } from '../hooks/useAxios';
import Spinner from 'react-bootstrap/Spinner';
import { useHistory } from 'react-router-dom';
import { handleScoreChange } from '../redux/actions';
import {decode} from 'html-entities';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  // useSelector-selectors in configureStore
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  }=useSelector((state)=>state);

  const history= useHistory();
  const dispatch = useDispatch();

  // console.log(
  //   question_category,
  //   question_difficulty,
  //   question_type,
  //   amount_of_question
  //   );

  let apiUrl = `/api.php?amount=${amount_of_question}`;
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  console.log(options);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
      console.log(`the options are ${answers}`)
      console.log(`the correct answer is ${question.correct_answer}`)
    }
  }, [response, questionIndex]);

if(loading){
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
const handleClickAnswer = (e) => {
  const question = response.results[questionIndex];
  if (e.target.textContent === question.correct_answer) {
    dispatch(handleScoreChange(score+1));
  }
  if (questionIndex + 1 < response.results.length) {
    setQuestionIndex(questionIndex + 1);
  } else {
    history.push("/score");
  }
 
};

  return (
   <Container>
    <h4>Question {questionIndex +1}</h4>
    <h4>{ decode (response.results[questionIndex].question)}</h4>
   <h5>Possible answers are:</h5>      
    {options.map((option,id)=>{
      return <div key={id} ><Button onClick={handleClickAnswer}> {decode(option)} </Button> </div>   
    })}
   <h5> Score: {score} / {response.results.length}</h5>
   </Container>
  )
}

export default Questions