import { useState, useEffect } from 'react'
import { PanelRight,Bell,BellRing, FileStack, BookOpenText, Sofa, User, Menu } from 'lucide-react'
import Brand from './assets/Scheduly_Brand.png'
import Notif from './assets/Notification_White.png'

function App() {

  const [screenWidth, setScreenWidth] = useState();
  const [notifications, setNotifications] = useState(false);

  useEffect(function () {
    const scrWidth = window.innerWidth;
    setScreenWidth(scrWidth);
  }, [window.innerWidth])

  return (
    <>

      {/* Bottom Nav for mobile screens */}
      {screenWidth >= 768 ?
        null :
        <div className="absolute top-0 left-0 z-10 w-full h-[100%] flex flex-col justify-end items-center">
          <div
            className="w-full flex justify-around gap-4 items-center px-4 py-1 bg-(--color-darkBackground)"
          >
            <a
              href="#"
              className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
            >
              <Sofa/>
              <div
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
              >
                Home
              </div>
            </a>

            <a
              href="#"
              className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
            >
              <FileStack/>
              <div
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
              >
                Projects
              </div>
            </a>

            <a
              href="#"
              className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
            >
              <BookOpenText/>
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
              >
                Assignments
              </div>
            </a>

            <a
              href="#"
              className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
            >
              {notifications?<BellRing/>:<Bell/>}
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
              >
                Notifications
              </div>
            </a>
          </div>
        </div>
      }

      {/*---------------------------------------------------------------------------- */}
      <div className="drawer md:drawer-open w-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start h-full">
          {/* Page content here */}
          <nav className={screenWidth < 768 ? "flex justify-start items-center py-3 w-full bg-(--color-darkBackground) md:hidden" : "flex justify-start items-center p-3 w-full bg-(--color-darkBackground) md:hidden"}>
            {screenWidth >= 768 ?
              <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                <Menu color="grey" size={screenWidth > 600 ? "50" : "40"} />
              </label>
              :
              null}
            <div className="grow-1">
              {screenWidth >= 768 ?
                <img src={Brand} alt="Scheduly" className='w-50' />
                :
                <img src={Brand} alt="Scheduly" className='w-30' />}
            </div>
            {screenWidth < 768 ?
              <div className="cursor:pointer skeleton flex justify-center items-center border rounded-full border-white h-full aspect-square me-2">
                <User />
              </div>
              : null}
          </nav>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-(--color-darkBackground) text-[24px] min-h-full w-40 p-0">
            {/* Sidebar content here */}
            <div className="flex justify-center items-center w-full h-20 mb-5 mt-2">
              <img src={Brand} alt="Scheduly" className="w-full ms-[-6%]" />
            </div>
            <li className="w-full"><a><Sofa />My Space</a></li>
            <li className="w-full"><a><FileStack />Projects</a></li>
            <li className="w-full"><a><BookOpenText />Assignments</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
