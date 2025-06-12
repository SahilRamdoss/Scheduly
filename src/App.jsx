import { useState, useEffect } from 'react'
import { CircleUserRound, Bell, BellRing, FileStack, BookOpenText, Sofa, User, Menu, Circle, CircleUser } from 'lucide-react'
import Brand from './assets/Scheduly_Brand.png'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import "react-day-picker/style.css"


function App() {

  const [screenWidth, setScreenWidth] = useState();
  const [notifications, setNotifications] = useState(false);
  const [selected, setSelected] = useState(Date());

  useEffect(function () {
    const scrWidth = window.innerWidth;
    setScreenWidth(scrWidth);

    if (scrWidth < 768) {
      const screenHeight = Number(screen.height);
      const navHeight = document.getElementById("Navbar").offsetHeight;
      const footHeight = document.getElementById("Footer").offsetHeight;
      const contentContainer = document.getElementById("content_container");

      const containerHeight = screenHeight - navHeight - footHeight;

      contentContainer.style.height = `${containerHeight}px`;
    }
  }, [window.innerWidth])

  return (
    <>
      {/*---------------------------------------------------------------------------- */}
      <div className="relative drawer md:drawer-open w-full h-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start h-full">
          {/* Page content here */}
          <nav id="Navbar" className={screenWidth < 768 ? "shrink-1 flex justify-start items-center py-3 w-full bg-(--color-darkBackground) md:hidden" : "shrink-1 flex justify-start items-center p-3 w-full bg-(--color-darkBackground) md:hidden"}>
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

          <div id="content_container" className="scrollbar-hide flex flex-col justify-start items-center w-full  overflow-scroll p-0 sm:p-4">
            <div className="w-full flex gap-2 justify-start items-center">
              <div className="grow-1 h-full">
                <button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-(--color-highlight) hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-(--color-highlight) relative bg-(--color-darkBackground) h-16 w-full border text-left p-3 text-(--color-mainText) text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-[#A855F7] before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-(--color-highlight) after:right-8 after:top-3 after:rounded-full after:blur-lg">
                  View Projects
                </button>
              </div>
              <div className="h-full w-auto bg-white rounded-sm ">
                hhhhhhhhhhhhhhhhhhhh
              </div>
              <div className="shrink-0">
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  showOutsideDays
                  classNames={{
                    root: "bg-(--color-cardPrimary) text-white rounded-lg shadow-xl p-4",
                    month_caption: "flex justify-between items-center text-lg font-semibold mb-1",
                    caption_label: "text-blue-400",
                    button_next: "bg-white rounded-full m-1 flex justify-center items-center w-5 h-5",
                    button_previous: "bg-white rounded-full m-1 flex justify-center items-center w-5 h-5",
                    weekday: "text-gray-400 uppercase text-sm py-2", // Weekday headers
                    day: "text-gray-300 text-sm p-2 rounded-full", // Default day
                    selected: "bg-blue-600 text-white font-bold", // Selected day
                    today: "border border-blue-500 text-blue-500", // Today's date
                    outside: "text-gray-600 opacity-50", // Days outside the current month
                    disabled: "text-gray-700 cursor-not-allowed", // Disabled days
                    range_start: "bg-green-500 rounded-l-full text-white", // Start of a range
                    range_end: "bg-green-500 rounded-r-full text-white", // End of a range
                    range_middle: "bg-green-300 text-gray-800", // Middle of a range
                  }}
                />
              </div>
            </div>
          </div>


          {/* Bottom Nav for mobile screens */}
          {screenWidth >= 768 ?
            null :
            <div
              id="Footer"
              className="shrink-1 w-full flex justify-around gap-4 items-center px-4 py-1 bg-(--color-darkBackground)"
            >
              <a
                href="#"
                className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
              >
                <Sofa />
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
                <FileStack />
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
                <BookOpenText />
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
                {notifications ? <BellRing /> : <Bell />}
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                >
                  Notifications
                </div>
              </a>
            </div>
          }
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu gap-2 bg-(--color-darkBackground) text-[20px] min-h-full w-35 p-0">
            {/* Sidebar content here */}
            <div className="flex justify-center items-center w-full h-20 mb-5 mt-2">
              <img src={Brand} alt="Scheduly" className="w-full ms-[-6%]" />
            </div>
            <li className="w-full"><a><Sofa />My Space</a></li>
            <li className="w-full"><a><FileStack />Projects</a></li>
            <li className="w-full"><a><BookOpenText />Assignments</a></li>
            <li className="w-full"><a>{notifications ? <BellRing /> : <Bell />}Notifications</a></li>
            <li className="w-full"><a><CircleUserRound />User Account</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
