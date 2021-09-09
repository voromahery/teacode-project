import React, { useContext, useEffect, useState } from 'react';
import Context from './GlobalContext';

export const Header = () => {
   const {inputValue, setInputValue, allData, setAllData} = useContext(Context)
const filterNames = (e) => {
    setInputValue(e.target.value)
   const filterData = [...allData].filter((user) => user.first_name.includes(e.target.value) || user.last_name.includes(e.target.value))
   setAllData(filterData)
}

return (
    <div>
    <header style={{backgroundColor: 'blue', textAlign: 'center'}}>
        <h2 style={{color: 'white', margin: '0',padding: '16px'}}>Contact</h2>
    </header>
        <input style={{padding: "16px", width: '-webkit-fill-available'}} type="text" value={inputValue} onChange={filterNames} name='filter-user'/>
    </div>
)
} 