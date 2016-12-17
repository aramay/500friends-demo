var request = require("request");
var md5 = require("nodejs-md5");

var email = "test2@test.com";
var uuid = "GwMlFcW6sZaOQwR";

var secret_key = "81XrhmOcZngLRy7zXnvE36QHtNShdSGY";

//prepend secret key, params in alphabetical order
var temp = secret_key + "email"+ email + "uuid" + uuid;
console.log("temp ", temp);

var sig = "";
//md5 -s
md5.string.quiet(temp, function (err, md5) {
    if (err) {
        console.log(err);
    }
    else {
        sig = md5;
        console.log("md5 for customer info ", md5); //814d0145e8673ad04f63b7825a49e57b
    }
});

console.log("signature ", sig);


//configure request
request({
    url: "https://loyalty-stage.500friends.com/data/customer/show",
    //Query string
    qs: {uuid: uuid, email: email, sig: sig}

},

function (error, response, body) {
    if(error) {
        console.log(error);
    } else {
        console.log("response STATUS code ", response.statusCode);
        console.log("response body ", body);
    }
});


/*
response body  {
    "data":
        {"channel":"web","created_at":"2016-12-16T16:02:24-08:00","email":"test2@test.com","enrolled_at":"2016-12-16T16:02:24-08:00","external_customer_id":null,"last_activity":null,"last_reward_date":null,"last_reward_event_id":null,"status":"active","sub_channel":null,"sub_channel_detail":null,"subscription_type":null,"unsubscribed":false,"unsubscribed_sms":true,"updated_at":"2016-12-16T16:02:24-08:00","name":"test2@test.com","balance":10,"lifetime_balance":10,"image_url":null,"top_tier_name":null,"top_tier_expiration_date":null
    },

    "success":true
}
*/
