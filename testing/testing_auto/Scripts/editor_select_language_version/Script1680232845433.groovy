import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.maximizeWindow()

WebUI.navigateToUrl('https://react0test.web.app/')

WebUI.click(findTestObject('Object Repository/Page_CundiCode/a_Editor'))

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_PythonJavaC'), 'python2', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_Python 2Python 3'), 'python3', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_3.5.13.6.33.6.53.7.43.9.9'), '4', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_PythonJavaC'), 'java', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_JDK 1.8.0_66JDK 9.0.1JDK 10.0.1JDK 1_91b7f3'), 
    '4', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_PythonJavaC'), 'cpp', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_CC 14C 17'), 'cpp14', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_g 14 GCC 5.3.0g 14 GCC 7.2.0g 14 GCC_bef5a5'), 
    '4', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_CC 14C 17'), 'cpp17', true)

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_CundiCode/select_g 17 GCC 9.1.0GCC 11.1.0'), '1', true)

WebUI.closeBrowser()