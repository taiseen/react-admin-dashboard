import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';
import { useSettingsContext } from '../../context/SettingsContextProvider';;
import { ChartsHeader } from '../../components';
import { PyramidData } from '../../data/dummy';


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Pyramid = ({ handleNavBarClose }) => {

  const { currentMode } = useSettingsContext();


  return (
    <div
      onClick={handleNavBarClose} // for auto navbar close
      className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
    >

      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />

      <div className="w-full">

        <AccumulationChartComponent
          id="pyramid-chart"
          tooltip={{ enable: true }}
          legendSettings={{ background: 'white' }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >

          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />

          <AccumulationSeriesCollectionDirective>

            <AccumulationSeriesDirective
              explode
              xName="x"
              yName="y"
              name="Food"
              width="45%"
              height="80%"
              type="Pyramid"
              neckWidth="15%"
              gapRatio={0.03}
              dataSource={PyramidData}
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            />

          </AccumulationSeriesCollectionDirective>

        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;