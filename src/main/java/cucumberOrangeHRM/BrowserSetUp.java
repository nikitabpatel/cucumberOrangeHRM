package cucumberOrangeHRM;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class BrowserSetUp extends Utils
{
    LoadProp loadProp = new LoadProp();
    String browser = loadProp.getProperty("Browser");

    public void selectBrowser(){

        if(browser.equalsIgnoreCase("Chrome")){
            System.setProperty("webdriver.chrome.driver","src\\test\\Resourses\\BrowserDirectory\\chromedriver.exe");
            driver = new ChromeDriver();
        } else if(browser.equalsIgnoreCase("IE")) {
            System.setProperty("webdriver.ie.driver","src\\test\\Resourses\\BrowserDirectory\\IEDriverServer.exe");
            driver = new InternetExplorerDriver();
        } else if (browser.equalsIgnoreCase("Firefox")){
            System.setProperty("webdriver.gecko.driver","src\\test\\Resourses\\BrowserDirectory\\geckodriver.exe");
            driver = new FirefoxDriver();
        }else{System.out.print("Wrong Browser" +browser);}
    }
}
