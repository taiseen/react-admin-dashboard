import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useSettingsContext } from '../../context/SettingsContextProvider';


// this <Component /> call from ==> 
// 🟨 ../pages/Ecommerce.js 🟨 <Component />
// 🟨 ../pages/Charts/Stacked.js 🟨 <Component />
const Stacked = ({ width, height }) => {

    const { currentMode } = useSettingsContext();

    return (
        <ChartComponent
            id="charts"
            width={width}
            height={height}
            tooltip={{ enable: true }}
            primaryXAxis={stackedPrimaryXAxis} 
            primaryYAxis={stackedPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            legendSettings={{ background: 'white' }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />

            <SeriesCollectionDirective>
                {
                    stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)
                }
            </SeriesCollectionDirective>

        </ChartComponent>
    );
};

export default Stacked;