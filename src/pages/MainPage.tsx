import {useAppDispatch, useAppSelector} from "../app/hooks";
import {setPage} from "../features/hmi/hmiSlice";

export function MainPage(){
    const pageNumber = useAppSelector(state => state.hmi.page)
    const dispatch = useAppDispatch()

    return(
        <div className='flex flex-col w-full h-screen'>
            <div className='flex-auto border border-red-900'>
                <h1>Main page</h1>
                <p>Page number: {pageNumber}</p>
                <button
                    className='bg-blue-500'
                    onClick={() => dispatch(setPage(1))}
                >Settings page</button>
            </div>
            <div className='flex  border border-blue-900 h-1/5'>
                <div className=' border border-gray-900'>

                </div>
            </div>
        </div>
    )
}