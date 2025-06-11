import { useState, useEffect } from 'react'
import { PanelRight, FileStack, BookOpenText, Sofa, User, Menu } from 'lucide-react'
import Brand from './assets/Scheduly_Brand.png'
import Notif from './assets/Notification_White.png'

function App() {

  const [screenWidth, setScreenWidth] = useState();

  useEffect(function(){
    const scrWidth = window.innerWidth;
    setScreenWidth(scrWidth);
  },)

  return (
    <>
      <div className="drawer md:drawer-open w-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start">
          {/* Page content here */}
          <nav className="flex justify-start items-center p-3 w-full bg-(--color-darkBackground) md:hidden">
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
              <Menu color="grey" size={screenWidth>600? "50": "40"}/>
            </label>
            <div className="grow-1">
              <img src={Brand} alt="Scheduly" className='w-30 float-right sm:float-none sm:w-50 '/>
            </div>
          </nav>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-(--color-darkBackground) text-[24px] min-h-full w-40 p-0">
            {/* Sidebar content here */}
            <div className="flex justify-center items-center w-full h-20 mb-5 mt-2">
              <img src={Brand} alt="Scheduly" className="w-full ms-[-6%]"/>
            </div>
            <li className="w-full"><a><Sofa/>My Space</a></li>
            <li className="w-full"><a><FileStack/>Projects</a></li>
            <li className="w-full"><a><BookOpenText/>Assignments</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
