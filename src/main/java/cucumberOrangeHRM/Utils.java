package cucumberOrangeHRM;

import org.openqa.selenium.By;

public class Utils extends BasePage
{
    public static void typeText(By by, String text) {
        driver.findElement(by).clear();
        driver.findElement(by).sendKeys(text);
    }

    public static void clickOnElement(By by){
        driver.findElement(by).click();
    }

    public static String getTextFromElement(By by){
        return driver.findElement(by).getText();
    }
}
