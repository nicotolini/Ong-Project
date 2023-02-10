import { useState , useEffect } from "react";

const useFetch = (url) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    
    const showData = async () => { 
        try {
            const response = await fetch(url)
            const data = await response.json()
            setUsers(data)
            setLoading(false)  
        } catch (error) {
            console.log(error)
            setError(true)
            setLoading(false)
        }
       
    }
    useEffect(() => {
        showData()
    }, [ ])
    return [users , loading , error] 
}
export default useFetch