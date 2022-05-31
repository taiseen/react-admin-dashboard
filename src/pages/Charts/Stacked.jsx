import { ChartsHeader, Stacked as StackedChart } from '../../components';


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Stacked = ({ handleNavBarClose }) => (

  <div
    onClick={handleNavBarClose} // for auto navbar close
    className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
  >

    <ChartsHeader category="Stacked" title="Revenue Breakdown" />

    <div className="w-full">
      <StackedChart />
    </div>

  </div>
);

export default Stacked;