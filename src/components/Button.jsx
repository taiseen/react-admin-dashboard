import { useSettingsContext } from '../context/SettingsContextProvider';


// this <Component /> call from ==> 
// 1) 🟨 ./Cart.js 🟨 <Component />
// 2) 🟨 ./Chat.js 🟨 <Component />
// 3) 🟨 ./UserProfile.js 🟨 <Component />
// 4) 🟨 ./Notification.js 🟨 <Component />
// 5) 🟨 ../pages/Ecommerce.js 🟨 <Component />

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {

  const { setIsClicked, initialState } = useSettingsContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}

    </button>
  );
};

export default Button;