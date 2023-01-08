import React, { useEffect, useState } from "react";
import axios from "axios";

const QuizCatagories = () => {
  const [categories, setCategories] = useState([]);

  const fetchQuizCategories = async () => {
    // this is the same as calling response.data but i used destructuring here
    const { data } = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy"
    );

    const formattedData = data.results.map((category) => {
      const incorrectAnswersIndexes = category.incorrect_answers.length;
      const randomIndex = Math.random() * (incorrectAnswersIndexes - 0) + 0;
      category.incorrect_answers.splice(randomIndex, 0, category.correct_answer);
      return {
        ...category,
        answers: category.incorrect_answers,

        // answers: category.incorrect_answer.concat(category.correct_answer),
      };
    });
    setCategories(formattedData);
    // console.log({response});
  };

  useEffect(() => {
    fetchQuizCategories();
  }, []);
  console.log({ categories });
  
  return <div>Quiz Catagories</div>;
};

export default QuizCatagories;
