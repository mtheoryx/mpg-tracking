const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const importFilePath = path.join(__dirname, 'data', 'data-import.csv');

csv()
  .fromFile(importFilePath)
  .then(jsonObj => {
    return jsonObj.map(entry => {
      return {
        date: entry.Date,
        odometer: entry.Odometer,
        fuel: entry['Fuel (Gal)'],
        cost: entry.Cost,
        location: null
      };
    });
  })
  .then(jsonObj => {
    return jsonObj.map(entry => {
      return {
        date: new Date(entry.date),
        odometer: parseInt(entry.odometer),
        fuel: parseFloat(entry.fuel),
        cost: parseFloat(entry.cost.substring(1)),
        location: null
      };
    });
  })
  .then(jsonObj => {
    fs.writeFile(
      path.join(__dirname, 'data', 'data-export.json'),
      JSON.stringify(jsonObj),
      'utf8',
      e => console.log(e)
    );
  });
