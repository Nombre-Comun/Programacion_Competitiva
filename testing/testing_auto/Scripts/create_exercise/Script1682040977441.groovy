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

WebUI.navigateToUrl('https://localhost:3000/')

WebUI.maximizeWindow()

WebUI.click(findTestObject('Object Repository/Page_CundiCode/a_Ms'))

WebUI.click(findTestObject('Object Repository/Page_CundiCode/a_New Exercise'))

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/input_Title_title'), 'New Exercise Test')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/input_Level_difficultyLevel'), 'easy')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/input_Categories_categories'), 'basic')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/input_Description_description'), 'description')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/input_Time Limit_timeLimit'), '0')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/input_Memory Limit_memoryLimit'), '0')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/input_Function Signature_functionSignature'), 'any')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_Solution Template_ace_text-input'), '    return 0;\n\n')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/input_Hints_hints'), 'none')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_1'), '1')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_1_1_2'), '1')

WebUI.click(findTestObject('Object Repository/Page_CundiCode/button_Agregar ejemplo'))

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_2'), '2')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_2_1'), '2')

WebUI.click(findTestObject('Object Repository/Page_CundiCode/button_Agregar ejemplo'))

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_1'), '1')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_1_1_2'), '1')

WebUI.click(findTestObject('Object Repository/Page_CundiCode/button_Agregar test case'))

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_2'), '2')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_2_1'), '2')

WebUI.click(findTestObject('Object Repository/Page_CundiCode/button_Agregar test case'))

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_3'), '3')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_3_1'), '3')

WebUI.click(findTestObject('Object Repository/Page_CundiCode/button_Agregar test case'))

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_4'), '4')

WebUI.setText(findTestObject('Object Repository/Page_CundiCode/textarea_4_1'), '4')

WebUI.click(findTestObject('Object Repository/Page_CundiCode/button_Agregar test case'))

WebUI.click(findTestObject('Object Repository/Page_CundiCode/button_Enviar'))

WebUI.closeBrowser()

