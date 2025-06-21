import { PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function TasksChart() {

    // Data for the Polar Area Chart
    const data = {
        labels: ['Priority 1', 'Priority 2', 'Priority 3'],
        datasets: [
            {
                label: 'Tasks',
                data: [11, 16, 7], // Three data items
                backgroundColor: [
                    'rgba(20, 184, 166, 0.5)',
                    'rgba(250, 204, 21, 0.5)',
                    'rgba(236, 72, 153, 0.5)'
                ],
                borderColor: [
                    'rgba(20, 184, 166, 0.5)',
                    'rgba(250, 204, 21, 0.5)',
                    'rgba(236, 72, 153, 0.5)'
                ],
                borderWidth: 1,
            },
        ],
    };

    // Options for the Polar Area Chart
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allows the chart to fill its container
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: "#F3F4F6", // Legend text color for dark background
                },
            },
            title: {
                display: true,
                text: 'My Polar Area Chart',
                color: 'white', // Chart title color for dark background
                font: {
                    size: 18,
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background for dark theme
                titleColor: 'white',
                bodyColor: 'white',
            }
        },
        scales: {
            r: { // Radial scale for polar area chart
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)', // Grid lines for dark background
                },
                ticks: {
                    color: 'white', // Tick labels color for dark background
                    backdropColor: 'transparent', // Make tick backdrop transparent
                },
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.2)' // Angle lines color for dark background
                }
            },
        },
    };

    return (
        <>
            <div className="h-full w-full rounded-sm ">
                <div className="rounded-lg flex flex-col items-center justify-start w-auto h-full bg-(--color-cardPrimary) p-4">
                    <div className="grow-1 w-full bg-gray-800 shadow-xl rounded-lg overflow-hidden">
                        <div className="h-full w-full">
                            <PolarArea data={data} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}