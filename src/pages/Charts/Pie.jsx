import { ChartsHeader, Pie as PieChart } from '../../components';
import { pieChartData } from '../../data/dummy';


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Pie = ({ handleNavBarClose }) => (

  <div
    onClick={handleNavBarClose} // for auto navbar close
    className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
  >

    <ChartsHeader category="Pie" title="Project Cost Breakdown" />

    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>

  </div>
);

export default Pie;