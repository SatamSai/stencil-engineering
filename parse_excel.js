const XLSX = require('xlsx');
const fs = require('fs');
try {
  const workbook = XLSX.readFile('src/assets/SEPL_Website_Projects_Master.xlsx');
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  console.log(JSON.stringify(data.slice(0, 5), null, 2));
} catch (e) {
  console.error(e.message);
}
