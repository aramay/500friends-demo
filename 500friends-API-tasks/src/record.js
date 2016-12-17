var request = require("request");


//configure request
request({
    url: "http://loyalty-stage.500friends.com/api/record.json",
    //Query string
    qs: {email: "test2@test.com", uuid: "GwMlFcW6sZaOQwR", channel: "web"}

},

function (error, response, body) {
    if(error) {
        console.log(error);
    } else {
        console.log("response STATUS code ", response.statusCode);
        console.log("response body ", body);
    }
});
