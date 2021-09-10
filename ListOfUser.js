import React, { useContext, useState } from 'react'
import Context from './GlobalContext'

export const ListOfUser =()=> {
    const {allData} = useContext(Context)
    let isClicked = []

    const clickUser = (id) => {
          const clicked = allData.find(
            (user)=> user.id === id
          );
  
        if (isClicked.some(item => item === id)) {
            const filterId = isClicked.filter(item => item !== id)
            console.log([...filterId],isClicked.some(item => item === id))
          } else {
            isClicked.push(clicked.id)
            console.log(isClicked)
          }
    }

    return (
       <ul style={{listStyle: 'none', border: 'solid 0.5px #00000', padding: '0'}}>
       {allData.sort((a, b) => a.last_name.localeCompare(b.last_name)).map((item) =>  
       <li key={item.id}>    
       <label htmlFor={item.id} style={{display: "flex", alignItems: 'center',width: '100%', paddingLeft: '0', borderBottom: '0.25px solid #000000', borderTop: '0.25px solid #000000'}} key={item.id}>
                <img src={item.avatar}/>
                <div>
                    <h3>{item.first_name} {item.last_name}</h3>
                    <span style={{overflowWrap: "anywhere"}}>{item.email}</span>
                </div>
                <input type='checkbox' style={{display: 'none'}} onChange={() => clickUser(item.id)} id={item.id}/>
            </label>
            </li>
            )}
        </ul>
    )
}