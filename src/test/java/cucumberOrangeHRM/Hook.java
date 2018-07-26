package cucumberOrangeHRM;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class Hook extends BasePage {
    LoadProp loadProp = new LoadProp();
    BrowserSetUp browserSetUp = new BrowserSetUp();

    @Before
    public void setUp() {
        browserSetUp.selectBrowser();
        driver.get(loadProp.getProperty("url"));
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

    @After
    public  void captureScreenshoot() {
        File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            // now copy the  screenshot to desired location
            // System.currentTimeMillis() for taking multiple screenshots. If you dont use it, it will re write old image
            // so if you dont use that you will able to take only one image at a time.
            FileUtils.copyFile(src, new File("src\\test\\Resourses\\Screenshot" + System.currentTimeMillis() + "\\error.png"));
            System.out.println("Screenshot taken");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    @After
    public void tearDown() {
        driver.quit();
    }
}
