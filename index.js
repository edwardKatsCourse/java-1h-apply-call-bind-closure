//.call()
//.apply()
//.bind()

//Java Script Object Notation (JSON)

let user = {
    firstName: 'John',
    lastName: 'Smith',
    addresses: [
        {
            city: "Jerusalem",
            street: "Ben Yehuda"
        }
    ]
};

/**
 {
    firstName: 'John',
    lastName: 'Smith',
    addresses: [
        {
            city: "Jerusalem",
            street: "Ben Yehuda"
        }
    ]
}
 */

function testMethod(prefix, suffix) {

    //String name = "David";
    //String result = String.format("My name is %s", name);
    //sout(result);

    //String interpolation
    // var interpolatedString = `Hello ${this.firstName}!`;



    return `${prefix} ${this.firstName} ${this.lastName}! ${suffix}`;
    // return prefix + ". " + this.firstName + " " +  this.lastName + " " + suffix;
}



function correctTestMethod(user, prefix, suffix) {
    return `${prefix} ${user.firstName} ${user.lastName}! ${suffix}`;
}


function callTest() {
    // testMethod('prefix', 'suffix');

    let result = testMethod.call(user, 'Hello, dear', 'How are you today?');
    alert(result);

    //return; -> void
}

function applyTest() {
    let result = testMethod.apply(user, ['Hello, dear', 'How are you today?']);
    alert(result); //my string result
}




function bindTest() {
    let functionValue = testMethod.bind(user); //Java reflection -> Method .invoke()
    let result = functionValue('Hello, dear', 'How are you today?');
    alert(result); //function testMethod();
}

window.onload = function () {

    //user = getFromServer();


    // callTest();
    // applyTest();
    bindTest();
};