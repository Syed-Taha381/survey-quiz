import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BsFillTelephoneFill } from "react-icons/bs"

function App() {

  const [dataShow, setDataShow] = useState()
  const [aboutForward, setAboutForward] = useState(1)
  const [congratsData, setCongratsData] = useState(false)
  const [noTextShow, setNoTextShow] = useState(false)

  useEffect(() => {
    const dataFirst = [
      {
        id: 1,
        content: "Have you or a loved one been exposed to the herbicide Paraquat?",
        button: [
          {
            id: 1,
            buttonText: "Yes, I have Used it",
            forward: true,
            step: 2
          },
          {
            id: 2,
            buttonText: "A loved one has used it",
            forward: true,
            step: 2
          },
          {
            id: 3,
            buttonText: "No, I have never used Paraquat",
            forward: false,
            step: 0
          },
        ]
      },
    ]

    const dataSecond = [
      {
        id: 2,
        content: "Have you or a loved one been recently diagnosed with Parkinson's?",
        button: [
          {
            id: 1,
            buttonText: "Yes",
            forward: true,
            step: 3
          },
          {
            id: 2,
            buttonText: "No",
            forward: false,
            step: 0
          },
        ]
      },
    ]

    const dataThird = [
      {
        id: 3,
        content: "How were you exposed to Paraquat?",
        button: [
          {
            id: 1,
            buttonText: "Sprayed, mixed, or handled Paraquat",
            forward: true,
            step: 4
          },
          {
            id: 2,
            buttonText: "Lived or worked around Paraquat spray",
            forward: true,
            step: 4
          },
          {
            id: 3,
            buttonText: "Exposure from nearby spray",
            forward: true,
            step: 4
          },
          {
            id: 4,
            buttonText: "I've never been exposed",
            forward: false,
            step: 0
          },
        ]
      },
    ]

    const finalData = [
      {
        id: 4,
        callon: "Call (833) 345-4120",
      },
    ]

    const dataNot = [
      {
        id: 5,
        content: "Sorry data",
      },
    ]

    if (aboutForward === 1) {
      setDataShow(dataFirst)
    } else if (aboutForward === 2) {
      setDataShow(dataSecond)
    } else if (aboutForward === 3) {
      setDataShow(dataThird)
    } else if (aboutForward === 4) {
      setDataShow(finalData)
      setCongratsData(true)
    } else if (aboutForward === 0) {
      setDataShow(dataNot)
      setNoTextShow(true)
    }
  }, [aboutForward])

  return (
    <>
      <Header />
      <div className='container'>
        {
          noTextShow === true ? null :
            <>
              {
                congratsData === true ?
                  <>
                    <h1 className='text-center padding-right-left'>Congratulations</h1>
                    <h2 className='text-center padding-right-left'>You may be entitled to financial Compensation of up to <span className='text-red'>$ 150,000</span>.</h2>
                    <p className='text-center sec-para'><span className='bold'>Call us now</span> to find out how much you are entitled to help cover any medical expenses, lost wages, and more.</p>
                    <h1 className='text-center padding-right-left'>X SPOTS REMAINING</h1>
                    <h1 className='text-center padding-right-left'>TAP TO CALL</h1>
                  </> :
                  <>
                    <h1 className='text-center padding-right-left'>Most Americans Expose To Paraquat Don't Know They Have Unclaimed Compensation</h1>
                    <p className='text-center sec-para'>Take this 60-seconds quiz to see how much you may be entitled to</p>
                  </>
              }
            </>
        }
        {
          dataShow?.map((index, i) => {
            return (
              <>
                {
                  index?.callon ?
                    <>
                      <div className='button-div'>
                        {
                          <>
                            <a className='main-button anchore' href="tel:8333454120">
                              <BsFillTelephoneFill />
                              <span>
                                {index?.callon}
                              </span>
                            </a>
                            <h1 className='text-center'>It is completely FREE to check</h1>
                          </>
                        }
                      </div>
                    </> :
                    <>
                      <h2 className='text-center padding-right-left' key={i}>{index?.content}</h2>
                      <div className='button-div'>
                        {
                          index?.button?.map((button) => {
                            return (
                              <button className='main-button' onClick={() => setAboutForward(button?.step)}>{button?.buttonText}</button>
                            )
                          })
                        }
                      </div>
                    </>
                }
              </>

            )
          })
        }
      </div >
    </>
  );
}

export default App;
