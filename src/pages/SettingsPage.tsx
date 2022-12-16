import {setPage} from "../features/hmi/hmiSlice";
import {useAppDispatch, useAppSelector} from "../app/hooks";

export function SettingsPage(){
    const pageNumber = useAppSelector(state => state.hmi.page)
    const dispatch = useAppDispatch()

    return(
        <>
            <h1>Settings page</h1>
            <p>Page number: {pageNumber}</p>
            <button
                className='bg-blue-500'
                onClick={() => dispatch(setPage(0))}
            >Main page</button>
        </>
    )
}