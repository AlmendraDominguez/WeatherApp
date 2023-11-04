import { useEffect, useState } from "react"

export const useFetch = (URL) => {
    const [data, setData] = useState(undefined)
    
    const options = {
        method: 'GET',
      };

    useEffect(() => {
    
        fetch(URL)
        .then(resp => resp.json())
        .then(result => {

                
            setData(result)
            console.log(result);
        }) 
        .catch((error) => {console.log(error)})
        
    }, [URL])
    
    return {data}
}