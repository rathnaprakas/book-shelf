import { createContext, useState } from "react";

let ThemeContext=createContext({value:'light'})

export let ThemeContextProvider=(props)=>{
    let [theme,setTheme]=useState('light')
    let changeTheme=()=>{
        theme==='light'?setTheme('dark'):setTheme('light')
    }
    let context={value:theme,changeMode:changeTheme}
    return <ThemeContext.Provider value={context}>
        {props.children}
    </ThemeContext.Provider>
}
export default ThemeContext;