import mysql from 'mysql';
const db = mysql.createConnection({
    host: "thebillyproject-db.c102sq8osf99.ap-southeast-2.rds.amazonaws.com",
    user: "root",
    password: "*ROOTpass121212*",
    database: "The-Billy-Project"
})

export default db;