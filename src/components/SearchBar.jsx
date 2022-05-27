import { useSettingsContext } from '../context/SettingsContextProvider';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { MdOutlineCancel } from 'react-icons/md';
import Button from './Button';


// this <Component /> call from ==> 
// 🟨 ./Navbar.js 🟨 <Component />
const SearchBar = () => {

    const { currentColor } = useSettingsContext();

    return (
        <div className="bg-half-transparent w-full h-screen fixed nav-item top-0 left-0">
            <div className="w-full bg-white dark:bg-[#484B52] p-5">

                <div className="flex justify-between items-center gap-5">

                    <TextBoxComponent placeholder="Search" cssClass="e-outline" floatLabelType="Auto" />

                    <Button
                        size="2xl"
                        borderRadius="50%"
                        bgHoverColor="light-gray"
                        color={currentColor}
                        icon={<MdOutlineCancel />}
                    />
                </div>

            </div>
        </div>
    );
}

export default SearchBar;