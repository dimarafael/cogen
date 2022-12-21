import {useAppDispatch, useAppSelector} from "../app/hooks";
import {BsFillPlayFill} from 'react-icons/bs'
import {CiCoffeeBean} from 'react-icons/ci'
import {RxGear} from 'react-icons/rx'
import {GiCoffeeBeans} from 'react-icons/gi'
import {MdAir} from 'react-icons/md'
import DrumSvg from "../components/svg/DrumSvg";
import FireSvg from "../components/svg/FireSvg";
import MixerSvg from "../components/svg/MixerSvg";
import SnowflakeSvg from "../components/svg/SnowflakeSvg";
import FanSvg from "../components/svg/FanSvg";

import {setPage} from "../features/hmi/hmiSlice";

export function MainPage(){
    const pageNumber = useAppSelector(state => state.hmi.page)
    const dispatch = useAppDispatch()

    return(
        <div className='flex w-full h-screen bg-black'>
            <div className='flex flex-col w-1/12 rounded-l-3xl bg-neutral-700'>
                <div className='text-white text-[2.2vw] py-[2vh]'>
                    SIEMENS
                </div>
                <div className='text-neutral-300 text-[3vw]'>
                    00:00
                </div>
                <div className='flex items-center pb-[2vh]'>
                    <div className='text-neutral-300 text-[2vw] ml-[0.3vw]'>
                        <CiCoffeeBean/>
                    </div>
                    <div className='text-neutral-300 text-[2vw] ml-[0.2vw]'>
                        00:00
                    </div>
                </div>
                <div className='flex flex-col items-center text-neutral-300 h-[10vh] box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <div className='text-[7.5vh] mb-[-1vh]'><BsFillPlayFill/></div>
                    <div className='text-[2vh]'>START</div>
                </div>
                <div className='flex flex-col items-center text-neutral-300 h-[10vh] mb-[1vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <div className='text-[6.5vh] mb-[-0.5vh]'><CiCoffeeBean/></div>
                    <div className='text-[2vh]'>CRACK</div>
                </div>
                <div className='flex flex-col items-center text-neutral-300 h-[10vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <div className='text-[5.5vh] mt-[1vh]'><DrumSvg/></div>
                    <div className='text-[2vh]'>DRUM</div>
                </div>
                <div className='flex flex-col items-center text-neutral-300 h-[10vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <div className='text-[5.5vh] mt-[1vh]'><FireSvg/></div>
                    <div className='text-[2vh]'>FIRE</div>
                </div>
                <div className='flex flex-col items-center text-neutral-300 text-[6.5vh] h-[10vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <div className='text-[5.5vh] mt-[1vh]'><MixerSvg/></div>
                    <div className='text-[2vh]'>MIXER</div>
                </div>
                <div className='flex flex-col items-center text-neutral-300 text-[6.5vh] h-[10vh] mb-[1vh] justify-center box-border border-y border-neutral-400 active:bg-neutral-600'>
                    <div className='text-[5.5vh] mt-[1vh]'><SnowflakeSvg/></div>
                    <div className='text-[2vh]'>COOLER</div>
                </div>
                <div className='flex flex-auto items-center text-neutral-300 text-[6.5vh] rounded-bl-3xl justify-center box-border border-t border-neutral-400 active:bg-neutral-600'>
                    <RxGear/>
                </div>
            </div>
            <div className='flex flex-auto flex-col p-[0.5%]'>
                <div className='flex h-1/6 bg-neutral-700 rounded-2xl mb-[0.5%]'>
                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'>
                        <div className='flex items-center mx-[0.2vw] text-[4vw]'><MdAir/></div>
                        <div className='flex flex-col flex-auto items-start'>
                            <div className='flex items-end mx-[0.2vw] text-[2vw] h-2/3 pb-[1vh]'>000.0°C</div>
                            <div className='mx-[0.4vw] text-[2vh] h-1/3 mt-[-2vh]'>AIR</div>
                        </div>
                    </div>

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'>
                        <div className='flex items-center mx-[0.2vw] text-[4vw]'><GiCoffeeBeans/></div>
                        <div className='flex flex-col flex-auto items-start'>
                            <div className='flex items-end mx-[0.2vw] text-[2vw] h-2/3 pb-[1vh]'>000.0°C</div>
                            <div className='mx-[0.4vw] text-[2vh] h-1/3 mt-[-2vh]'>BEANS</div>
                        </div>
                    </div>

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'>
                        <div className='flex items-center mx-[0.2vw] text-[3vw]'>RoR</div>
                        <div className='flex items-center text-[2vw] ml-[0.5vw]'>
                            00.0°C
                        </div>
                    </div>

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'>
                        <div className='flex items-center mx-[0.2vw] text-[4vw]'><FireSvg/></div>
                        <div className='flex items-center text-[2vw]'>
                            00
                        </div>
                    </div>

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'>
                        <div className='flex items-center mx-[0.2vw] text-[4vw]'><DrumSvg/></div>
                        <div className='flex items-center text-[2vw]'>
                            00 rpm
                        </div>
                    </div>

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'>
                        <div className='flex items-center mx-[0.2vw] text-[4vw] text-neutral-300'><FanSvg/></div>
                        <div className='flex flex-col flex-auto items-start'>
                            <div className='flex items-end mx-[0.2vw] text-[2vw] h-2/3 pb-[1vh]'>000 Pa</div>
                            <div className='mx-[0.4vw] text-[2vh] h-1/3 mt-[-2vh]'>000 Pa</div>
                        </div>
                    </div>

                </div>
                <div className='flex-auto bg-neutral-700 rounded-2xl'>

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
