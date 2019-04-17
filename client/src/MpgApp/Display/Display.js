import React from 'react';
import EntryItem from '../EntryItem/EntryItem';
import styled from 'styled-components';

const DisplayTable = styled.table`
  tbody tr:nth-child(odd) {
    background-color: #663399;
    color: #fff;
  }
`;

const Display = ({ items, count = 3 }) => {
  return (
    <React.Fragment>
      <DisplayTable>
        <thead>
          <tr>
            {items.length > 0 &&
              Object.keys(items[0]).map(k => (
                <td>{k.split('')[0].toUpperCase() + k.slice(1)}</td>
              ))}
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            [...items.slice(Math.max(items.length - count, 1))].map(item => (
              <EntryItem item={item} />
            ))}
        </tbody>
      </DisplayTable>
    </React.Fragment>
  );
};

export default Display;
