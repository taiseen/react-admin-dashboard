import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useSettingsContext } from '../../context/SettingsContextProvider';
import { ChartsHeader } from '../../components';


const date1 = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Financial = () => {

  const { currentMode } = useSettingsContext();


  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

      <ChartsHeader category="Financial" title="AAPLE Historical" />

      <div className="w-full">
        
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
        >

          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />

          <SeriesCollectionDirective>

            <SeriesDirective
              low="low"
              xName="x"
              yName="low"
              high="high"
              type="Hilo"
              name="Apple Inc"
              dataSource={returnValue}
            />

          </SeriesCollectionDirective>

        </ChartComponent>

      </div>
    </div>
  );
};

export default Financial;