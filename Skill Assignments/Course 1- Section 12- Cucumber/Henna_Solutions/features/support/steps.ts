const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')
const { Greeter } = require('../../src')

// When('the greeter says hello', function () {
//     this.whatIHeard = new Greeter().sayHello()
// });

// Then('I should have heard {string}', function (expectedResponse) {
//     assert.equal(this.whatIHeard, expectedResponse)
// });

Given('the user is logged into the site and on the Clients manager component', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('the user is logged into the site and on the Clients manager component')
    return 'pending';
});

When('data is filled in for a new Client, including <Name> <Project> <Phone> <Email>', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Input data Fields")
    return 'pending';
});

When('ADD CLIENT button is clicked', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("ADD CLIENT Clicked")
    return 'pending';
});

Then('Nothing should happen because we dont know how to do any backend stuff with the data.', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Nothing Happens, no Backend")
    return 'pending';
});

Then('The form data field should dynamically update showing the form is being filled and reading', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("FORM DATA Should dynamically show form updates/ Binding is working")
    return 'pending';
});

Given('the user is logged into the site and on the meeting manager component', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("We are on the Meeting Manager Component")
    return 'pending';
});
When('data is filled in for a new meeting, including <Date> <Time> <Attending> <Meeting Type>', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("Data Fields Filled")
    return 'pending';
});

When('ADD MEETING button is clicked', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("ADD MEETING Clicked")
    return 'pending';
});

