import './MySpaceSM.css';
import { ChartPie, ListFilter, Trash2 } from 'lucide-react';

export default function MySpaceSM() {

    return (
        <>
            <div className="w-full h-full">
                <div className="w-full h-auto mb-5">
                    <div className="font-semibold text-lg text-(--color-mainText) mb-3">Urgent Tasks</div>
                    <div id="UrgentTasksContainer" className="flex gap-2 flex-col w-full h-auto max-h-[300px] overflow-scroll scrollbar-hide justify-start items-start">
                        <div className="shrink-0 font-mono bg-base-100 border-base-300 collapse border">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title shrink-0 bg-(--color-cardSecondary)">
                                <div>Project Mars: 01/09/23</div>
                            </div>
                            <div className="collapse-content shrink-0 bg-(--color-cardSecondary)">
                                Create the navbar for the website Aurora
                            </div>
                        </div>
                        <div className="shrink-0 font-mono bg-base-100 border-base-300 collapse border">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title shrink-0 bg-(--color-cardSecondary)">
                                Project Neptune: 01/09/23
                            </div>
                            <div className="collapse-content shrink-0 bg-(--color-cardSecondary)">
                                Land on Neptune
                            </div>
                        </div>
                        <div className="shrink-0 font-mono bg-base-100 border-base-300 collapse border">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title shrink-0 bg-(--color-cardSecondary)">
                                Project Mercury: 01/09/23
                            </div>
                            <div className="collapse-content shrink-0 bg-(--color-cardSecondary)">
                                Land on Mercury
                            </div>
                        </div>
                        <div className="shrink-0 font-mono bg-base-100 border-base-300 collapse border">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title shrink-0 bg-(--color-cardSecondary)">
                                Project Earth: 01/09/23
                            </div>
                            <div className="collapse-content shrink-0 bg-(--color-cardSecondary)">
                                Solve Global warming
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto">
                    <div className="w-full flex flex-wrap justify-between gap-2 items-center mb-3">
                        <div className="grow-1 font-semibold text-lg text-(--color-mainText) mb-3">Pending Tasks</div>
                        <button className='bg-(--color-cardPrimary) p-1 rounded-md'>
                            <ChartPie size="30" color="white"/>
                        </button>
                        <button className='bg-(--color-cardPrimary) p-1 rounded-md'>
                            <ListFilter size="30" color="white"/>
                        </button>
                        <button className='bg-(--color-cardPrimary) p-1 rounded-md'>
                            <Trash2 size="30" color="white"/>
                        </button>
                        <div className='shrink-0 border-1 rounded-lg p-1'>
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
                                <input type="search" className="w-[150px] focus:outline-0 ps-1 text-sm" placeholder="Search" />
                            </label>
                        </div>
                    </div>
                    <div id="AllTasksContainer" className="flex gap-2 flex-col w-full h-full overflow-scroll scrollbar-hide justify-start items-start">
                        <div className="flex justify-start items-center p-3 w-full h-[80px] rounded-lg bg-(--color-base-300)">

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}