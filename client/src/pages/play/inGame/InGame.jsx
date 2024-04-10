import { useEffect, useState } from "react"
import { CustomRadioButton } from "../../../components/CustomRadioButton";
import { formatTime } from "../../../utils/helpers";



const InGame = ({ 
      teamName, questions, answers, setAnswers, timers, setTimers, questionIndex, 
      setQuestionIndex, setGameMode,
      totalTimer, setTotalTimer,
      attempts, setAttempts
}) => {

  useEffect(()=>{
    initializeGame()
  }, [])


  //*When any 1 option out of the 4 given is clicked
  const handleOptionChange = (pickIndex) => {
    //First time click -> mark this question as "attempted"
    if(!attempts[questionIndex]){
      setAttempts(oldAttempts=>{
        let newAttempts = [...oldAttempts]
        newAttempts[questionIndex] = true;
        return newAttempts;
      })
    }

    if(answers.length < questionIndex.length)
      initializeGame()
  
    setAnswers(prevAnswers=>{
      const newAnswers = [...prevAnswers]
      newAnswers[questionIndex] = pickIndex
      return newAnswers
    })
    setTotalTimer(prevTime => prevTime - 1);
  };


  const nextQuestion = ()=>{
    if(questionIndex == questions.length - 1){
      setGameMode(2)
    }else{
      setQuestionIndex(newIndex=> newIndex+1)
      setTotalTimer(prevTime => prevTime - 1);
    }
  }

  const prevQuestion = () =>{
    if(questionIndex >= 1)
      setQuestionIndex(newIndex=> newIndex-1)
      setTotalTimer(prevTime => prevTime - 1);
  }


  //on question number click in right side questions' list
  const jumpQuestion = (index) =>{
    if(index != questionIndex){
      setQuestionIndex(index)
      setTotalTimer(prevTime => prevTime - 1);
    }
  }


  

  function initializeGame(){
    //*When Initial array states are empty -> game has just begun
    if(answers.length < questions.length){
      const newAnswers = Array.from({ length: 20 }).fill(0);
      setAnswers(newAnswers)
    }

    if(timers.length < questions.length){
      const newTimers = Array.from({ length: 20 }).fill(0);
      setTimers(newTimers)
    }

    if(attempts.length < questions.length){
      const defaultAttempts = Array.from({ length: 20 }).fill(false);
      setAttempts(defaultAttempts)
    }
  } 

  const currentQuestion = questions[questionIndex]
  const totalQuestions = questions.length;


  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTotalTimer(prevTime => prevTime - 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);



  return (
    <div className="flex" id='inGame'>
        <div className="flex-1">
        <br />  <br />  
        <div className="bg-white text-black p-10" id='questionContainer'>
          <div className="font-bold text-xl">
            <span className="text-lg bg-red-400 p-2 text-white"> { formatTime(totalTimer) } </span>
            <span className="ml-40"> Team - { teamName } </span>
            <div className="float-right text-gray-600">
              {questionIndex+1}/{totalQuestions}
            </div>
          </div>
          <br />
              <div className="text-md"> 
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



      <div className="flex-1 mt-20 ml-20" id='questionsList'>
        <div className="text-4xl underline">
          Questions List
        </div>
        <br />
        <div>
          <span className="p-1 px-2 bg-yellow-300 text-black attempt-label"> Attempted </span>
          <span className="ml-10 p-1 px-2 bg-white text-black attempt-label"> Unattempted </span>
        </div>

        <div className="mr-5 mt-10">
          <div className="grid grid-cols-4 gap-3 text-black ">
            {attempts.map((attempt, index) => (
              <div
                key={index}
                className={`p-4 ${attempt ? 'bg-yellow-300' : 'bg-white'} attempt-box`}
                onClick={ ()=>jumpQuestion(index) }
              >
                Q - {index+1}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default InGame