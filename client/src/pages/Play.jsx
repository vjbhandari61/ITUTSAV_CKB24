import './../styles/css/Play.css';
import InGame from './play/inGame/InGame';
import MainMenu from './play/mainMenu/MainMenu';
import { useState } from 'react';



const Play = () => {
    const [modeIndex, changePlayMode] = useState(0);
    const [teamName, changeTeamName] = useState("");
    function setGameMode(newMode){
        changePlayMode(newMode)
    }
    function setTeamName(team){
        changeTeamName(team)
    }

    const MainMenuComponent = () => <MainMenu setGameMode={setGameMode} setTeam={setTeamName}/>
    const InGameComponent = () => <InGame teamName={teamName}/>
    const modes = [MainMenuComponent, InGameComponent]
    const CurrentMode = modes[modeIndex];
    
    
    return (
    <div className='ml-60'>
        <CurrentMode />
    </div>
    )
}   

export default Play