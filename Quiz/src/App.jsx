import { useState } from 'react'
import './App.css'

function App() {
  const [questionNumber, setQuestionNumber] = useState(3)
  const [timer, setTimer] = useState(30)
  console.log(typeof(timer))
  setInterval(()=>(
    setTimer(timer-1)
  ) , 1000)

  const moneyListItems = [
    {id : 1 , amount : '$ 10 '},
    {id : 2 , amount : '$ 50 '},
    {id : 3 , amount : '$ 100 '},
    {id : 4 , amount : '$ 500 '},
    {id : 5 , amount : '$ 1000 '},
    {id : 6 , amount : '$ 10000 '},
    {id : 7 , amount : '$ 25000 '},
    {id : 8 , amount : '$ 50000 '},
    {id : 9 , amount : '$ 75000 '},
    {id : 10 , amount : '$ 100000 '},
  ].reverse()

  return (
    <>
     <div className="app ">
      <div className="main  ">
        <div className="top">
          <div className="timer ">{timer}</div>
          </div>
          <div className="bottom  ">Qestion & Answers</div>
      </div>
      <div className="moneypramid h-100 d-flex justify-content-center align-items-center p-2 "> 
      <ul className='moneyList w-100 list-unstyled  '>

        {
          moneyListItems.map((i)=>(
            <li className={(questionNumber === i.id) ? 'moneyListItem active' : 'moneyListItem'}>
            <span className='moneyListItemNumber fs-6 fw-lighter '>{i.id}</span>
            <span className='moneyListItemAmount fs-5 fw-light '>{i.amount}</span>
          </li>
          ))
        }
       
     
      
      </ul>
      </div>
     </div>
    </>
  )
}

export default App
