import {
    User,
    Menu,
} from 'lucide-react';
import Brand from './assets/Scheduly_Brand.png';

export default function Navbar(props) {

    const breakpoint = 768;

    /*                    <div className="cursor:pointer skeleton flex justify-center items-center border rounded-full border-white h-full aspect-square me-2">
                        <User />
                    </div>*/

    return (
        <>
            <nav id="Navbar" className={props.screenWidth < breakpoint ? "shrink-1 px-2 flex justify-center items-center py-3 w-full bg-(--color-darkBackground) lg:hidden" : "shrink-1 flex justify-start items-center p-3 w-full bg-(--color-darkBackground) lg:hidden"}>
                {props.screenWidth >= breakpoint ?
                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                        <Menu color="grey" size={props.screenWidth > 600 ? "50" : "40"} />
                    </label>
                    :
                    <div>
                        <p id="section_name" className="font-bold text-sm float-left">My Space</p>
                    </div>}
                <div className={props.screenWidth >= breakpoint ? "grow-1" : "hidden"}>
                    <img src={Brand} alt="Scheduly" className='w-40' />
                </div>
            </nav >
        </>
    )
}