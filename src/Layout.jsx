import { useState, useEffect } from "react";
import { Link,Outlet } from "react-router-dom";

import {
    CircleUserRound,
    Bell,
    BellRing,
    FileStack,
    BookOpenText,
    Sofa,
} from 'lucide-react';
import BottomNav from './BottomNav.jsx';
import Navbar from './Navbar.jsx';
import Brand from './assets/Scheduly_Brand.png';

export default function Layout(props) {

    const [notifications, setNotifications] = useState(false);

    return (
        <>
            <div className="relative drawer lg:drawer-open w-full h-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content overflow-scroll scrollbar-hide flex flex-col items-center justify-start h-full max-h-screen">
                    {/* Page content here */}
                    <Navbar screenWidth={props.screenWidth} />

                    <div id="content_container" className="w-full h-full p-2 md:p-4 grid grid-cols-12 gap-4">
                        <Outlet/>
                    </div>
                    {/* Bottom Nav for mobile screens */}
                    <BottomNav screenWidth={props.screenWidth} notifications={notifications} />
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