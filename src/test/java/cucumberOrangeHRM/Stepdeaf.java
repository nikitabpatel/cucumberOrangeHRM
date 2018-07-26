package cucumberOrangeHRM;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdeaf
{
    HomePage homePage = new HomePage();
    DashboardPage dashboardPage = new DashboardPage();

    @Given("^user is on log in page$")
    public void user_is_on_log_in_page() {
    }

    @When("^he enters username and password$")
    public void he_enters_username_and_password(){
        homePage.enterLogInCredentials();
    }

    @When("^he clicks on log in button$")
    public void he_clicks_on_log_in_button(){
        homePage.clicksOnSubmitButton();
    }

    @Then("^he should able to log in successfully$")
    public void he_should_able_to_log_in_successfully() {
        dashboardPage.dashboardPage();
    }

    @When("^he enters invalid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void he_enters_invalid_and(String username, String password) {
        homePage.enterInValidCredentials(username,password);
    }

    @Then("^he should not able to log in with \"([^\"]*)\"$")
    public void he_should_not_able_to_log_in_with(String errormessage) {
        homePage.verifyUSerISNotLoggedIn(errormessage);
    }

}
