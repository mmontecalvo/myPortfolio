import React from 'react'

function BurgerMenu({setMenu}) {
  return (
        <label className="bar" onChange={setMenu}>
            <input id="check" type="checkbox"/>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
        </label>
    )
}

export default BurgerMenu
