import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useSettingsContext } from '../../context/SettingsContextProvider';


// this <Component /> call from ==> 
// 🟨 ../pages/Ecommerce.js 🟨 <Component />
// 🟨 ../pages/Charts/Line.js 🟨 <Component />
const LineChart = () => {

  const { currentMode } = useSettingsContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      tooltip={{ enable: true }}
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      legendSettings={{ background: 'white' }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

      <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
        }
      </SeriesCollectionDirective>

    </ChartComponent>
  );
};

export default LineChart;