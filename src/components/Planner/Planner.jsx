import DailyPlanner from './DailyPlanner/DailyPlanner'
import WeeklyPlanner from './WeeklyPlanner/WeeklyPlanner'
import MonthlyPlanner from './MonthlyPlanner/MonthlyPlanner'
import YearlyPlanner from './YearlyPlanner/YearlyPlanner'

const Planner = ({ planner }) => {
    const getPlanner = (planner) => {
        if (planner === 0) {
            return <DailyPlanner />
        } else if (planner === 1) {
            return <WeeklyPlanner />
        } else if (planner === 2) {
            return <MonthlyPlanner />
        } else if (planner === 3) {
            return <YearlyPlanner />
        }
        return <></>
    }
    return <>{getPlanner(planner)}</>
}

export default Planner
