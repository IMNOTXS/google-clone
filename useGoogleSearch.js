import {useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = '71233ecd73cb24578'

const UseGoogleSearch = (term) => {
    const[data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=AIzaSyC_AeGvy2_e6Ni5ZgWpjAu7V5JymPzgmiI&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData()
    }, [term])

    return { data }
}

export default UseGoogleSearch;
