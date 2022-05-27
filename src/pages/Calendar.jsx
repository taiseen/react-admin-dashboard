import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';
import { useState } from 'react';


const PropertyPane = ({ children }) => <div className="mt-5">{children}</div>;


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Calendar = () => {

  const [scheduleObj, setScheduleObj] = useState();

  const onDragStart = (arg) => arg.navigation.enable = true;

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <Header category="App" title="Calendar" />

      {/* 🟨🟨🟨 UI For ==> Calender + Date/Time picker for set event reminder...*/}
      <ScheduleComponent
        height="650px"
        dragStart={onDragStart}
        selectedDate={new Date(2022, 5, 10)}
        ref={schedule => setScheduleObj(schedule)}
        eventSettings={{ dataSource: scheduleData }}
      >
        <ViewsDirective>
          {
            ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda']
              .map(item => <ViewDirective key={item} option={item} />)
          }
        </ViewsDirective>

        {/* Help to move at next pages...  */}
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />

      </ScheduleComponent>


      <PropertyPane>
        <table style={{ width: '100%', background: 'white' }}>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>

                <DatePickerComponent
                  value={new Date(2021, 0, 10)}
                  showClearButton={false}
                  placeholder="Current Date"
                  floatLabelType="Always"
                  change={change}
                />

              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>

    </div>
  )
}

export default Calendar
