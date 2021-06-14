const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "sob", // update me
      password: "leoDias1998" // update me
    },
    type: "default"
  },
  server: "http://sobappdb.database.windows.net:1433", // update me
  options: {
    database: "sobappbd", //update me
    encrypt: true
  }
};


async function Main(req, res){
    console.log("Entrou")
    const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
    connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Ok")
    }
    });
    res.status(200).json({
        done : "yes"
    })
}
export default Main
