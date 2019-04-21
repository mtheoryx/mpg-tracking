import React from 'react';
import EntryItem from '../EntryItem/EntryItem';
import styled from 'styled-components';

const DisplayTable = styled.table`
  width: 95vw;
  margin: 0 auto;
  tbody tr:nth-child(odd) {
    background-color: #663399;
    color: #fff;
  }
`;

const Display = ({ items, count, limit }) => {
  const itemsList = limit
    ? [...items.slice(Math.max(items.length - count, 1))]
    : [...items];

  const headers = [
    ...Object.keys(items[0]).slice(0, 2),
    'miles',
    ...Object.keys(items[0]).slice(2)
  ]
    .filter(k => k !== 'location')
    .concat('mpg', '$PM');

  return (
    <React.Fragment>
      <DisplayTable>
        <thead>
          <tr>
            {itemsList.length > 0 &&
              headers.map((k, index) => (
                <td key={index}>{k.split('')[0].toUpperCase() + k.slice(1)}</td>
              ))}
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            itemsList
              .sort((a, b) => {
                if (a.odometer < b.odometer) return 1;
                if (a.odometer > b.odometer) return -1;
                return 0;
              })
              .map((item, index, items) => (
                <EntryItem
                  item={item}
                  key={item.odometer}
                  prevItemOdometer={
                    items[index + 1] && items[index + 1].odometer
                  }
                />
              ))}
        </tbody>
      </DisplayTable>
    </React.Fragment>
  );
};

export default Display;
