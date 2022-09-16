import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3"
import correct from "../sounds/correct.mp3"
import wrong from "../sounds/wrong.mp3"


const Trivia = ({ data, setStop, setQuestionNumber, questionNumber }) => {
  const [questions, setQuestions] = useState();
  const [selectedanswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState();

  
  const [letsplay]=useSound(play)
  const [correctAnswer]=useSound(correct)
  const [wron]=useSound(wrong)

useEffect (()=>{
  letsplay()
},[letsplay])



  useEffect(() => {
    setQuestions(data[questionNumber - 1]);
  }, [questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (e) => {
    setSelectedAnswer(e);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(e.correct ? "answer correct" : " answer wrong");
    });
    delay(5000, () => {
      if (e.correct) {
        correctAnswer();
        delay (1000, ()=>{
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        })
      } else {
        wron()
        delay (1000, () =>{
          setStop(true);
        })
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{questions?.question}</div>
      <div className="answers">
        {questions?.answers.map((val) => {
          return (
            <div
              className={selectedanswer === val ? className : "answer"}
              onClick={() => handleClick(val)}
            >
              {val.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trivia;
