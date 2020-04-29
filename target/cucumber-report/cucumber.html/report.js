$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/barclays/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login page feature",
  "description": "As a user I want to navigate to login page into barclays website",
  "id": "login-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 37309890100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-page-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 109783100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 62616508900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldNavigateToPageSuccessfully()"
});
formatter.result({
  "duration": 60115100,
  "status": "passed"
});
formatter.after({
  "duration": 817340700,
  "status": "passed"
});
formatter.before({
  "duration": 23997070100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should not login without entering membership details",
  "description": "",
  "id": "login-page-feature;user-should-not-login-without-entering-membership-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter surname \"Thevarajah\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on next step",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 63635546800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thevarajah",
      "offset": 17
    }
  ],
  "location": "LoginStepdefs.iEnterSurname(String)"
});
formatter.result({
  "duration": 154593200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnNextStep()"
});
formatter.result({
  "duration": 639960300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 60085000,
  "status": "passed"
});
formatter.after({
  "duration": 821617600,
  "status": "passed"
});
formatter.uri("src/test/java/uk/co/barclays/resources/featurefile/registration.feature");
formatter.feature({
  "line": 2,
  "name": "Register page feature",
  "description": "As a user I want to navigate to Registration page into barclays website",
  "id": "register-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.before({
  "duration": 22633731300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to registration page successfully",
  "description": "",
  "id": "register-page-feature;user-should-navigate-to-registration-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 55271967700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 59626800,
  "status": "passed"
});
formatter.after({
  "duration": 792082400,
  "status": "passed"
});
formatter.before({
  "duration": 24900491300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should navigate to user details page successfully",
  "description": "",
  "id": "register-page-feature;user-should-navigate-to-user-details-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should navigate to your details page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 55181889900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnStartButton()"
});
formatter.result({
  "duration": 154071300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iShouldNavigateToYourDetailsPageSuccessfully()"
});
formatter.result({
  "duration": 410649100,
  "status": "passed"
});
formatter.after({
  "duration": 840572700,
  "status": "passed"
});
});