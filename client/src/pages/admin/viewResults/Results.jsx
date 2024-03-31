import { useEffect, useState } from "react"
import { sortArrayOfObjects } from "../../../utils/helpers"



const ResultsFull = ({ teams, onClickHandler }) =>{
  return (
    <div>
          {
            teams.map((team, index) => (
                    <div className="my-1 text-white text-2xl p-3 w-6/12 team-container" 
                        key={index} onClick={ ()=> onClickHandler(index) }>
                          <span> <b className="mr-5">Team Name </b> {team.name}  </span>
                          <span className="float-right text-xl"> {team.totalTimeTaken} secs  </span>
                          <br /> <br />
                          <b className="mr-5">Total Score </b> {team.totalScore}
                        <hr className="my-3"/>
                    </div>
            ))
          }
    </div>
  )
}

const ResultsDepth = ({ teamData, questions }) =>{
  console.log(teamData)
  console.log(questions)
  return (
    <div>
      <br/><br/><br/>
      {
        questions.map((question, index) => (
          <div className="mb-10 text-white text-xl p-3 w-6/12 answer-container" key={index}>
            <div className="text-lg">
              <pre className="text-allow-whitespace">
                { question['question'] }
              </pre>
            </div>
            
            <div className="mt-3">
              {
                question['options'].map((option, i) =>(
                  
                  //User Picked this Answer
                  (i == teamData['answers'][index]) ? (
                    (teamData['answers'][index] == question['answer']) ?
                        //User Picked Answer is correct
                        (
                          <div key={i}> {i+1}.  <span className="ml-5 bg-green-500 picked-answer px-1" > {option}</span> </div>
                        ):
                        //User Picked Answer is wrong
                        (
                          <div key={i}> {i+1}.  <span className="ml-5 bg-red-500 picked-answer px-1"> {option}</span> </div>
                        )
                  ) : (
                    <div key={i}> {i+1}.  <span className="ml-5" > {option}</span> </div>
                  )  
                  
                
                ))
              }
            </div>

            <hr className="my-3"/>
          </div>
        ))
      }
    </div>
  )
}




const Results = ({ setPageMode, teams, setTeams, questions }) => {

  const [viewState, setViewState] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(()=>{
    const sortedTeams = sortArrayOfObjects(teams)
    setTeams(sortedTeams)
  })

  function returnToPanel(){
    //if in depth -> go to full overview
    if(viewState == 1){
      setViewState(0)
    }
    //if in overview -> go back to panel
    else
      setPageMode(1)
  }

  function resultsClick(index){
    setSelectedIndex(index);
    setViewState(1)
  }



  return (
    <div className="ml-40 mt-5" id="resultsContainer">
        <div className="text-2xl text-violet-300 back-btn" onClick={returnToPanel}> {'<'}  Back </div>
        <div className="mt-5 ml-20">
          <span className="text-4xl">View Results</span>
          {
              (viewState == 0) ? (
                                <span className="ml-10">
                                  <span className="text-2xl text-gray-500"> (Sorted by Score & Time) </span>
                                  <br/> 
                                  <div className="text-gray-400 text-lg"> -  Click on Team to View Details by Each Question </div>
                                </span>
                                ):(
                                  <span className="ml-10">
                                    <span className="text-2xl text-gray-500"> For Team - {teams[selectedIndex]['name'] }  </span>
                                  </span>
                                )
          }
          

          <br /> <br />

          {
            (viewState == 0)  ? (<ResultsFull teams={teams} onClickHandler={resultsClick}/>)
                              : (<ResultsDepth teamData={teams[selectedIndex]} questions={questions}/>)
          }

        </div>
  
    </div>
  )
}

export default Results