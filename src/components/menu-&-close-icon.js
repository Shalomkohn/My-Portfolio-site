

const MenuAndCloseIcon = (props) => {
    return(
        <div className="menuAndCloseIcon">
            {props.icon ? <li  onClick={props.onClick}><svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg></li> : <li  onClick={props.onClick}><svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></li>}
        </div>
    )
}

export default MenuAndCloseIcon