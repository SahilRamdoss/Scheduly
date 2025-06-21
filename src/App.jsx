import { useState, useEffect } from 'react'
import {
  CircleUserRound,
  Bell,
  BellRing,
  FileStack,
  BookOpenText,
  Sofa,
} from 'lucide-react'
import Brand from './assets/Scheduly_Brand.png';
import UrgentTasks from './MySpace/UrgentTasks.jsx';
import TasksChart from './MySpace/TasksChart.jsx';
import Calendar from './MySpace/Calendar.jsx';
import Navbar from './Navbar.jsx';
import ViewProjects from './MySpace/ViewProjects.jsx';
import BottomNav from './BottomNav.jsx';
import MySpaceSM from './MySpace/MySpaceSM.jsx';
import NewTaskForm from './MySpace/NewTaskForm.jsx';
import TasksTable from './MySpace/TasksTable.jsx';

function App() {

  const [screenWidth, setScreenWidth] = useState();
  const [notifications, setNotifications] = useState(false);


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
      <div className="relative drawer lg:drawer-open w-full h-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-scroll scrollbar-hide flex flex-col items-center justify-start h-full max-h-screen">
          {/* Page content here */}
          <Navbar screenWidth={screenWidth} />

          <div id="content_container" className="w-full h-full p-2 md:p-4 grid grid-cols-12 gap-4">
            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-4  md:flex md:flex-col md:justify-start md:items-center md:gap-4">
              {/* For mobile view */}
              <div className="flex w-full h-auto md:hidden">
                <MySpaceSM />
              </div>
              {/* For scrensize >= md */}
              <div className='hidden md:flex md:w-full'>
                <ViewProjects screenWidth={screenWidth} />
              </div>
              <div className='hidden md:flex md:w-full'>
                <UrgentTasks />
              </div>
            </div>
            {/* For scrensize >= md */}
            <div className="hidden w-full h-[445px] xl:flex xl:col-span-4">
              <TasksChart />
            </div>
            <div className="hidden md:h-[445px] md:flex md:col-span-6 lg:col-span-5 xl:col-span-4">
              <Calendar />
            </div>
            <div className="hidden p-4 rounded-lg h-[500px] bg-(--color-cardPrimary) md:flex md:justiy-start md:items-start md:col-span-12  xl:col-span-8">
              <TasksTable/>
            </div>
            <div className="hidden rounded-lg p-4 xl:flex xl:flex-col xl:justiy-start xl:items-start  xl:col-span-4 xl:bg-(--color-cardPrimary) xl:h-[500px]">
              <NewTaskForm/>
            </div>
            {/*Used to create space at the bottom of the page */}
            <div className="col-span-12 h-[10px]">

            </div>
          </div>
          {/* Bottom Nav for mobile screens */}
          <BottomNav screenWidth={screenWidth} notifications={notifications} />
        </div>
        <div className="drawer-side z-200">
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
