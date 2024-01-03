import React, { useState } from 'react';
import quizData from '../datas/data';
import Question from '../Quizz/Question';

const Home = () => {
  const [questions, setQuestions] = useState(quizData);

  return (
    <div>
      <main>
        <div className='container'>
          <h3>Quizz App</h3>
          <section>
            {questions.map((quizQuestion) => {
              return <Question key={quizQuestion.id} {...quizQuestion} />;
            })}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
