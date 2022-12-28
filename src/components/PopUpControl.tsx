import {FaArrowUp, FaArrowDown} from 'react-icons/fa'
import {useEffect, useRef, useState} from "react";

interface OnChangeProps{
    tag: string
    value: number
}

interface PopUpFireProps{
    onClose: () => void
    onChange: ({tag, value}: OnChangeProps) => void
    value: number
    tag: string
    posLeft: string
}

export function PopUpControl({onClose, onChange, value, tag, posLeft}: PopUpFireProps){
    const [currentValue, setCurrentValue] = useState(value)
    const sendTimeoutId = useRef<number>(0)

    const delay = (ms:number) => {
        return new Promise<void>(resolve => {
            sendTimeoutId.current = window.setTimeout(() => resolve(), ms)
        })
    }


    useEffect(()=>{
        if (sendTimeoutId.current) {
            clearTimeout(sendTimeoutId.current)
        }
        delay(2000).then(()=>{
            console.log('Log from timeout :', currentValue)
        })
    },[currentValue])


    return(
        <>
        <div className='absolute top-0 left-0 z-10 h-full w-full bg-gray-500 opacity-50'
             onClick={onClose}
        ></div>
        <div className='absolute z-10 top-[16vh] w-2/6 h-3/6 text-neutral-300
                rounded-2xl bg-neutral-300 shadow-2xl'
            style={{
                left: posLeft
            }}
        >
            <div className='flex flex-col h-full w-full'>
                <div className='flex flex-auto'>
                    <div className='flex flex-auto items-center justify-center text-neutral-900 text-[20vh]'>
                        {currentValue}
                    </div>
                    <div className='flex flex-col justify-evenly w-1/3 px-[1vw]'>
                        <button className='flex items-center justify-center h-1/3 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'
                            onClick={() => onChange({
                                tag,
                                value: value + 1
                            })}
                        ><FaArrowUp/></button>
                        <button className='flex items-center justify-center h-1/3 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'
                                onClick={() => onChange({
                                    tag,
                                    value: value - 1
                                })}
                        ><FaArrowDown/></button>
                    </div>
                </div>
                <div className='flex h-1/3 items-center justify-evenly'>
                    <button className='flex items-center justify-center h-1/2 w-1/5 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'
                        onClick={() => {
                            setCurrentValue(prevState => prevState + 1)
                        }}
                    >-10</button>
                    <button className='flex items-center justify-center h-1/2 w-1/5 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'>-5</button>
                    <button className='flex items-center justify-center h-1/2 w-1/5 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'>+5</button>
                    <button className='flex items-center justify-center h-1/2 w-1/5 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'>+10</button>
                </div>
            </div>
        </div>
        </>
    )
}