import React from "react";
import SelectField from "../components/SelectField";
import Form from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import TextFieldComponent from "../components/TextFieldComponent";
import { useAxios } from "../hooks/useAxios";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router-dom";

const Settings = () => {
  const {response,error,loading}=useAxios({url: "/api_category.php"});
  const history = useHistory();

  if(loading){
    return (
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    )
  }
  if(error){
    <h4>Something went wrong!</h4>
  }
  const difficultyOptions =[
    {id:'easy', name:'Easy'},
    {id:'medium', name:'Medium'},
    {id:'hard', name:'Hard'}
  ]
 
  const typeOptions=[
{id:'multiple',name:'Multiple Chioce'},
{id:'boolean', name:'True/False'}
  ];

  // console.log(response);


    const handleSubmit= (e)=>{
        e.preventDefault();
        history.push('/questions')

    }
  return (
    <Form onSubmit={handleSubmit}>
      Settings
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options ={difficultyOptions}label="Difficuly" />
      <SelectField options={typeOptions}label="Type" />
      <TextFieldComponent />
      <Button type="submit">Get Started!</Button>
    </Form>
  );
};

export default Settings;
