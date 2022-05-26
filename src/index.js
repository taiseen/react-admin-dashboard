import { SettingsContextProvider } from './context/SettingsContextProvider';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';


ReactDOM.render(

  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,

  document.getElementById('root')
);