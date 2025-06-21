import {
    Bell,
    BellRing,
    FileStack,
    BookOpenText,
    Sofa,
    CalendarDays,
} from 'lucide-react'

export default function BottomNav(props) {
    return (
        <>
            {props.screenWidth >= 768 ?
                null :
                <div
                    id="Footer"
                    className="shrink-1 w-full flex justify-around items-center px-4 py-1 bg-(--color-darkBackground)"
                >
                    <a
                        href="#"
                        className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
                    >
                        <Sofa />
                        <div
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                        >
                            My Space
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
                        {props.notifications ? <BellRing /> : <Bell />}
                        <div
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                        >
                            Notifications
                        </div>
                    </a>

                    <a
                        href="#"
                        className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
                    >
                        <CalendarDays/>
                        <div
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                        >
                            Calendar
                        </div>
                    </a>
                </div>
            }
        </>
    )
}