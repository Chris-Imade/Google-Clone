import React, { useState, useEffect } from 'react'
// import API_KEY from './key'


const CONTEXT_KEY = "7ba40c3617d08dd26";
const API_KEY = "AIzaSyDJNbT38eeg2qJlSe-WRLS2_jzfQyJytKQ";



export const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            ).then( response => response.json())
            .then( results => {
                setData(results);
            })
        }
        fetchData();
    }, [term])
    return { data } 
}
export default useGoogleSearch
