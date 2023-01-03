import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./style.scss";
import { FilterMatchMode } from 'primereact/api';
import { ColumnGroup } from 'primereact/columngroup';



const TableGrid = (props) => {
  let {
    tableData,
    tableTopHeader,
    columnHeaders,
    // selectedRows = () => {},
    selection = false,
    stripedRows = false,
    paginator = false,
    dataKey,
  } = props;
  // const [selectedProducts, setSelectedProducts] = useState(null);
  const dt = useRef(null);
  const [filters, setFilters] = useState();

  useEffect(() => {
    setFilters({
      src_Id: { value: null, matchMode: FilterMatchMode.IN },
      source_Id: { value: null, matchMode: FilterMatchMode.IN },
      sitename: { value: null, matchMode: FilterMatchMode.IN },
    });
  }, []);

  // useEffect(() => {
  //   selectedRows(selectedProducts);
  // }, [selectedProducts, selectedRows]);

  const getColumns = (_columnHeaders = []) => {
    let columns = [];
    _columnHeaders.forEach((header) => {
      if (header.selectionMode) {
        columns.push(
          <Column
            key={header.field}
            selectionMode={header.selectionMode}
            style={header.style}
          />
        );
      } else if (header.component) {
        columns.push(
          <Column
            key={header.field}
            body={header.component}
            header={header.headerName}
            style={header.style}
            showFilterMatchModes={false}
            sortable={header.sortable}
            filter={header.filter || false}
            filterElement={(options) => header.filterTemplate(options)}
          ></Column>
        );
      } else {
        columns.push(
          <Column
            key={header.field}
            field={header.field}
            header={header.headerName}
            sortable={header.sortable}
            style={header.style}
            showFilterMatchModes={false}
            filter={header.filter || false}
            filterElement={(options) => header.filterTemplate(options)}
          />
        );
      }
    });
    return columns;
  };
  let headerGroup = (
    <ColumnGroup>
      {tableTopHeader}

      <>{getColumns(columnHeaders)}</>
    </ColumnGroup>
  );

  return (
    <div className="datatable" data-testid="table-test">
      {selection ? (
        <DataTable
          ref={dt}
          headerColumnGroup={headerGroup}
          resizableColumns
          columnResizeMode="expand"
          value={tableData}
          selectionMode="checkbox"
          stripedRows={stripedRows}
          // selection={selectedProducts}
          showGridlines
          // onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey={dataKey}
          paginator={paginator}
          rows={15}
          rowsPerPageOptions={[5, 10, 25]}
          responsiveLayout="scroll"
          filters={filters}
          filterDisplay="menu"
          rowClassName={(rowdata) => `row-class-${rowdata.id}`}
        >
          {getColumns(columnHeaders)}
        </DataTable>
      ) : (
        <DataTable
          ref={dt}
          value={tableData}
          resizableColumns
          columnResizeMode="fit"
          stripedRows={stripedRows}
          showGridlines
          dataKey={dataKey}
          rows={15}
          responsiveLayout="scroll"
          {...props}
        >
          {getColumns(columnHeaders)}
        </DataTable>
      )}
    </div>
  );
};
export default TableGrid;
