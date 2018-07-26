package cucumberOrangeHRM;

import org.openqa.selenium.By;
import org.testng.Assert;

public class DashboardPage extends Utils
{
    private By _pageTitle = By.xpath("//div[@class='head']/h1");
    private By _pageTitleText = By.xpath("//div[@class='head']/h1");
    String expectedMessageTitle = "Dashboard";

    public void dashboardPage()
    {
        Assert.assertEquals(getTextFromElement(_pageTitleText),expectedMessageTitle);
    }
}
