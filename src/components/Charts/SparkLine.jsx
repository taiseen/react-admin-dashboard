import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import React from 'react';


// this <Component /> call from ==> 
// 🟨 ../pages/Ecommerce.js 🟨 <Component />
class SparkLine extends React.PureComponent {

  render() {

    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        xName="x"
        yName="yval"
        type={type}
        fill={color}
        width={width}
        lineWidth={1}
        height={height}
        dataSource={data}
        valueType="Numeric"
        border={{ color: currentColor, width: 2 }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        tooltipSettings={{
          visible: true,
           // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
      >

        <Inject services={[SparklineTooltip]} />

      </SparklineComponent>
    );
  }
}

export default SparkLine;