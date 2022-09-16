import React, { useState, useEffect} from "react";
import "../component/View.css";
import Timer from "./Timer";
import Trivia from "./Trivia";


const View = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earend, setEarend] = useState("$ 0 ");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneypyramid = [
    { id: 1, amount: "$100" },
    { id: 2, amount: "$200" },
    { id: 3, amount: "$300" },
    { id: 4, amount: "$500" },
    { id: 5, amount: "$750" },
    { id: 6, amount: "$2500" },
    { id: 7, amount: "$5000" },
    { id: 8, amount: "$10000" },
    { id: 9, amount: "$100000" },
    { id: 10, amount: "$200000" },
    { id: 11, amount: "$350000" },
    { id: 12, amount: "$500000" },
    { id: 13, amount: "$700000" },
    { id: 14, amount: "$1000000" },
    { id: 15, amount: "$10000000" },
  ].reverse();

  useEffect(() => {
    questionNumber >1 && setEarend(moneypyramid.find(ki=>ki.id === questionNumber -1).amount)
  }, [,questionNumber])
  
  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="amt">You Earend Amount :{earend} </h1>
          ) : (
            <>
            <h2 className="amt1">நீங்களும்  வெல்லலாம் ஒரு கோடி </h2>
            <div className="top">
              <div className="timer"><Timer setStop={setStop}  questionNumber={questionNumber} /></div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              ></Trivia>
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneylist">
          {moneypyramid.map((val) => {
            return (
              <li
                className={
                  questionNumber === val.id
                    ? "moneylistItem active"
                    : "moneylistItem"
                }
              >
                <span className="moneylistItemNumber">{val.id}</span>
                <span className="moneylistItemAmount">{val.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default View;
