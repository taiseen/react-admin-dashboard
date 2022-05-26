import { useSettingsContext } from '../context/SettingsContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { links } from '../data/dummy';


// this <Component /> call from ==> 🟨 ../../App.js 🟨 <Component />
const Sidebar = () => {

  const { activeMenu, setActiveMenu, screenSize } = useSettingsContext();

  const activeLink = 'group flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 text-gray-700 bg-light-gray'
  const normalLink = 'group flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 text-gray-700 hover:bg-light-gray dark:text-gray-200 dark:hover:text-black'

  const handleCloseSidebar = () => {
    // if you are on mobile device,
    // SideBar menu auto close, after click on a specific link...
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  return (
    <div className='ml-3 pb-10 h-screen overflow-auto
                    md:overflow-hidden 
                    md:hover:overflow-auto'
    >
      {
        activeMenu && (
          <>

            {/* 🟨🟨🟨 UI for ==> App Logo + Close Icon */}
            <div className="flex justify-between items-center">

              <Link
                to='/'
                onClick={handleCloseSidebar}
                className='w-full flex items-center gap-3 ml-3 mt-4 text-2xl font-extrabold tracking-tight dark:text-white text-slate-900 hover:text-red-400 duration-300 '
              >
                <SiShopware className='' /> <span>Shop</span>
              </Link>

              <TooltipComponent content='Menu Close' position='BottomCenter'>
                <button type='button' onClick={() => setActiveMenu(prev => !prev)}
                  className='text-xl rounded-full p-3 mt-4 block md:hidden hover:bg-light-gray hover:text-red-400'>
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>

            </div>


            {/* 🟨🟨🟨 UI for ==> SideBar Menu + Component's Link */}
            <div className="mt-10">
              {
                // 🟡🟡🟡 Parent Loop
                links.map(item => (
                  <div key={item.title}>

                    <p className="m-3 mt-4 uppercase text-gray-400" >
                      {item.title}
                    </p>

                    { // 🟡🟡🟡 Child Loop | Nested Loop
                      item.links.map(link => (
                        <NavLink
                          key={link.name}
                          to={`/${link.name}`}
                          onClick={handleCloseSidebar}
                          className={({ isActive }) => isActive ? activeLink : normalLink}
                        >
                          <span className='group-hover:text-red-500'>{link.icon}</span>
                          <span className='capitalize'>
                            {link.name}
                          </span>
                        </NavLink>
                      ))
                    }
                  </div>
                ))
              }
            </div>

          </>
        )
      }
    </div>
  )
}

export default Sidebar