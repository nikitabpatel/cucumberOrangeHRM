package cucumberOrangeHRM;

import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends Utils
{
    LoadProp loadProp = new LoadProp();

    private By _usernameField = By.id("txtUsername");
    private By _passwordField = By.id("txtPassword");
    private By _clickOnLogin = By.id("btnLogin");
    private By _getMessageText = By.id("spanMessage");

    public void enterLogInCredentials(){
        typeText(_usernameField ,loadProp.getProperty("username"));
        typeText(_passwordField, loadProp.getProperty("password"));
    }

    public void enterInValidCredentials(String username, String password){
        typeText(_usernameField, username);
        typeText(_passwordField, password);
    }

    public void clicksOnSubmitButton(){
        clickOnElement(_clickOnLogin);
    }

    public void verifyUSerISNotLoggedIn(String errormessage)
    {
        Assert.assertTrue(getTextFromElement(_getMessageText).contains(errormessage));
    }
}
