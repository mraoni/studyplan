import Button from "../Components/Button";
import style from "./Cronometer.module.scss"
import Watch from "./Watch"

export default function Cronometer() {
    return (
        <div className={style.cronometer}>
            <h3 className={style.Title}>Choose you card and start the cronometer!</h3>
            <div className={style.watchWrapper}>
                <Watch></Watch>
            </div>
            <Button texto="Start!" />
        </div>        
    )
}