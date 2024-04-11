import 'animate.css'
import { useState } from "react";
import codexLogo from './../../../assets/logo/codexLogo_nobg.png'
import spinningRect from './../../../assets/logo/1.png'
import uuLogo from './../../../assets/logo/uuLogo.png';
import uscsLogo from './../../../assets/logo/uscsLogo.png'


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
        <div className="relative float-right mt-20" id='img-container'>
          <img
            id='codex-logo'
            src={codexLogo}
            alt="First Image"
            className="absolute top-0 left-0 w-full h-full"
          />
          
          <img
            id='spin-right'
            src={spinningRect}
            alt="Second Image"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        <div>  
          <br />  <br />  

          <div className='flex animate__animated animate__slideInDown'>
            <img 
              id='uu-logo'
              src={uuLogo}
            />
            <div className='ml-5 mt-2 text-2xl'> Uttaranchal University </div>
          </div>

          <br />

          <div className="mt-10 animate__animated animate__slideInDown flex">
              <img 
                  id='uscs-logo'
                  src={uscsLogo}
              />
              <div className='ml-5 mt-5'>
                <span className='text-5xl'> USCS - IT UTSAV </span>
                <span className='text-3xl align-top'> 2024</span>
              </div>
          </div>

          <br /> 
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