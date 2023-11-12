const Button = ({text, setPlanner}) => {
    const changePlanner = () => {
        if (text === "Daily"){
            setPlanner(0)
        } else if (text === "Weekly"){
            setPlanner(1)
        } else if (text === "Monthly"){
            setPlanner(2)
        } else if (text === "Yearly"){
            setPlanner(3)
        }
    }
    return <button type="button" className="btn btn-primary" onClick={changePlanner}>{text}</button>
}

export default Button