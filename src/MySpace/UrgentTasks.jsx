import { CircleAlert } from 'lucide-react';


export default function UrgentTasks() {

    return (
        <>
            <div className="flex flex-col gap-2 justify-start items-center w-full h-full bg-(--color-cardPrimary) rounded-lg p-3">
                <div className="w-full flex justify-start items-center">
                    <div className="grow-1 font-semibold">Urgent Tasks</div>
                    <CircleAlert />
                </div>
                <div id="UrgentTasksContainer" className="scrollbar-hide h-[240px] w-full bg-(--color-cardPrimary) overflow-scroll flex flex-col justify-start items-center gap-2">
                    <div className="shrink-0 font-mono bg-base-100 border-base-300 collapse border">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title shrink-0 bg-(--color-cardSecondary)">
                            Project Mars: 01/09/23
                        </div>
                        <div className="collapse-content shrink-0 bg-(--color-cardSecondary)">
                            Create the navbar for the website Aurora
                        </div>
                    </div>

                    <div className="shrink-0 font-mono bg-base-100 border-base-300 collapse border">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title shrink-0  bg-(--color-cardSecondary)">
                            Single: 02/09/23
                        </div>
                        <div className="collapse-content shrink-0 bg-(--color-cardSecondary)">
                            Eat a sanwitch mf!
                        </div>
                    </div>

                    <div className="shrink-0 font-mono bg-base-100 border-base-300 collapse border">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title shrink-0  bg-(--color-cardSecondary)">
                            Project Neptune: 05/08/23
                        </div>
                        <div className="collapse-content shrink-0 bg-(--color-cardSecondary)">
                            Finish your assignment for mathematics
                        </div>
                    </div>

                    <div className="shrink-0 font-mono bg-base-100 border-base-300 collapse border">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title shrink-0  bg-(--color-cardSecondary)">
                            Project Venus: 05/08/23
                        </div>
                        <div className="collapse-content shrink-0 bg-(--color-cardSecondary)">
                            Search for a new planet
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}