import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { useSettingsContext } from './context/SettingsContextProvider';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { useEffect } from 'react';
import './styles/App.css';



const App = () => {

  const { activeMenu,
    currentMode, setCurrentMode,
    currentColor, setCurrentColor,
    themeSettings, setThemeSettings,
    setIsClicked, initialState } = useSettingsContext();


  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);


  const handleClick = () => {
    setThemeSettings(true);
    setIsClicked(initialState);
  }

  const handleNavBarClose = () => {
    setIsClicked(initialState);
  }

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>

      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">

          {/* 🟨🟨🟨 UI For ==> bottom settings ⚙ icon */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content='Settings'
              position='Center'
            >
              <button
                type='button'
                onClick={handleClick}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="p-3 text-3xl hover:drop-shadow-xl hover:bg-light-gray text-white"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>


          { // 🟨🟨🟨 UI For ==> SideBar | on/off | SideBar toggling
            activeMenu
              ? (
                <div className='sidebar w-72 fixed dark:bg-secondary-dark-bg bg-white duration-300 ease'>
                  <Sidebar handleNavBarClose={handleNavBarClose} />
                </div>
              )
              : (
                <div className='w-0 dark:bg-secondary-dark-bg duration-300 ease'>
                  <Sidebar handleNavBarClose={handleNavBarClose} />
                </div>
              )
          }

          {/* 🟨🟨🟨 UI For ==> Right Side Section | toggling ==> margin-left:18rem */}
          <div className={`w-full min-h-screen bg-gray-200 dark:bg-main-dark-bg
                          ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>


            {/* 🟨🟨🟨 UI For ==> NavBar */}
            <div className="navbar fixed md:static top-0 w-full bg-gray-200 dark:bg-main-dark-bg">
              <Navbar />
            </div>


            <div>
              { // 🟨🟨🟨 UI For ==> side panel of theme settings <Component />
                // display this <Component />, based on 'true' value
                themeSettings && <ThemeSettings handleNavBarClose={handleNavBarClose} />
              }

              {/* 🟨🟨🟨 Route's for ==> going to different-different Component's  */}
              <Routes>
                {/* 🟩🟩🟩 For ==> Dashboard */}
                <Route path="/" element={<Ecommerce handleNavBarClose={handleNavBarClose} />} />
                <Route path="/ecommerce" element={<Ecommerce handleNavBarClose={handleNavBarClose} />} />

                {/* 🟩🟩🟩 For ==> Page's */}
                <Route path="/orders" element={<Orders handleNavBarClose={handleNavBarClose} />} />
                <Route path="/employees" element={<Employees handleNavBarClose={handleNavBarClose} />} />
                <Route path="/customers" element={<Customers handleNavBarClose={handleNavBarClose} />} />

                {/* 🟩🟩🟩 For ==> App's */}
                <Route path="/kanban" element={<Kanban handleNavBarClose={handleNavBarClose} />} />
                <Route path="/editor" element={<Editor handleNavBarClose={handleNavBarClose} />} />
                <Route path="/calendar" element={<Calendar handleNavBarClose={handleNavBarClose} />} />
                <Route path="/color-picker" element={<ColorPicker handleNavBarClose={handleNavBarClose} />} />

                {/* 🟩🟩🟩 For ==> Charts */}
                <Route path="/bar" element={<Bar handleNavBarClose={handleNavBarClose} />} />
                <Route path="/pie" element={<Pie handleNavBarClose={handleNavBarClose} />} />
                <Route path="/line" element={<Line handleNavBarClose={handleNavBarClose} />} />
                <Route path="/area" element={<Area handleNavBarClose={handleNavBarClose} />} />
                <Route path="/pyramid" element={<Pyramid handleNavBarClose={handleNavBarClose} />} />
                <Route path="/stacked" element={<Stacked handleNavBarClose={handleNavBarClose} />} />
                <Route path="/financial" element={<Financial handleNavBarClose={handleNavBarClose} />} />
                <Route path="/color-mapping" element={<ColorMapping handleNavBarClose={handleNavBarClose} />} />
              </Routes>
            </div>

            <Footer />
          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;