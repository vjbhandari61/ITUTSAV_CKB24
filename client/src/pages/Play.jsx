import './../styles/css/Play.css';
import InGame from './play/inGame/InGame';
import MainMenu from './play/mainMenu/MainMenu';
import EndGame from './play/endGame/EndGame';
import { useEffect, useState } from 'react';
import { getQuestions } from '../utils/requester';
//import { removeKey } from '../utils/helpers';


const Play = ({ setPlaying, totalTimer, setTotalTimer }) => {
    const [modeIndex, changePlayMode] = useState(0);
    const [teamName, changeTeamName] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [timers, setTimers] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    

    function setGameMode(newMode){
        changePlayMode(newMode)
    }
    function setTeamName(team){
        changeTeamName(team)
    }

    async function fetchQuestions(){
        let response = await getQuestions()
        let data = response['data']['data']
        setQuestions((ques)=> ques = data)
    }


    useEffect(()=>{
        fetchQuestions();
    }, [])


    const MainMenuComponent = () => <MainMenu setGameMode={setGameMode} setTeam={setTeamName}/>
    const InGameComponent = () =>   <InGame 
                                        teamName={teamName} questions={questions} 
                                        answers={answers} setAnswers={setAnswers}
                                        timers={timers} setTimers={setTimers}
                                        questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}
                                        setGameMode={setGameMode}
                                        totalTimer={totalTimer} setTotalTimer={setTotalTimer}
                                    />

    const EndGameComponent = () => <EndGame 
                                        teamName={teamName} questions={questions} 
                                        answers={answers} timers={timers} totalTimer={totalTimer}
                                    />
    const modes = [MainMenuComponent, InGameComponent, EndGameComponent]
    const CurrentMode = modes[modeIndex];

    useEffect(()=>{
        if(modeIndex != 0){
            setPlaying(true)
        }
        
        //end game
        if(modeIndex == 1 && totalTimer <= 0)
            setGameMode(2)
    })
    
    
    return (
    <div className='ml-40'>
        <CurrentMode />
    </div>
    )
}   

export default Play