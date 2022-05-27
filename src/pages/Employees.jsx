import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGridColumnsHeader } from '../data/dummy';
import { Header } from '../components';


// this <Component /> call from ==> 
// 🟨 App.js 🟨 React <Router /> Dom
const Employees = () => {

  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <Header category="Page" title="Employees" />

      <GridComponent
        width="auto"
        allowPaging
        allowSorting
        editSettings={editing}
        toolbar={toolbarOptions}
        dataSource={employeesData}
        pageSettings={{ pageCount: 5 }}
      >
        <ColumnsDirective>
          {
            employeesGridColumnsHeader.map((columnHeader, index) => (
              <ColumnDirective key={index} {...columnHeader} />
            ))
          }
        </ColumnsDirective>

        {/* Help to move at next pages...  */}
        <Inject services={[Search, Page, Toolbar]} />

      </GridComponent>
    </div>
  );
};

export default Employees;
