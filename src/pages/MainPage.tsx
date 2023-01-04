// import {useAppDispatch, useAppSelector} from "../app/hooks";
import {BsFillPlayFill} from 'react-icons/bs'
import {CiCoffeeBean} from 'react-icons/ci'
import {RxGear} from 'react-icons/rx'
import {GiCoffeeBeans} from 'react-icons/gi'
import {MdAir} from 'react-icons/md'
import {MdError} from 'react-icons/md'
import DrumSvg from "../components/svg/DrumSvg";
import FireSvg from "../components/svg/FireSvg";
import MixerSvg from "../components/svg/MixerSvg";
import SnowflakeSvg from "../components/svg/SnowflakeSvg";
import FanSvg from "../components/svg/FanSvg";
import {Chart} from "../components/Chart";
import CogenLogoSvg from "../components/svg/CogenLogoSvg";
import {PopUpControl} from "../components/PopUpControl";
import {useEffect, useState} from "react";
// import {setPage} from "../features/hmi/hmiSlice";
import {useGetCogenDataQuery, useSetCogenValueMutation, useSetCogenBoolMutation} from "../services/cogenApi";
import {plcData} from "../types";


export function MainPage(){
    // const pageNumber = useAppSelector(state => state.hmi.page)
    // const dispatch = useAppDispatch()

    const{data, isError} = useGetCogenDataQuery(1, {pollingInterval: 1000})
    const [setCogenValue] = useSetCogenValueMutation()
    const [setCogenBool] = useSetCogenBoolMutation()
    const [gazControlPopUp, setGazControlPopUp] = useState(false)
    const [drumControlPopUp, setDrumControlPopUp] = useState(false)
    const [fanControlPopUp, setFanControlPopUp] = useState(false)
    const [drumBtn, setDrumBtn] = useState(false)
    const [drumBtnFlag, setDrumBtnFlag] = useState(false)
    const [fireBtn, setFireBtn] = useState(false)
    const [fireBtnFlag, setFireBtnFlag] = useState(false)
    const [mixerBtn, setMixerBtn] = useState(false)
    const [mixerBtnFlag, setMixerBtnFlag] = useState(false)
    const [coolerBtn, setCoolerBtn] = useState(false)
    const [coolerBtnFlag, setCoolerBtnFlag] = useState(false)

    useEffect(()=>{
        if (data !== undefined) {
            if (!drumBtnFlag) {
                setDrumBtn(data['drum'])
            }
            if (!fireBtnFlag) {
                setFireBtn(data['fire'])
            }
            if (!mixerBtnFlag) {
                setMixerBtn(data['mixer'])
            }
            if (!coolerBtnFlag) {
                setCoolerBtn(data['cooler'])
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    const delay = (ms:number) => {
        return new Promise<void>(resolve => {
            window.setTimeout(() => resolve(), ms)
        })
    }

    const getRealStr = function (data: plcData, tag: keyof plcData): string {
        if (data !== undefined) {
            const value = data[tag]
            if (typeof value == "number"){
                return( value.toFixed(1).toString() )
            } else return ('0.0')
        } else return('0.0')
    }

    const getIntStr = function (data: plcData, tag: keyof plcData): string {
        if (data !== undefined) {
            const value = data[tag]
            if (typeof value == "number"){
                return( value.toFixed(0).toString() )
            } else return ('0')
        } else return('0')
    }

    const getBool = function (data: plcData, tag: keyof plcData): boolean{
        if (data !== undefined) {
            const value = data[tag]
            if (typeof value == "boolean"){
                return value
            } else return false
        } else return false
    }

    return(
        <div className='flex w-full h-screen bg-black'>
            <div className='flex flex-col w-1/12 rounded-l-3xl bg-neutral-700'>
                <div className='text-neutral-300 text-[2.4vw] pt-[4vh] ml-[0.5vw]'>
                    <CogenLogoSvg/>
                </div>
                <div className='text-neutral-300 text-[3vw] pt-[1vh]'>
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
                <div className={`flex flex-col items-center h-[10vh] justify-center box-border border-y
                                border-neutral-400 active:bg-neutral-600 ${drumBtn ? 'text-green-500': 'text-neutral-300'}`}
                     onClick={() => {
                         setCogenBool({
                            tag: 'drum',
                            value: !getBool(data,'drum')
                        })
                         setDrumBtn(!getBool(data,'drum'))
                         setDrumBtnFlag(true)
                         delay(1500).then(()=>setDrumBtnFlag(false))
                     }}
                >
                    <div className='text-[5.5vh] mt-[1vh]'><DrumSvg/></div>
                    <div className='text-[2vh]'>DRUM</div>
                </div>
                <div className={`flex flex-col items-center h-[10vh] justify-center box-border border-y
                                border-neutral-400 active:bg-neutral-600 ${fireBtn ? 'text-green-500': 'text-neutral-300'}`}
                     onClick={() => {
                         setCogenBool({
                             tag: 'fire',
                             value: !getBool(data,'fire')
                         })
                         setFireBtn(!getBool(data,'fire'))
                         setFireBtnFlag(true)
                         delay(1500).then(()=>setFireBtnFlag(false))
                     }}
                >
                    <div className='text-[5.5vh] mt-[1vh]'><FireSvg/></div>
                    <div className='text-[2vh]'>FIRE</div>
                </div>
                <div className={`flex flex-col items-center text-[6.5vh] h-[10vh] justify-center box-border border-y
                                border-neutral-400 active:bg-neutral-600 ${mixerBtn ? 'text-green-500': 'text-neutral-300'}`}
                     onClick={() => {
                         setCogenBool({
                             tag: 'mixer',
                             value: !getBool(data,'mixer')
                         })
                         setMixerBtn(!getBool(data,'mixer'))
                         setMixerBtnFlag(true)
                         delay(1500).then(()=>setMixerBtnFlag(false))
                     }}
                >
                    <div className='text-[5.5vh] mt-[1vh]'><MixerSvg/></div>
                    <div className='text-[2vh]'>MIXER</div>
                </div>
                <div className={`flex flex-col items-center text-[6.5vh] h-[10vh] mb-[1vh] justify-center box-border border-y
                                border-neutral-400 active:bg-neutral-600 ${coolerBtn ? 'text-green-500': 'text-neutral-300'}`}
                     onClick={() => {
                         setCogenBool({
                             tag: 'cooler',
                             value: !getBool(data,'cooler')
                         })
                         setCoolerBtn(!getBool(data,'cooler'))
                         setCoolerBtnFlag(true)
                         delay(1500).then(()=>setCoolerBtnFlag(false))
                     }}
                >
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
                        <div className='flex flex-col flex-auto items-start text-blue-600'>
                            <div className='flex items-end mx-[0.2vw] text-[2vw] h-2/3 pb-[1vh]'>{getRealStr(data, 't_smoke')} °C</div>
                            <div className='mx-[0.4vw] text-[2vh] h-1/3 mt-[-2vh]'>AIR</div>
                        </div>
                    </div>

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'>
                        <div className='flex items-center mx-[0.2vw] text-[4vw]'><GiCoffeeBeans/></div>
                        <div className='flex flex-col flex-auto items-start text-rose-600'>
                            <div className='flex items-end mx-[0.2vw] text-[2vw] h-2/3 pb-[1vh]'>{getRealStr(data, 't_prod')} °C</div>
                            <div className='mx-[0.4vw] text-[2vh] h-1/3 mt-[-2vh]'>BEANS</div>
                        </div>
                    </div>

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'>
                        <div className='flex items-center mx-[0.2vw] text-[3vw]'>RoR</div>
                        <div className='flex items-center text-[2vw] ml-[0.5vw] text-yellow-600'>
                            {getRealStr(data, 'ror')} °C
                        </div>
                    </div>

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6 active:bg-neutral-600'
                        onClick={() => setGazControlPopUp(true)}
                    >
                        <div className='flex items-center mx-[0.2vw] text-[4vw]'><FireSvg/></div>
                        <div className='flex items-center text-[2vw] text-green-600'>
                            {getIntStr(data, 'gaz_preset')}
                        </div>

                    </div>
                    {gazControlPopUp && <PopUpControl onClose={() => setGazControlPopUp(false)}
                                                      value={parseInt(getIntStr(data, 'gaz_preset'))}
                                                      onChange={setCogenValue}
                                                      tag='gaz_preset'
                                                      posLeft='30vw'
                                                      max={10}
                                                      min={1}
                                                      bottomBar={false}
                    />}

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'
                         onClick={()=>setDrumControlPopUp(true)}
                    >
                        <div className='flex items-center mx-[0.2vw] text-[4vw]'><DrumSvg/></div>
                        <div className='flex items-center text-[2vw] text-orange-600 pl-[0.5vw]'>
                            {getIntStr(data, 'drum_speed')} rpm
                        </div>
                    </div>
                    {drumControlPopUp && <PopUpControl onClose={() => setDrumControlPopUp(false)}
                                                      value={parseInt(getIntStr(data, 'drum_speed'))}
                                                      onChange={setCogenValue}
                                                      tag='drum_speed'
                                                      posLeft='45vw'
                    />}

                    <div className='flex text-neutral-300 px-[0.1vw] w-1/6'
                        onClick={()=>setFanControlPopUp(true)}
                    >
                        <div className='flex items-center mx-[0.2vw] text-[4vw]'><FanSvg/></div>
                        <div className='flex flex-col flex-auto items-start text-purple-600'>
                            <div className='flex items-end mx-[0.2vw] text-[2vw] h-2/3 pb-[1vh]'>{getIntStr(data, 'dp')} Pa</div>
                            <div className='mx-[0.4vw] text-[2vh] h-1/3 mt-[-2vh]'>{getIntStr(data, 'smoke_fan_speed')} %</div>
                        </div>
                    </div>
                    {fanControlPopUp && <PopUpControl onClose={() => setFanControlPopUp(false)}
                                                      value={parseInt(getIntStr(data, 'smoke_fan_speed'))}
                                                      onChange={setCogenValue}
                                                      tag='smoke_fan_speed'
                                                      posLeft='60vw'
                                                      min={10}
                                                      units='%'
                    />}

                </div>
                <div className='flex-auto z-0 bg-neutral-700 rounded-2xl'>
                    <Chart/>
                </div>
            </div>
            {isError && <div className='absolute top-1/2 left-1/3 h-1/6 w-1/3 rounded-2xl bg-neutral-300 shadow-2xl z-40
                            items-center justify-center'>
                <div className='flex flex-auto h-full'>
                    <div className='flex w-1/5 items-center justify-center text-red-700 text-[10vh] ml-[4vw]'><MdError/></div>
                    <div className='flex flex-auto items-center justify-start text-neutral-700 text-[5vh]'>Backend offline!</div>
                </div>
            </div>}
            {!getBool(data, 'connected') && <div className='absolute top-1/3 left-1/3 h-1/6 w-1/3 rounded-2xl bg-neutral-300 shadow-2xl z-40
                            items-center justify-center'>
                <div className='flex flex-auto h-full'>
                    <div className='flex w-1/5 items-center justify-center text-red-700 text-[10vh] ml-[4vw]'><MdError/></div>
                    <div className='flex flex-auto items-center justify-start text-neutral-700 text-[5vh] ml-[2vw]'>PLC offline!</div>
                </div>
            </div>}

        </div>
    )
}
