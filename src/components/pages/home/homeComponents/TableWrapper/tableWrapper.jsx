import React from 'react'
import { DataTable, Pagination } from 'carbon-components-react';
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;

const tableRows = [
  {
    id: 'a',
    foo: 'Foo a',
    bar: 'Bar a',
    baz: 'Baz a',
  },
  {
    id: 'b',
    foo: 'Foo b',
    bar: 'Bar b',
    baz: 'Baz b',
  },
  {
    id: 'c',
    foo: 'Foo c',
    bar: 'Bar c',
    baz: 'Baz c',
  },
  {
    id: 'aa',
    foo: 'Foo a',
    bar: 'Bar a',
    baz: 'Baz a',
  },
  {
    id: 'bb',
    foo: 'Foo b',
    bar: 'Bar b',
    baz: 'Baz b',
  },
  {
    id: 'cc',
    foo: 'Foo c',
    bar: 'Bar c',
    baz: 'Baz c',
  },
];

const tableHeaders = [
  {
    // `key` is the name of the field on the row object itself for the header
    key: 'foo',
    // `header` will be the name you want rendered in the Table Header
    header: 'Foo',
  },
  {
    key: 'bar',
    header: 'Bar',
  },
  {
    key: 'baz',
    header: 'Baz',
  },
];

const TableWrapper = () => {
  return (
    <>
    <DataTable
      rows={tableRows}
      headers={tableHeaders}
      render={({ rows, headers, getHeaderProps }) => (
        <TableContainer title="DataTable">
          <Table
            useZebraStyles
            stickyHeader
            size="compact"
          >
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      />
      <Pagination
        page={1}
        pageSize={20}
        pageSizes={[10, 20, 50]}
        pagesUnknown={false}
        totalItems={tableRows.length}
        onChange={() => {}}
      />
      </>
  );
}

export default TableWrapper;