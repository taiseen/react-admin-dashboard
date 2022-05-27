import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { useSettingsContext } from '../../context/SettingsContextProvider';


// this <Component /> call from ==> 
// 🟨 ../pages/Ecommerce.js 🟨 <Component />
const Doughnut = ({ id, data, legendVisiblity, height }) => {

  const { currentMode } = useSettingsContext();

  return (

    <AccumulationChartComponent
      id={id}
      height={height}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ visible: legendVisiblity, background: 'white' }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />

      <AccumulationSeriesCollectionDirective>

        <AccumulationSeriesDirective
          explode
          xName="x"
          yName="y"
          name="Sale"
          radius="70%"
          endAngle={360}
          startAngle={0}
          explodeIndex={2}
          dataSource={data}
          innerRadius="40%"
          explodeOffset="10%"
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>

    </AccumulationChartComponent>
  );
};

export default Doughnut;