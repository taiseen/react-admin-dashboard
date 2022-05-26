import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';


// this <Component /> call from ==> 🟨 App.js 🟨 React <Router /> Dom
const Orders = () => {

  const editing = { allowDeleting: true, allowEditing: true };

  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">

      <Header category="Page" title="Orders" />

      <GridComponent
        id="gridcomp"
        allowPaging
        allowSorting
        allowPdfExport
        allowExcelExport 
        editSettings={editing}
        dataSource={ordersData}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {
            ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)
          }
        </ColumnsDirective>

        {/* Help to move in 2nd pages...  */}
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />

      </GridComponent>

    </div>
  );
};

export default Orders;