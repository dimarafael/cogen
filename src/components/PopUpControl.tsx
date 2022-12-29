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
    min?: number
    max?: number
    units?: string
    bottomBar?: boolean
}

export function PopUpControl({onClose, onChange, value, tag, posLeft, min=0, max=100, units='', bottomBar=true}: PopUpFireProps){
    const [currentValue, setCurrentValue] = useState(value)
    const sendTimeoutId = useRef<number>(0)
    const closeTimeoutId = useRef<number>(0)

    const delaySend = (ms:number) => {
        return new Promise<void>(resolve => {
            sendTimeoutId.current = window.setTimeout(() => resolve(), ms)
        })
    }

    const delayClose = (ms:number) => {
        return new Promise<void>(resolve => {
            closeTimeoutId.current = window.setTimeout(() => resolve(), ms)
        })
    }


    useEffect(()=>{
        if (sendTimeoutId.current) {
            clearTimeout(sendTimeoutId.current)
        }
        delaySend(2000).then(() => onChange({
                tag,
                value: currentValue
            }))

        if (closeTimeoutId.current) {
            clearTimeout(closeTimeoutId.current)
        }
        delayClose(5000).then(() => onClose())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentValue])

    const addToCurrentValue = (val:number)=>{
        let tmpVal = currentValue + val
        if (min > tmpVal) tmpVal = min
        if (max < tmpVal) tmpVal = max
        setCurrentValue( tmpVal)
    }

    return(
        <>
        <div className='absolute top-0 left-0 z-10 h-full w-full bg-gray-500 opacity-50'
             onClick={() => {
                 onClose()
                 clearTimeout(closeTimeoutId.current)
             }}
        ></div>
        <div className={`absolute z-10 top-[16vh] w-4/12 text-neutral-300
                rounded-2xl bg-neutral-300 shadow-2xl ${bottomBar ? 'h-1/2':'h-1/3'}`}
            style={{
                left: posLeft
            }}
        >
            <div className='flex flex-col h-full w-full'>
                <div className='flex flex-auto'>
                    <div className='flex flex-auto items-center justify-center text-neutral-900 text-[20vh]'>
                        <span>{currentValue}</span><span>{units}</span>
                    </div>
                    <div className='flex flex-col justify-evenly w-4/12 px-[1vw]'>
                        <button className='flex items-center justify-center h-1/3 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'
                            onClick={() => {
                                addToCurrentValue(1)
                            }}
                        ><FaArrowUp/></button>
                        <button className='flex items-center justify-center h-1/3 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'
                                onClick={() => {
                                    addToCurrentValue(-1)
                                }}
                        ><FaArrowDown/></button>
                    </div>
                </div>
                {bottomBar && <div className='flex h-1/3 items-center justify-evenly'>
                    <button className='flex items-center justify-center h-1/2 w-1/5 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'
                        onClick={() => {
                            addToCurrentValue(-10)
                        }}
                    >-10</button>
                    <button className='flex items-center justify-center h-1/2 w-1/5 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'
                            onClick={() => {
                                addToCurrentValue(-5)
                            }}
                    >-5</button>
                    <button className='flex items-center justify-center h-1/2 w-1/5 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'
                            onClick={() => {
                                // setCurrentValue(prevState => prevState + 1)
                                addToCurrentValue(5)
                            }}
                    >+5</button>
                    <button className='flex items-center justify-center h-1/2 w-1/5 text-[4vh] rounded bg-neutral-900 active:bg-neutral-600'
                        onClick={()=>{
                            addToCurrentValue(10)
                        }}
                    >+10</button>
                </div>}
            </div>
        </div>
        </>
    )
}