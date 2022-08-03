import React from "react";
import Button from "../Button";
import style from './MainForm.module.scss'

class MainForm extends React.Component{
    render() {
        return(
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new study:                     
                    </label>                    
                    <input id="task" 
                            type="text" 
                            name="task" 
                            placeholder="What you like study?" 
                            required  />        
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Time
                    </label>
                    <input  type="time"
                            step="1"
                            name="time"
                            id="time"
                            min="00:00:00"
                            max="01:30:00"
                            required />        
                </div>
                <Button texto="Add" />   
            </form>
        )       
    }    
}

export default MainForm