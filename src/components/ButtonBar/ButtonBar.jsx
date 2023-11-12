import Button from "../Button/Button"
import "./ButtonBar.css"

const ButtonBar = ({setPlanner}) => {
    return <div className="botonera">
        <Button text={"Daily"} setPlanner={setPlanner}/>
        <Button text={"Weekly"} setPlanner={setPlanner}/>
        <Button text={"Monthly"} setPlanner={setPlanner}/>
        <Button text={"Yearly"} setPlanner={setPlanner}/>
    </div>
}

export default ButtonBar