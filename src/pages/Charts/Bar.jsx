import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useSettingsContext } from '../../context/SettingsContextProvider';
import { ChartsHeader } from '../../components';


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Bar = ({ handleNavBarClose }) => {

  const { currentMode } = useSettingsContext();


  return (
    <div
      onClick={handleNavBarClose} // for auto navbar close
      className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
    >

      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />

      <div className=" w-full">

        <ChartComponent
          id="charts"
          tooltip={{ enable: true }}
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ background: 'white' }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />

          <SeriesCollectionDirective>
            {
              barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
            }
          </SeriesCollectionDirective>

        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;