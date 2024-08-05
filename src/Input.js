import React from 'react'
import colorNames from 'colornames';

const Input = ({colorValue, setColorValue, setHexValue, setIsDarkText, isDarkText}) => {
  return (
   <form onSubmit={(e) => e.preventDefault()} >
        <label> Add Color </label>
            <input 
                type="text"
                autoFocus
                id= "Add Color"
                placeholder='Please enter a color'
                value={colorValue}
                onChange={ (e)=> {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value))
                    }   
                    }
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
   </form>
  )
}

export default Input
