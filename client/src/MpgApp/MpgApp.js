import React from 'react';
import Display from './Display/Display';

const fakeData = [
  {
    date: new Date(8, 22, 15),
    odometer: 72,
    fuel: 2.666,
    cost: 17.27,
    location: null
  },
  {
    date: new Date(8, 29, 15),
    odometer: 224,
    fuel: 5.5,
    cost: 13.74,
    location: null
  },
  {
    date: new Date(9, 5, 15),
    odometer: 380,
    fuel: 5.731,
    cost: 12.89,
    location: null
  },
  {
    date: new Date(9, 13, 15),
    odometer: 526,
    fuel: 5.474,
    cost: 10.89,
    location: null
  },
  {
    date: new Date(9, 19, 15),
    odometer: 713,
    fuel: 6.687,
    cost: 14.64,
    location: null
  },
  {
    date: new Date(9, 26, 15),
    odometer: 904,
    fuel: 7.017,
    cost: 16.83,
    location: null
  },
  {
    date: new Date(10, 3, 15),
    odometer: 1040,
    fuel: 5.154,
    cost: 12.78,
    location: null
  }
];

const MpgApp = () => (
  <React.Fragment>
    <span>Entries:</span>
    <Display items={[]} count={5} />
  </React.Fragment>
);

export default MpgApp;
