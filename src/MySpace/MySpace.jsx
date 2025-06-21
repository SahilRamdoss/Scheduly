import { useState, useEffect } from "react";

import UrgentTasks from './UrgentTasks.jsx';
import TasksChart from './TasksChart.jsx';
import Calendar from './Calendar.jsx';
import ViewProjects from './ViewProjects.jsx';
import MySpaceSM from './MySpaceSM.jsx';
import NewTaskForm from './NewTaskForm.jsx';
import TasksTable from './TasksTable.jsx';

export default function MySpace(props) {


    return (
        <>
            <div className="col-start-1 col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-4  md:flex md:flex-col md:justify-start md:items-center md:gap-4">
                {/* For mobile view */}
                <div className="flex w-full h-auto md:hidden">
                    <MySpaceSM />
                </div>
                {/* For scrensize >= md */}
                <div className='hidden md:flex md:w-full'>
                    <ViewProjects screenWidth={props.screenWidth} />
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
                <TasksTable />
            </div>
            <div className="hidden rounded-lg p-4 xl:flex xl:flex-col xl:justiy-start xl:items-start  xl:col-span-4 xl:bg-(--color-cardPrimary) xl:h-[500px]">
                <NewTaskForm />
            </div>
            {/*Used to create space at the bottom of the page */}
            <div className="col-span-12 h-[10px]">

            </div>
        </>
    )
}