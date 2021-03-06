// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Connection, Request } = require("tedious");
var jsonArray = [];

async function query(req, res) {
// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "modadmin", // update me
      password: "NewM@dDatabase" // update me
    },
    type: "default"
  },
  server: "moddbserver.database.windows.net", // update me
  options: {
    database: "mod_database", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", async err => {
  if (err) {
    console.error(err.message);
  } else {
   await queryDatabase();
  }
});

connection.connect();

function queryDatabase() {
    jsonArray = [];
  console.log("Reading rows from the Table...");
  var list = [];
  // Read all rows from table
  const request = new Request(
    `SELECT * FROM [dbo].[terminalMaster$]`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
        res.status(200).json(jsonArray)
        
      }
    }
  );

  request.on("row", columns => {
    var coluna = {};
    columns.forEach(column => {
      //console.log("%s\t%s", column.metadata.colName, column.value);
      coluna[column.metadata.colName] = column.value;
    });
    jsonArray.push(coluna);
  });

   connection.execSql(request);
}

//console.log(jsonArray);




 
}
export default query;