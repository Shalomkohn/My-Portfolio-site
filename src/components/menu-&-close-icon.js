import { useState, useEffect } from 'react'

const MenuAndCloseIcon = (props) => {
    const [menuHeight, setMenuHeight] = useState(37)
    const [closeHeight, setCloseHeight] = useState(0)

    useEffect(()=>{
        
    },[props.isMenuIcon])

    const onClick = () => {
        if(props.isMenuIcon){
            setCloseHeight(37)
            setMenuHeight(0)
        }else if(!props.isMenuIcon){
            setCloseHeight(0)
            setMenuHeight(37)
        }
        setTimeout(()=>{
            props.onClick();
        },70)
       
    }

    return(
        <div className="menuAndCloseIcon">
            {props.isMenuIcon ? <li style={{height: menuHeight, overflow: 'hidden'}} onClick={onClick}><svg  xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg></li> :
            <li style={{height: closeHeight , overflow: 'hidden'}}  onClick={onClick}><svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></li>}
        </div>
    )
}

export default MenuAndCloseIcon