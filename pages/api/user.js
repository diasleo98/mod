var Parse = require('parse/node');
Parse.initialize("vew2sEBHsBVU2rLJvmBjK3rsxG8kK6X1pe7Linj6", "oWfbQMZN8grwiboxyAYA2VZD8i5EVyhVjWkIVcxi", "hxHoikx0knehtDR38vA1cw0WAoPunBZbNBJEX3HM");
//javascriptKey is required only if you have it on server.

Parse.serverURL = 'https://parseapi.back4app.com/'

Parse.User.enableUnsafeCurrentUser()



const credentials = {
    email : "leodias998@hotmail.com",
    pass : "miojobom@98"
}

async function user(request, response){
    //await LogIn(credentials)
    const dynamicDate = new Date()
    //const id = Parse.User.current().id
    var query = new Parse.Query("User")
    console.log(request.query.id)

    var jsonReturn = {}
    switch(request.method){
        case "GET":
            if(request.query.id){
                query = query.contains("objectId", request.query.id)
            }
            else{
                response.json({
                    date : dynamicDate,
                    id : id
                })
                break
            }
            var userObj = await query.first()
            const username = userObj.get("Name")
            jsonReturn.name = username
            if(request.query.lastName == "true"){
                jsonReturn.lastName = userObj.get("LastName")
            }
            jsonReturn.date = dynamicDate
            response.status(200).json(jsonReturn)
            break
        case "PUT":
            break
    }
    
    
}

async function LogIn(credentials){
    await Parse.User.logIn(credentials.email, credentials.pass)
}

// export async function getStaticProps(){
//     await LogIn(credentials)
//     const dynamicDate = new Date()
//     const id = Parse.User.current().id
//     var query = new Parse.Query("User")
//     query = query.contains("objectId", id)
//     var userObj = await query.first()
//     const username = userObj.get("Name")
//     return {
//         props : {
//         name
//     }
// }
// }

export default user