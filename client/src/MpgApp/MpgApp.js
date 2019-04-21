import React, { useState } from 'react';
import Display from './Display/Display';
import Form from './Form/Form';

const fakeData = [
  {
    date: new Date('2015-8-22'),
    odometer: 72,
    fuel: 2.666,
    cost: 17.27,
    location: null
  },
  {
    date: new Date('2015-8-29'),
    odometer: 224,
    fuel: 5.5,
    cost: 13.74,
    location: null
  },
  {
    date: new Date('2015-9-5'),
    odometer: 380,
    fuel: 5.731,
    cost: 12.89,
    location: null
  },
  {
    date: new Date('2015-9-13'),
    odometer: 526,
    fuel: 5.474,
    cost: 10.89,
    location: null
  },
  {
    date: new Date('2015-9-19'),
    odometer: 713,
    fuel: 6.687,
    cost: 14.64,
    location: null
  },
  {
    date: new Date('2015-9-26'),
    odometer: 904,
    fuel: 7.017,
    cost: 16.83,
    location: null
  },
  {
    date: new Date('2015-10-3'),
    odometer: 1040,
    fuel: 5.154,
    cost: 12.78,
    location: null
  }
];

const MpgApp = () => {
  const [items, updateItems] = useState(fakeData);

  const onHandleAddItem = item => {
    console.log(JSON.stringify(item, 0, 2));
    updateItems([...items, item]);
  };

  return (
    <React.Fragment>
      <Form handleAddItem={onHandleAddItem} />
      <Display items={items} count={3} limit={true} />
    </React.Fragment>
  );
};

export default MpgApp;
