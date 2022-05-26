import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { useSettingsContext } from '../context/SettingsContextProvider';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import product9 from '../data/product9.jpg';


const Ecommerce = () => {

  useSettingsContext();

  return (
    <div className='mt-12'>

      <div className="flex flex-wrap lg:flex-nowrap justify-center">

        {/* 🟨🟨🟨 UI For ==> hero banner */}
        <div className="w-full h-44 p-8 pt-9 m-3 rounded-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-hero-pattern bg-no-repeat bg-cover bg-center"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-gray-400'>Earning</p>
              <p className='text-xl'>$65,455.95</p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              size='md'
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
            />
          </div>
        </div>


        <div className='m-3 flex flex-wrap justify-center items-center gap-1'>
          { // 🟨🟨🟨 UI For ==> sales matrix box
            earningData.map(item => (
              <div
                key={item.title}
                className="p-4 pt-9 rounded-xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56"
              >
                <button
                  type='button'
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                >
                  {item.icon}
                </button>

                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={` ml-2 text-sm text-${item.pcColor}`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400  mt-1">{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>


      <div className="flex flex-wrap justify-center gap-10">

        <div className="m-3 p-4 rounded-2xl md:w-780 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg">

          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Update</p>
            <div className="flex items-center gap-4">
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expanse</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Ecommerce