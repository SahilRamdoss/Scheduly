export default function NewTaskForm() {
    return (
        <>
            <div className="w-full text-lg float=left text-(--color-mainText) font-semibold mb-5">Create New Task</div>
            <form className="px-2 flex w-full flex-wrap justify-start items-center">
                <div className="group w-full mb-4 flex flex-col justify-start items-start">
                    <label htmlFor="project" className="duration-500 w-full font-mono text-xs group-has-[input:focus]:text-(--color-highlight)">Project</label>
                    <input type="text"
                        name="project"
                        id="project"
                        className="duration-500 w-full text-sm focus:outline-0 border-b-2 focus:border-(--color-highlight)"
                    />
                </div>
                <div className="group w-full mb-4 flex flex-col justify-start items-start">
                    <label htmlFor="task" className="duration-500 w-full font-mono text-xs group-has-[input:focus]:text-(--color-highlight)">Task</label>
                    <input type="text"
                        name="task"
                        id="task"
                        className="duration-500 w-full text-sm focus:outline-0 border-b-2 focus:border-(--color-highlight)"
                    />
                </div>
                <div className="group w-full mb-4 flex flex-col justify-start items-start">
                    <label htmlFor="dateDue" className="duration-500 w-full font-mono text-xs group-has-[input:focus]:text-(--color-highlight)">Date Due</label>
                    <input type="date"
                        name="dateDue"
                        id="dateDue"
                        className="duration-500 w-full text-sm focus:outline-0 border-b-2 focus:border-(--color-highlight)"
                    />
                </div>
                <div className="group w-full mb-4 flex flex-col justify-start items-start">
                    <label htmlFor="assignedTo" className="duration-500 w-full font-mono text-xs group-has-[input:focus]:text-(--color-highlight)">Assign To</label>
                    <input type="text"
                        name="assignedTo"
                        id="assignedTo"
                        className="duration-500 w-full text-sm focus:outline-0 border-b-2 focus:border-(--color-highlight)"
                    />
                </div>
                <div className="w-full grow-1 flex justify-end items-end">
                    <button id="ViewChartButton" type="submit" className="hover:cursor-pointer p-1 text-xs bg-(--color-highlight) rounded-lg">Submit</button>
                </div>
            </form>
        </>
    )
}