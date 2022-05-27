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
    themeSettings, setThemeSettings } = useSettingsContext();


  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);



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
                onClick={() => setThemeSettings(true)}
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
                  <Sidebar />
                </div>
              )
              : (
                <div className='w-0 dark:bg-secondary-dark-bg duration-300 ease'>
                  <Sidebar />
                </div>
              )
          }

          {/* 🟨🟨🟨 UI For ==> Right Side Section | toggling ==> margin-left:18rem */}
          <div className={`w-full min-h-screen bg-main-bg dark:bg-main-dark-bg
                          ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>


            {/* 🟨🟨🟨 UI For ==> NavBar */}
            <div className="navbar fixed md:static w-full bg-main-bg dark:bg-main-dark-bg">
              <Navbar />
            </div>


            <div>
              { // 🟨🟨🟨 UI For ==> side panel of theme settings <Component />
                // display this <Component />, based on 'true' value
                themeSettings && <ThemeSettings />
              }

              {/* 🟨🟨🟨 Route's for ==> going to different-different Component's  */}
              <Routes>
                {/* 🟩🟩🟩 For ==> Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* 🟩🟩🟩 For ==> Page's */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* 🟩🟩🟩 For ==> App's */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* 🟩🟩🟩 For ==> Charts */}
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
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