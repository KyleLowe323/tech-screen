import React from 'react';
import {AutoSizer, Table as RVTable, Column} from 'react-virtualized'
import styled from 'styled-components';

const TableContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  // background: green;
  padding-bottom: 1em;
`;
const StyledTable = styled(RVTable)`
  &&&{
    cursor: pointer;
    .ReactVirtualized__Table__row{
      &:hover{
        background-color: lightgray;
      }
      &:not(:first-of-type){
        border-top: 1px solid gray;
      }
      &:last-of-type{
        border-bottom: 1px solid gray;
      }
    }
    .ReactVirtualized__Table__rowColumn{
      height: 100%;
      margin: 0;
      border-right: 1px solid gray;
      &:last-of-type{
        border: none;
      }
    }
    .ReactVirtualized__Table__headerRow{
      background-color: #153d70;
      color: whitesmoke;
    }
    .ReactVirtualized__Table__headerColumn{
      height: 100%;
      margin: 0;
      border-right: 1px solid whitesmoke;
      &:last-of-type{
        border: none;
      }
    }
  }
`;

const StyledHeader = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledCell = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 12px;
  padding: .25rem;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const SEGMENTS = 20;

const Table =  ({data}) => {
  return  (
    <TableContainer>
      <AutoSizer>
        {({width, height}) => (
          <StyledTable
            headerHeight={48}
            rowHeight={42}
            rowCount={data?.length}
            rowGetter={({index}) => data[index]}
            rowRendered={({ key, style, className, columns, onRowClick, rowData}) =>
              <StyledRow onClick={(e) => onRowClick({e, rowData})} {...{key, style, className}}>{columns}</StyledRow>
            }
            onRowClick={({e, rowData}) => window.location.replace(`${rowData.html_url}/commits`)}
            {...{width, height}}
          >
            <Column
              dataKey="name"
              width={width/SEGMENTS * 4}
              headerRenderer={({dataKey}) => <StyledHeader>{dataKey}</StyledHeader>}
              cellRenderer={({cellData}) => <StyledCell>{String(cellData)}</StyledCell>}
            />
            <Column
              dataKey="description"
              width={width/SEGMENTS * 6}
              headerRenderer={({dataKey}) => <StyledHeader>{dataKey}</StyledHeader>}
              cellRenderer={({cellData}) => <StyledCell title={cellData}>{String(cellData)}</StyledCell>}
            />
            <Column
              dataKey="created_at"
              width={width/SEGMENTS * 3}
              headerRenderer={({dataKey}) => <StyledHeader>{dataKey}</StyledHeader>}
              cellRenderer={({cellData}) => <StyledCell>{String(cellData)}</StyledCell>}
            />
            <Column
              dataKey="updated_at"
              width={width/SEGMENTS * 3}
              headerRenderer={({dataKey}) => <StyledHeader>{dataKey}</StyledHeader>}
              cellRenderer={({cellData}) => <StyledCell>{String(cellData)}</StyledCell>}
            />
            <Column
              dataKey="watchers_count"
              width={width/SEGMENTS * 2}
              headerRenderer={({dataKey}) => <StyledHeader>Watchers</StyledHeader>}
              cellRenderer={({cellData}) => <StyledCell $center>{String(cellData)}</StyledCell>}
            />
            <Column
              dataKey="forks"
              width={width/SEGMENTS * 2}
              headerRenderer={({dataKey}) => <StyledHeader>{dataKey}</StyledHeader>}
              cellRenderer={({cellData,}) => <StyledCell $center>{String(cellData)}</StyledCell>}
            />
          </StyledTable>
        )}
      </AutoSizer>
    </TableContainer>
  )

}

export default Table;