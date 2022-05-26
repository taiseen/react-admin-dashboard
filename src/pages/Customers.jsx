import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';


// this <Component /> call from ==> 🟨 App.js 🟨 React <Router /> Dom
const Customers = () => {

  const toolbarOptions = ['Delete'];
  const selectionSettings = { persistSelection: true };
  const editing = { allowDeleting: true, allowEditing: true };


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

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
            customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)
          }
        </ColumnsDirective>

        {/* Help to move in 2nd pages...  */}
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />

      </GridComponent>
    </div>
  );
};

export default Customers;