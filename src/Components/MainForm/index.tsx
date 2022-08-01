import React from "react";
import Button from "../Button";

class MainForm extends React.Component{
    render() {
        return(
            <form>
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo:                     
                    </label>                    
                    <input id="tarefa" 
                            type="text" 
                            name="tarefa" 
                            placeholder="O que você quer estudar" 
                            required  />        
                </div>
                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input  type="time"
                            step="1"
                            name="tempo"
                            id="tempo"
                            min="00:00:00"
                            max="01:30:00"
                            required />        
                </div>
                <Button></Button>
            </form>
        )       
    }    
}

export default MainForm