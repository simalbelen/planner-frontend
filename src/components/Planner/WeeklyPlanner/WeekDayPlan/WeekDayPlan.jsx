import "./WeekDayPlan.css"
const WeekDayPlan = ({weekDay}) => {
    return <div className="base">
        <span className="weekDayName">{weekDay}</span>
        <span className="dayNumber">1</span>
    </div>
}

export default WeekDayPlan