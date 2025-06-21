import { Trash2, BookCheck } from 'lucide-react';

export default function TasksTable() {
    return (
        <>
            <div className="flex flex-col justify-start items-start w-full h-full overflow-scroll scrollbar-hide">
                <div className="flex gap-2 justify-start items-center w-full pb-3 border-b-2 border-(--color-base-300)">
                    <div className="grow-1 shrink-0 flex gap-2 text-xs text-gray-500 justify-around items-center">
                        <a href="#">Recent</a>
                        <a href="#">In Pogress</a>
                        <a href="#">Completed</a>
                        <a href="#">Created By Me</a>
                        <a href="#">Assigned To Me</a>
                    </div>
                    <button className="hover:cursor-pointer">
                        <Trash2 size="20" color="gray" />
                    </button>
                    <button className="hover:cursor-pointer">
                        <BookCheck size="20" color="gray" />
                    </button>
                    <div>
                        <label className="flex justify-start items-center">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" className="w-[100px] focus:outline-0 ps-1 text-sm" placeholder="Search" />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}