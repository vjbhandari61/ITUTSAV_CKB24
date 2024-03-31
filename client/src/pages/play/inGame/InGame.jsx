import { useEffect, useState } from "react"
import { CustomRadioButton } from "../../../components/CustomRadioButton";



const InGame = ({ 
      teamName, questions, answers, setAnswers, timers, setTimers, questionIndex, 
      setQuestionIndex, setGameMode,
      totalTimer, setTotalTimer
}) => {

  useEffect(()=>{
    initializeGame()
  }, [])


  const handleOptionChange = (pickIndex) => {
    if(answers.length < questionIndex.length)
      initializeGame()
  
    setAnswers(prevAnswers=>{
      const newAnswers = [...prevAnswers]
      newAnswers[questionIndex] = pickIndex
      return newAnswers
    })
  };


  const nextQuestion = ()=>{
    if(questionIndex == questions.length - 1){
      setGameMode(2)
    }else{
      setQuestionIndex(newIndex=> newIndex+1)
    }
  }

  const prevQuestion = () =>{
    if(questionIndex >= 1)
      setQuestionIndex(newIndex=> newIndex-1)
  }
  

  function initializeGame(){
    if(answers.length < questions.length){
      const newAnswers = Array.from({ length: 20 }).fill(0);
      setAnswers(newAnswers)
    }

    if(timers.length < questions.length){
      const newTimers = Array.from({ length: 20 }).fill(0);
      setTimers(newTimers)
    }
  } 

  const currentQuestion = questions[questionIndex]
  const totalQuestions = questions.length;


  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTotalTimer(prevTime => prevTime - 2);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, []);

    function formatTime() {
      const mins = Math.floor(totalTimer / 60);
      const secs = totalTimer % 60;
      const formattedTime = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      return formattedTime;
  }

  


  return (
    <div id='inGame'>
      <br />  <br />  
      <div className="bg-white max-w-min ml-40 text-black p-10" id='questionContainer'>
        <div className="font-bold text-xl">
          <span className="text-sm text-red-400"> { formatTime() } </span>
          <span className="ml-40"> Team - { teamName } </span>
          <div className="float-right text-gray-600">
            {questionIndex+1}/{totalQuestions}
          </div>
        </div>
        <br />
          <div className="text-xl"> 
            <pre className="allow-line-breaks">
              { currentQuestion['question'] }
            </pre>
            <br />


            <div>
                <div>
                  <CustomRadioButton 
                    id="option1"
                    label={currentQuestion['options'][0]}
                    checked={answers[questionIndex] === 0}
                    onChange={() => handleOptionChange(0)}
                  />
                  <CustomRadioButton 
                    id="option2"
                    label={currentQuestion['options'][1]}
                    checked={answers[questionIndex] === 1}
                    onChange={() => handleOptionChange(1)}
                  />
                  <CustomRadioButton 
                    id="option3"
                    label={currentQuestion['options'][2]}
                    checked={answers[questionIndex] === 2}
                    onChange={() => handleOptionChange(2)}
                  />
                  <CustomRadioButton 
                    id="option4"
                    label={currentQuestion['options'][3]}
                    checked={answers[questionIndex] === 3}
                    onChange={() => handleOptionChange(3)}
                  />
              </div>
          </div>

          <br />


          <div>
             <button className="border border-black rounded px-4 py-2 shadow-md move-button" onClick={prevQuestion}> Previous </button>
             <button className="border border-black rounded px-4 py-2 shadow-md float-right move-button" onClick={nextQuestion}> 
                {(questionIndex == totalQuestions-1) ? 'Submit' : 'Next'} 
             </button>
          </div>
      </div>
    </div>
    </div>
  )
}

export default InGame