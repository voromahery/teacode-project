import React, { useContext, useEffect, useState } from 'react';
import Context from './GlobalContext';

export const Header = () => {
   const {inputValue, setInputValue, allData, setAllData, fetchData} = useContext(Context)
const filterNames = (e) => {
    setInputValue(e.target.value)
   if(inputValue.length !== 0){
    const filterData = [...allData].filter((user) => user.first_name.includes(e.target.value) || user.last_name.includes(e.target.value))
    setAllData(filterData)
   } else {
       fetchData()
   }
}

return (
    <div>
    <header style={{backgroundColor: '#16b2b9', textAlign: 'center'}}>
        <h2 style={{color: 'white', margin: '0',padding: '16px'}}>Contact</h2>
    </header>
        <input style={{padding: "16px", width: '-webkit-fill-available'}} type="text" value={inputValue} onChange={filterNames} name='filter-user'/>
    </div>
)
} 