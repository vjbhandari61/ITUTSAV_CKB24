import 'animate.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import codexLogo from './../../../assets/logo/codexLogo_nobg.png'
import spinningRect from './../../../assets/logo/1.png'
import uuLogo from './../../../assets/logo/uuFull.jpeg';
import uscsLogo from './../../../assets/logo/uscsLogo.jpeg'
import adminIcon from './../../../assets/logo/user.png'


const MainMenu = ({ setGameMode, setTeam }) => {

  const navigator = useNavigate()
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const switchAdminMode = () => {
    navigator('admin/')
  }


  function startGame(){
      setTeam(inputValue)
      setGameMode(1);
  } 


  return (
    <div id='mainMenu'>
        <div className='flex flex-row animate__animated animate__slideInDown'>
          <div className='flex mt-10'>
              <img 
                id='uu-logo'
                src={uuLogo}
              />
          </div>

          <div className="relative mt-5 ml-80" id='img-container'>
            <img
              id='codex-logo'
              src={codexLogo}
              alt="First Image"
              className="top-0 left-0"
            />
            <img
              id='spin-right'
              src={spinningRect}
              alt="Second Image"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>

          <div>
            <img 
              id='uscs-logo'
              src={uscsLogo}
              alt='USCS - IT UTSAV'
              className='ml-96 mt-10'
            />
          </div>
        </div>


        <div className='flex flex-row animate__animated animate__slideInLeft'>
          <div>
              <div className='text-6xl text-spacing'>
                  USCS
              </div>
              <div className='text-7xl text-yellow-400'>
                  IT Utsav
              </div>
              <div className='text-4xl'> 2024 </div>
          </div>

          <div className='ml-20'>
            <div className='ml-40 text-3xl text-yellow-500'> Presents  </div> <br />
            <div className='ml-10 text-7xl'> Code ke Boss </div>
          </div>
          

        </div>
        <div className='float-right mr-10 mt-40 flex flex-row animate__animated animate__slideInUp'>
          <div className='mt-5 mr-5 text-xl'> Admin </div>
          <img
            id='admin-icon'
            src={adminIcon}
            onClick={switchAdminMode}
          />
          
        </div>


        <div id='startInput-container' className='ml-28 animate__animated animate__slideInUp'>
          <div>
              <input type="text" placeholder="Enter Team Name" className="py-3 px-4 rounded-lg border border-gray-400 text-xl text-black" onChange={handleChange}/>
              <button className="text-white text-2xl px-4 py-2 rounded-lg ml-10 border-white heartbeat" onClick={ startGame }> Start! </button>
          </div>
        </div>

    </div>
  )
}

export default MainMenu