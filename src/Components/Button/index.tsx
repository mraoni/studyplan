import React from "react";
import style from './Button.module.scss';

class Button extends React.Component<{texto : string}>{
    render() {
        return(
            <button className={style.buttonTask}>    
                <h3>{this.props.texto}</h3>                         
            </button>
        )       
    }    
}

export default Button

