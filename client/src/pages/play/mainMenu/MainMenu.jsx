import 'animate.css'
import { useState } from "react";
import logoImage from './../../../assets/logo-1.png'


const MainMenu = ({ setGameMode, setTeam }) => {

  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  function startGame(){
      setTeam(inputValue)
      setGameMode(1);
  } 


  return (
    <div id='mainMenu'>
        <img src={logoImage} className="float-right mt-20 ml-40 rotate-center"/>
        <div>  
          <br />  <br />  
          <div className="mt-10 animate__animated animate__slideInDown">
              <span className='text-5xl'> USCS - IT UTSAV </span>
              <span className='text-3xl align-top'> 2024</span>
          </div>

          <br /> <br />
          <div className='text-4xl text-white-300 animate__animated animate__slideInLeft text-shadow'> Codex Club Presents </div>
          <div className='text-7xl text-yellow-300 text-shadow animate__animated animate__slideInLeft'> Code ke Boss </div>
        </div>

        
        <div id='startInput-container'>
          <div>
              <input type="text" placeholder="Enter Team Name" className="w-3/4 py-3 px-4 rounded-lg border border-gray-400 text-xl text-black" onChange={handleChange}/>
              <button className=" text-white text-2xl px-4 py-2 rounded-lg ml-10 border-white heartbeat" onClick={ startGame }> Start! </button>
          </div>
      </div>
    </div>
  )
}

export default MainMenu