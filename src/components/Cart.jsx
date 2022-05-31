import { useSettingsContext } from '../context/SettingsContextProvider';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { cartData } from '../data/dummy';
import { useState } from 'react';
import { Button } from '.';


// this <Component /> call from ==> 
// 🟨 ./Navbar.js 🟨 <Component />
const Cart = () => {

  const { currentColor } = useSettingsContext();

  const [quantity, setQuantity] = useState(0);

  const handelQuantity = (value) => {
    setQuantity(prev => (value === 'i' ? prev + 1 : prev - 1))
  }

  
  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">

      <div className="float-right p-8 md:w-400 h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white">

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button
            size="2xl"
            borderRadius="50%"
            bgHoverColor="light-gray"
            color="rgb(153, 171, 180)"
            icon={<MdOutlineCancel />}
          />
        </div>

        {
          cartData?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">

                  <img className="rounded-lg h-80 w-24" src={item.image} alt="" />

                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                      {item.category}
                    </p>

                    <div className="flex gap-4 mt-2 items-center">
                      <p className="font-semibold text-lg">{item.price}</p>
                      <div className="flex items-center border-1 dark:border-gray-400 border-color rounded">
                        <button
                          onClick={() => handelQuantity('d')}
                          disabled={quantity <= 0}
                          className={`p-2 text-red-600 ${quantity <= 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                          <AiOutlineMinus />
                        </button>

                        <p className="p-2 border-r-1 border-l-1 border-color dark:border-gray-400 text-green-600">{quantity}</p>

                        <button
                          onClick={() => handelQuantity('i')}
                          className="p-2 text-green-600 cursor-pointer">
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }


        <div className="mt-3 mb-3">

          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>

        </div>

        <div className="mt-5">
          <Button
            width="full"
            color="white"
            text="Place Order"
            borderRadius="10px"
            bgColor={currentColor}
          />
        </div>

      </div>
    </div>
  );
};

export default Cart;