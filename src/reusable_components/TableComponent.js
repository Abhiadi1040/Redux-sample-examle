import React from 'react'
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGroupBy,
  useExpanded,
  useRowSelect
} from 'react-table';
import '../styles/TableStyle.css';
import { Table } from 'react-bootstrap';
import TableHeader from '../reusable_components/TableHeaderComponent'
function TableComponent({ tablesColumn,
                          tableDatas, 
                          pageNumbers, 
                          onRowClick,
                          style,
                          columnAccessor,
                          columnAccessorWidth,
                          tableId,
                          refreshButton,
                          rowStyle,
                          columnException}) {
  var columns = React.useMemo(() => tablesColumn,[])
  const [data, setData] = React.useState(() => tableDatas)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: {
      pageIndex,
      pageSize
    }
  } = useTable(
    {
      columns,
      data,
      disableMultiSort: true,
      // pageNumbers   
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.getCellProps.push((props, instance, cell) => {      
        // console.log("props, instance, cell>>",props, instance, cell);                        
          return [
              props, 
              // { style: cell.column.style } 
          ];
      });
  }
  )
  return (
    <>
      <TableHeader
        columns={columns}
        pageIndex={pageIndex}
        tableDataCount={data.length}
        pageSize={pageSize}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        pageNumbers={pageNumbers}
        tableId={tableId}
        refreshButton={refreshButton}
      />
      <Table  className="table-responsive" {...getTableProps()}   style={style}  id={tableId} size="sm">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} >
                  <select
                    onChange={e => {
                    }}
                   style={column.id === columnAccessor && columnAccessor !== undefined ? columnAccessorWidth : {width:150}}               
                   className="Headerselect">
                 <option value="">All</option>
                  </select>
                </th>
              ))}
            </tr>
          ))}
          {headerGroups.map(headerGroup => (
            <tr   {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} class="tableth">
                  <div class="secHeader">
                    <span  {...column.getSortByToggleProps()} >
                      {column.render('Header')}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? (<ion-icon class="iconFilter" name="caret-down-outline"></ion-icon>)
                          : (<ion-icon class="iconFilter" name="caret-up-outline"></ion-icon>)
                        : ''}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} >
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} onClick={() => onRowClick(row)}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} style={(!rowStyle || cell.column.id===columnException)?{textAlign: 'center'}:null}  className='table-row'>
                       {cell.render('Cell', { editable: false })}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default TableComponent