import './PlannerFiltersBar.css'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

const PlannerFiltersBar = ({ setPlanner }) => {
    const onSelect = (e) => {
        setPlanner(parseInt(e.target.value))
    }

    const handleWeekBack = () => {
        //Pulso la flecha hacia la izquierda en el selector de semanas
    }

    const handleWeekForward = () => {
         //Pulso la flecha hacia la derecha en el selector de semanas
    }
    return (
        <div className="planner-filters-bar">
            <div className="centered-div">
                <IoIosArrowBack className='arrow-icon' onClick={handleWeekBack}/>
                <span className='week-name'> 10/12/2023 - 16/12/2023  </span>
                <IoIosArrowForward className='arrow-icon' onClick={handleWeekForward}/>
            </div>
            <div className="right-div">
                <select className="type-selector" onChange={onSelect}>
                    <option value={0}>Daily</option>
                    <option value={1}>Weekly</option>
                    <option value={2}>Monthly</option>
                    <option value={3}>Yearly</option>
                </select>
            </div>
        </div>
    )
}

export default PlannerFiltersBar
