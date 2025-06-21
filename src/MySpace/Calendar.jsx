import { DayPicker } from 'react-day-picker'
import { useState} from 'react'
import "react-day-picker/style.css"

export default function Calendar() {

    const [selected, setSelected] = useState(Date());

    return (
        <>
            <div className="w-full h-full relative">
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    showOutsideDays
                    classNames={{
                        root: "bg-(--color-cardPrimary) w-full h-full flex flex-col justify-start items-center text-white rounded-lg shadow-xl p-4 xl:p-2 2xl:p-5",
                        month_caption: "flex justify-between items-center text-lg 2xl:text-xl font-semibold mb-1",
                        month:"w-full",
                        months:"w-full flex",
                        month_grid:"w-full",
                        nav:"absolute flex md:right-[5%] lg:right-[4%] xl:right-[3%] 2xl:right-[4%]",
                        caption_label: "text-(--color-mainText)",
                        button_next: "bg-white rounded-full m-1 flex justify-center items-center w-5 h-5",
                        button_previous: "bg-white rounded-full m-1 flex justify-center items-center w-5 h-5",
                        weekday: "text-gray-400 uppercase text-sm py-2", // Weekday headers
                        day: "text-gray-300 text-lg lg:text-sm xl:text-md 2xl:text-lg p-1.25 xl:p-1.5 rounded-full", // Default day
                        selected: "bg-cyan-600 text-white font-bold", // Selected day
                        today: "border border-cyan-600 border-2 text-blue-500", // Today's date
                        outside: "text-gray-600 opacity-50", // Days outside the current month
                        disabled: "text-gray-700 cursor-not-allowed", // Disabled days
                        range_start: "bg-green-500 rounded-l-full text-white", // Start of a range
                        range_end: "bg-green-500 rounded-r-full text-white", // End of a range
                        range_middle: "bg-green-300 text-gray-800", // Middle of a range
                    }}
                />
            </div>
        </>
    )
}