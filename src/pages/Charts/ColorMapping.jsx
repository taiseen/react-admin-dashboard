import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { useSettingsContext } from '../../context/SettingsContextProvider';
import { ChartsHeader } from '../../components';


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const ColorMapping = () => {

  const { currentMode } = useSettingsContext();

  
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">

      <ChartsHeader category="Color Mappping" title="USA CLIMATE - WEATHER BY MONTH" />

      <div className="w-full">

        <ChartComponent
          id="charts"
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          legendSettings={{ mode: 'Range', background: 'white' }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >

          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />

          <SeriesCollectionDirective>

            <SeriesDirective
              xName="x"
              yName="y"
              name="USA"
              type="Column"
              dataSource={colorMappingData[0]}
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />

          </SeriesCollectionDirective>

          <RangeColorSettingsDirective>
            {
              rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)
            }
          </RangeColorSettingsDirective>

        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;