import fs from 'fs';

let rawData = fs.readFileSync('./config/db.json');
let db = JSON.parse(rawData);

export default db;