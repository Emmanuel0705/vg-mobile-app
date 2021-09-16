import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height / 2.9;

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const data = [
  {
    name: '% Pre-Booked',
    percentage: 2050 / 100,
    color: '#2EC6AF',
    legendFontColor: '#000',
    legendFontSize: 15,
  },
  {
    name: '% Scheduled',
    percentage: 2000 / 100,
    color: 'rgba(242,160,108, 4)',
    legendFontColor: '#000',
    legendFontSize: 15,
  },
  {
    name: '% Completed',
    percentage: 2550 / 100,
    color: '#2397B8',
    legendFontColor: '#000',
    legendFontSize: 15,
  },
  {
    name: '% In-Transit',
    percentage: 2500 / 100,
    color: '#FA34A8',
    legendFontColor: '#000',
    legendFontSize: 15,
  },
  {
    name: '% Pending',
    percentage: 1000 / 100,
    color: 'rgba(114, 68, 182, .7)',
    legendFontColor: '#000',
    legendFontSize: 15,
    legendFontFamily: 'Gotham-Book',
  },
];
const Piechart = () => (
  <PieChart
    data={data}
    width={screenWidth}
    height={screenHeight}
    chartConfig={chartConfig}
    accessor="percentage"
    backgroundColor="#EFF7FC"
    paddingLeft="15"
    absolute
  />
);

export default Piechart;
