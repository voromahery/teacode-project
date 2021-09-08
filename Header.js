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
    <>
    <header>
        <h2>Contact</h2>
    </header>
        <input type="text" value={inputValue} onChange={filterNames} name='filter-user'/>
    </>
)
} 