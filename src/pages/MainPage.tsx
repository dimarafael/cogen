import {useAppDispatch, useAppSelector} from "../app/hooks";
import {BsFillPlayFill} from 'react-icons/bs'
import {CiCoffeeBean} from 'react-icons/ci'
import {BsThermometerSnow} from 'react-icons/bs'
import Drum from "../img/Drum";

import {setPage} from "../features/hmi/hmiSlice";

export function MainPage(){
    const pageNumber = useAppSelector(state => state.hmi.page)
    const dispatch = useAppDispatch()

    return(
        <div className='flex w-full h-screen bg-black'>
            <div className='flex flex-col w-1/12 rounded-l-2xl bg-neutral-700'>
                <div className='text-white text-[2.2vw] py-[2vh]'>
                    SIEMENS
                </div>
                <div className='text-neutral-300 text-[3vw]'>
                    00:00
                </div>
                <div className='flex items-center pb-[3vh]'>
                    <div className='text-neutral-300 text-[2vw] ml-[0.3vw]'>
                        <CiCoffeeBean/>
                    </div>
                    <div className='text-neutral-300 text-[2vw] ml-[0.2vw]'>
                        00:00
                    </div>
                </div>
                <div className='flex items-center text-neutral-300 text-[10vh] h-[10vh] box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <BsFillPlayFill className='m-auto'/>
                </div>
                <div className='flex items-center text-neutral-300 text-[8vh] h-[10vh] mb-[1vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <CiCoffeeBean className='m-auto'/>
                </div>
                <div className='flex items-center text-neutral-300 text-[7vh] h-[10vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <Drum/>
                </div>
                <div className='flex items-center text-neutral-300 text-[8vh] h-[10vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <CiCoffeeBean className='m-auto'/>
                </div>
                <div className='flex items-center text-neutral-300 text-[8vh] h-[10vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <CiCoffeeBean className='m-auto'/>
                </div>
                <div className='flex items-center text-neutral-300 text-[8vh] h-[10vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <CiCoffeeBean className='m-auto'/>
                </div>
            </div>
            <div className='flex flex-auto flex-col p-[0.5%]'>
                <div className='h-1/6 bg-neutral-700 rounded-2xl mb-[0.5%]'>

                </div>
                <div className='flex-auto bg-neutral-700 rounded-2xl'>
                    <Drum/>
                    <BsThermometerSnow/>
                </div>
                {/*<h1>Main page</h1>*/}
                {/*<p>Page number: {pageNumber}</p>*/}
                {/*<button*/}
                {/*    className='bg-blue-500'*/}
                {/*    onClick={() => dispatch(setPage(1))}*/}
                {/*>Settings page</button>*/}
            </div>

        </div>
    )
}
