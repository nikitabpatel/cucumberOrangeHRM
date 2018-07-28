package cucumberOrangeHRM;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class BrowserSetUp extends Utils {
    // LoadProp loadProp = new LoadProp();
    // String browser = loadProp.getProperty("Browser");

    public static LoadProp loadProp = new LoadProp();
    public static final String USERNAME = loadProp.getProperty("SAUCE_USERNAME");
    public static final String ACCESS_KEY = loadProp.getProperty("SAUCE_ACCESS_KEY");
    public static final String URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:443/wd/hub";

    public static final boolean SAUCE_LAB = Boolean.parseBoolean(System.getProperty("Sauce"));
    public static final String browser = System.getProperty("Browser");

    public void selectBrowser() {
        //If sauce lab is true
        if (SAUCE_LAB) {
            System.out.println("Running in SauceLab...... with browser " + browser);

            if (browser.equalsIgnoreCase("Chrome")) {
                DesiredCapabilities caps = DesiredCapabilities.chrome();
                caps.setCapability("platform", "Windows 7");
                caps.setCapability("version", "67.0");

                try {
                    driver = new RemoteWebDriver(new URL(URL), caps);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else if (browser.equalsIgnoreCase("IE")) {
                DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
                caps.setCapability("platform", "Windows 10");
                caps.setCapability("version", "11");

                try {
                    driver = new RemoteWebDriver(new URL(URL), caps);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else if (browser.equalsIgnoreCase("FireFox")) {
                DesiredCapabilities caps = DesiredCapabilities.firefox();
                caps.setCapability("platform", "Windows 7");
                caps.setCapability("version", "56");
                caps.setCapability("name", "Testing on Firefox 56");
                try {
                    driver = new RemoteWebDriver(new URL(URL), caps);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else if (browser.equalsIgnoreCase("Safari")) {
                DesiredCapabilities caps = DesiredCapabilities.safari();
                caps.setCapability("platform", "OS X 10.10");
                caps.setCapability("version", "8.0");
                try {
                    driver = new RemoteWebDriver(new URL(URL), caps);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else if (browser.equalsIgnoreCase("edge")) {
                DesiredCapabilities caps = DesiredCapabilities.edge();
                caps.setCapability("platform", "Windows 10");
                caps.setCapability("version", "16.16299");
                try {
                    driver = new RemoteWebDriver(new URL(URL), caps);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else {
                System.out.println("Wrong browser name or empty: " + browser);
            }
        }
        // if sauce lab is false

        else {
            if (browser.equalsIgnoreCase("Chrome")) {
                System.setProperty("webdriver.chrome.driver", "src\\test\\Resourses\\BrowserDirectory\\chromedriver.exe");
                driver = new ChromeDriver();
            } else if (browser.equalsIgnoreCase("IE")) {
                System.setProperty("webdriver.ie.driver", "src\\test\\Resourses\\BrowserDirectory\\IEDriverServer.exe");
                driver = new InternetExplorerDriver();
            } else if (browser.equalsIgnoreCase("Firefox")) {
                System.setProperty("webdriver.gecko.driver", "src\\test\\Resourses\\BrowserDirectory\\geckodriver.exe");
                driver = new FirefoxDriver();
            } else {
                System.out.print("Wrong Browser" + browser);
            }
        }
    }
}
