import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGridColumnsHeader } from '../data/dummy';
import { Header } from '../components';


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Customers = ({ handleNavBarClose }) => {

  const toolbarOptions = ['Delete'];
  const selectionSettings = { persistSelection: true };
  const editing = { allowDeleting: true, allowEditing: true };


  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"
      onClick={handleNavBarClose}  // fro navbar menus auto close
    >

      <Header category="Page" title="Customers" />

      <GridComponent
        allowPaging
        allowSorting
        enableHover={false}
        editSettings={editing}
        toolbar={toolbarOptions}
        dataSource={customersData}
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionSettings}
      >
        <ColumnsDirective>
          {
            customersGridColumnsHeader.map((columnHeader, index) => (
              <ColumnDirective key={index} {...columnHeader} />
            ))
          }
        </ColumnsDirective>

        {/* Help to move at next pages...  */}
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />

      </GridComponent>
    </div>
  );
};

export default Customers;