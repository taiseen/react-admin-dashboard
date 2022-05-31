import { useSettingsContext } from '../context/SettingsContextProvider';
import { MdOutlineCancel } from 'react-icons/md';
import { userProfileData } from '../data/dummy';
import { Button } from '.';
import avatar from '../data/avatar.jpg';


// this <Component /> call from ==> 
// 🟨 ./Navbar.js 🟨 <Component />
const UserProfile = () => {

  const { currentColor } = useSettingsContext();

  return (
    <div className="nav-item absolute right-1 top-16 p-8 rounded-lg w-96 bg-white dark:bg-[#42464D]">

      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          size="2xl"
          borderRadius="50%"
          bgHoverColor="light-gray"
          color="rgb(153, 171, 180)"
          icon={<MdOutlineCancel />}
        />
      </div>

      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          src={avatar}
          alt="user-profile"
          className="rounded-full h-24 w-24"
        />

        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> Jon Roberts </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
        </div>
      </div>

      <div>
        {
          userProfileData.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
            >
              <button
                type="button"
                className=" text-xl rounded-lg p-3 hover:bg-light-gray"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>

              <div>
                <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
              </div>
            </div>
          ))
        }
      </div>

      <div className="mt-5">
        <Button
          width="full"
          text="Logout"
          color="white"
          borderRadius="10px"
          bgColor={currentColor}
        />
      </div>

    </div>

  );
};

export default UserProfile;