import $ from "jquery";
import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
// import autoHeight from './autoHeight';

let data;
$.ajax({
  url: "https://alifd.alibabausercontent.com/materials/@bizcharts/point-jitter/0.2.9/mock.json",
  async : false,
  success: (iData) => { data = iData }
});

class PlotChart extends React.Component {
  render() {
    return (
      <div>
        <Chart data={data} forceFit>
          <Tooltip
            crosshairs={{
              type: "cross"
            }}
          />
          <Axis name="Score" grid={null} />
          <Axis
            name="Class"
            tickLine={null}
            subTickCount={1}
            subTickLine={{
              lineWidth: 1,
              stroke: "#BFBFBF",
              length: 4
            }}
            grid={{
              align: "center",
              // 网格顶点从两个刻度中间开始
              lineStyle: {
                stroke: "#E9E9E9",
                lineWidth: 1,
                lineDash: [3, 3]
              }
            }}
          />
          <Legend reversed />
          <Geom
            type="point"
            position="Class*Score"
            color="Grade"
            opacity={0.65}
            shape="circle"
            size={4}
            adjust="jitter"
          />
        </Chart>
      </div>
    );
  }
}

export default PlotChart;