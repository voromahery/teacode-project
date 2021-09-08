import React, { useState, useEffect, createContext } from "react";
const Context = createContext(null);


export const GlobalContext = ({children}) => {
const endpoint=`https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`
const [allData, setAllData] = useState([])
const [inputValue, setInputValue] = useState('')
const copyOfData = [...allData]
const fetchData = async()=> {
const response = await fetch(endpoint);
const data = await response.json()
setAllData(data)
}

useEffect(()=> {
fetchData()
}, [])

return (
<Context.Provider value={{allData, setAllData, inputValue, setInputValue}}>
{children}
</Context.Provider>
)
}

export default Context