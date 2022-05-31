import { ChartsHeader, LineChart } from '../../components';


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Line = ({ handleNavBarClose }) => (

  <div
    onClick={handleNavBarClose} // for auto navbar close
    className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
  >

    <ChartsHeader category="Line" title="Inflation Rate" />

    <div className="w-full">
      <LineChart />
    </div>

  </div>
);

export default Line;