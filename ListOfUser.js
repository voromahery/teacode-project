import React, { useContext } from 'react'
import Context from './GlobalContext'

export const ListOfUser =()=> {
    const {allData} = useContext(Context)
    
    return (
        <ul>
       {allData.map((item) =>      
       <li key={item.id}>
                <img src={item.avatar}/>
                <div>
                    <h3>{item.first_name} {item.last_name}</h3>
                    <span>{item.email}</span>
                </div>
            </li>
            )}
        </ul>
    )
}