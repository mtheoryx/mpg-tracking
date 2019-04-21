import React from 'react';

const EntryItem = ({ item, prevItemOdometer }) => {
  const miles = prevItemOdometer
    ? item.odometer - prevItemOdometer
    : item.odometer;

  const mpg = (miles / item.fuel).toFixed(2);

  const cpm = (item.cost / miles).toFixed(2);

  return (
    <tr>
      <td>{item.date.toLocaleDateString()}</td>
      <td>{item.odometer}</td>
      <td>{miles}</td>
      <td>{item.fuel}</td>
      <td>${item.cost}</td>
      <td>{mpg}</td>
      <td>{cpm}</td>
    </tr>
  );
};

export default EntryItem;
