import React, { useState, useRef, useEffect } from "react";

//@prime react
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FilterMatchMode } from 'primereact/api';
import { ColumnGroup } from 'primereact/columngroup';

//@custom styles
import "./style.scss";

//@functional component
const TableGrid = (props) => {
  let {
    dataKey,
    tableData,
    columnHeaders,
    tableTopHeader,
    selection = false,
    paginator = false,
    stripedRows = false,
  } = props;

  const dt = useRef(null);
  const [filters, setFilters] = useState();

  useEffect(() => {
    setFilters({
      src_Id: { value: null, matchMode: FilterMatchMode.IN },
      source_Id: { value: null, matchMode: FilterMatchMode.IN },
      sitename: { value: null, matchMode: FilterMatchMode.IN },
    });
  }, []);

  const getColumns = (_columnHeaders = []) => {
    let columns = [];

    _columnHeaders.forEach((header) => {
      let propObj = { key: header.field, style: header.style, };

      if (header.selectionMode) {
        propObj.selectionMode = header.selectionMode;
      } else {
        propObj = {
          ...propObj,
          field: header.field,
          sortable: header.sortable,
          header: header.headerName,
          showFilterMatchModes: false,
          filter: header.filter || false,
          filterElement: (options) => header.filterTemplate(options),
        };

        if (header.component) {
          propObj = { ...propObj, body: header.component, };
        } else {
          propObj = { ...propObj, field: header.field, };
        }
      }

      columns.push(<Column {...propObj} />);
    });

    return columns;
  };

  const headerGroup = (
    <ColumnGroup>
      {tableTopHeader}
      <>{getColumns(columnHeaders)}</>
    </ColumnGroup>
  );

  const tableProps = () => {
    let propObj = {
      ref: dt,
      dataKey,
      rows: 15,
      stripedRows,
      value: tableData,
      showGridlines: true,
      resizableColumns: true,
      columnResizeMode: "fit",
      responsiveLayout: "scroll",
    };

    if (selection) {
      propObj = {
        ...propObj,
        filters,
        paginator,
        filterDisplay: "menu",
        selectionMode: "checkbox",
        columnResizeMode: "expand",
        headerColumnGroup: headerGroup,
        rowsPerPageOptions: [5, 10, 25],
        rowClassName: (rowdata) => `row-class-${rowdata.id}`,
      }
    } else {
      propObj = { ...props };
    }

    return propObj;
  };

  return (
    <div className="datatable" data-testid="table-test">
      <DataTable {...tableProps()}>
        {getColumns(columnHeaders)}
      </DataTable>
    </div>
  );
};

export default TableGrid;
