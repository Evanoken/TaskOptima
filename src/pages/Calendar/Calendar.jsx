import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'
import './Calendar.css'
import Navbar from '../../components/navBar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

function Calendar() {
    return (
        <div>
            <Navbar />
            <Sidebar />
        <div className='Calendar'>
        
            <ScheduleComponent currentView='Month' >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} ></Inject>
            </ScheduleComponent>
      
        </div>
        </div>
    )
}

export default Calendar;