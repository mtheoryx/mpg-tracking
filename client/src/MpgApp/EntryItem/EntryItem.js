import React from 'react';

const EntryItem = ({ item }) => {
  return (
    <tr key={item.odometer}>
      <td>{item.odometer}</td> <td>${item.cost}</td>
    </tr>
  );
};

export default EntryItem;
