import { useState } from "react";

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
        <div>  
          <br />  <br />  
          <div className="mt-10">
              <span className='text-7xl'> USCS - IT UTSAV </span>
              <span className='text-3xl align-top'> 2024</span>
          </div>

          <br />
          <div className='text-9xl text-yellow-300'>
              Code ke Boss
          </div>
        </div>

        
        <div id='startInput-container'>
          <div>
              <input type="text" placeholder="Enter Team Name" className="w-3/4 py-3 px-4 rounded-lg border border-gray-400 text-xl text-black" onChange={handleChange}/>
              <button className=" text-white text-2xl px-4 py-2 rounded-lg ml-10 border-white" onClick={ startGame }> Start! </button>
          </div>
      </div>
    </div>
  )
}

export default MainMenu