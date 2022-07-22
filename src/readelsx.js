const readXlsxFile = require('read-excel-file/node');

readXlsxFile('./data.xlsx').then((rows) => {
  console.log(rows[1]);
});
