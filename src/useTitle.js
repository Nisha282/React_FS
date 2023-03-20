import {useEffect} from 'react';

const useTitle =(props)=>{

    useEffect=(()=>{
        document.title=props + "hits on button"
    })
    // return(
    //     <div>
             
    //     </div>
    // )
}
export default useTitle