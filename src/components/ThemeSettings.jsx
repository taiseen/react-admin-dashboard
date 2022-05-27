import { useSettingsContext } from '../context/SettingsContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';
import { themeColors } from '../data/dummy';
import { BsCheck } from 'react-icons/bs';



const ThemeSettings = () => {

  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useSettingsContext();


  return (
    <div className="fixed top-0 right-0 w-screen nav-item bg-half-transparent"
      onClick={() => setThemeSettings(false)}
    >

      <div className="float-right w-400 h-screen dark:text-gray-200 bg-white dark:bg-[#484B52]"
        onClick={e => e.stopPropagation()}
      >

        {/* 🟨🟨🟨 UI For ==> Settings Close Button */}
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>


        {/* 🟨🟨🟨 UI For ==> Radio Button's */}
        <div className="flex-col border-t-1 border-color p-4 ml-4" >
          <p className="font-semibold text-xl">Theme Option</p>

          <div className="mt-4">
            <input
              id="Light"
              type="radio"
              name=" "
              value="Light"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === 'Light'}
            />
            <label htmlFor="Light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>

          <div className="mt-2">
            <input
              id="Dark"
              name="theme"
              type="radio"
              value="Dark"
              onChange={setMode}
              className="cursor-pointer"
              checked={currentMode === 'Dark'}
            />
            <label htmlFor="Dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>


        <div className="p-4 border-t-1 border-color ml-4">

          <p className="font-semibold text-xl ">Theme Colors</p>

          <div className="flex gap-3">
            {
              themeColors.map((item, index) => (
                <TooltipComponent key={index} content={item.name} position="TopCenter">
                  <div
                    key={item.name}
                    className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  >
                    <button
                      type="button"
                      onClick={() => setColor(item.color)}
                      style={{ backgroundColor: item.color }}
                      className="h-10 w-10 rounded-full cursor-pointer"
                    >
                      <BsCheck
                        className={`ml-2 text-2xl text-white 
                        ${item.color === currentColor ? 'block' : 'hidden'}`}
                      />
                    </button>
                  </div>
                </TooltipComponent>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
