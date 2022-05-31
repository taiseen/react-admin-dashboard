import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../components';


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Editor = ({ handleNavBarClose }) => (

  <div
    onClick={handleNavBarClose} // for auto navbar close
    className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"
  >

    <Header category="App" title="Editor" />

    <RichTextEditorComponent>

      <EditorData />

      {/* Helping for data/text manipulation options... */}
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />

    </RichTextEditorComponent>

  </div>
);

export default Editor;