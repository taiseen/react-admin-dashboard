import { useSettingsContext } from '../context/SettingsContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Cart, Chat, Notification, UserProfile } from '.';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { useEffect } from 'react';
import avatar from '../data/avatar.jpg';


// NavBar child <Component />, use for custom button's...
const NavButton = ({ title, customFun, icon, color, dotColor }) => (

  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      style={{ color }}
      onClick={customFun}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
)


// this <Component /> call from ==> 
// 🟨 ../../App.js 🟨 <Component />
const Navbar = () => {

  const { setActiveMenu, currentColor, handleClick, isClicked, screenSize, setScreenSize } = useSettingsContext();

  // this useEffect is responsible only for ==> 
  // set browser window width size 
  useEffect(() => {
    // figure out or set user screen size initially... 
    const handleResize = () => setScreenSize(window.innerWidth);

    // track all of the resize options
    window.addEventListener('resize', handleResize);

    // figure out initial width...
    handleResize();

    // after finishing work, remove event listener...
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // this useEffect is responsible only for ==> 
  // toggling menu base on browser window width size
  useEffect(() => {
    if (screenSize <= 900) {
      // SideBar menu hide
      setActiveMenu(false);
    } else {
      // SideBar menu show
      setActiveMenu(true);
    }
  }, [screenSize]);


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>

      <NavButton
        title='Menu'
        color={currentColor}
        icon={<AiOutlineMenu />}
        customFun={() => setActiveMenu(prev => !prev)}
      />

      <div className="flex">

        <NavButton
          title="Cart"
          color={currentColor}
          icon={<FiShoppingCart />}
          customFun={() => handleClick('cart')}
        />

        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          color={currentColor}
          icon={<BsChatLeft />}
          customFun={() => handleClick('chat')}
        />

        <NavButton
          title="Notification"
          color={currentColor}
          dotColor="rgb(255, 50, 15)"
          icon={<RiNotification3Line />}
          customFun={() => handleClick('notification')}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            onClick={() => handleClick('userProfile')}
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          >
            <img
              src={avatar}
              alt="user-profile"
              className="rounded-full w-8 h-8"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Jon
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>


        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div >
  );
}

export default Navbar;