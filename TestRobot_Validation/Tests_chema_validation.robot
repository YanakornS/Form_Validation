*** Settings ***
Library     SeleniumLibrary


*** Variables ***
${BROWSER}          Chrome
${BROWSER}                  Chrome
${INPUT_FIRSTNAMEENG}       yanakorn
${INPUT_LastNameUK}         srinuan
${INPUT_EMAIL}              Yanakorn@webmail.npru.ac.th
${INPUT_PASSWORD}           002
${INPUT_PHONENUM}           09240885Yan




${RESULT_FIRSTNAMEENG}      ชื่อต้องเริ่มด้วยตัวใหญ่และตามด้วยตัวเล็ก
${RESULT_LastNameUK}        นามสกุลต้องเริ่มด้วยตัวใหญ่และตามด้วยตัวเล็ก
${RESULT_EMAIL}             อีเมลต้องมีชื่อโดเมนเฉพาะ Gmail
${RESULT_PASSWORD}          รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร
${RESULT_PHONENUM}          เบอร์โทรศัพท์ต้องประกอบด้วยตัวเลข 10 หลักเท่านั้น


*** Test Cases ***
Inpu ValidationNameUK
    [Documentation]    Test case ชื่อต้องเริ่มด้วยตัวใหญ่และตามด้วยตัวเล็ก
    Open Google
    Input FirstNameUK
    Click Element Field
    Verify FirstnameUK Results
    Capture Page Screenshot

Inpu ValidationLastNameUK
    [Documentation]    Test case นามสกุลต้องเริ่มด้วยตัวใหญ่และตามด้วยตัวเล็ก
    Open Google
    Input LastNameUK
    Click Element Field
    Verify LastNameUK Results
    Capture Page Screenshot


Inpu ValidationGmail
    [Documentation]    Test case อีเมลต้องมีชื่อโดเมนเฉพาะ Gmail
    Open Google
    Input Email
    Click Element Field
    Verify Email Results
    Capture Page Screenshot


Inpu Validation
    [Documentation]    Test case รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร
    Open Google
    Input Password
    Click Element Field
    Verify Password Results
    Capture Page Screenshot

Inpu Validation PhoneNumber
    [Documentation]    Test case เบอร์โทรศัพท์ต้องประกอบด้วยตัวเลข 10 หลักเท่านั้น
    Open Google
    Input PhoneNumber
    Click Element Field
    Verify PhoneNumber Results
    Capture Page Screenshot

*** Keywords ***

Open Google
    Open Browser     https://form-validation-five-blond.vercel.app/    ${BROWSER}
    

Input FirstNameUK
    Input Text    name=firstNameUK    ${INPUT_FIRSTNAMEENG}


Input LastNameUK
    Input Text    name=lastNameUK    ${INPUT_LastNameUK}


Input Email
    Input Text    name=email    ${INPUT_EMAIL}

Input Password
    Input Text    name=password    ${INPUT_PASSWORD}

Input PhoneNumber
    Input Text    name=phone    ${INPUT_PHONENUM}

Click Element Field
    Click Element    id=firstNameTH


##########################RESULT#######################
Verify FirstnameUK Results
    Wait Until Page Contains    ${RESULT_FIRSTNAMEENG}
    Page Should Contain    ${RESULT_FIRSTNAMEENG}

Verify LastNameUK Results
    Wait Until Page Contains    ${RESULT_LastNameUK} 
    Page Should Contain    ${RESULT_LastNameUK} 


Verify Email Results
    Wait Until Page Contains    ${RESULT_EMAIL}
    Page Should Contain    ${RESULT_EMAIL}


Verify Password Results
    Wait Until Page Contains    ${RESULT_PASSWORD}
    Page Should Contain    ${RESULT_PASSWORD}

Verify PhoneNumber Results
    Wait Until Page Contains    ${RESULT_PHONENUM}
    Page Should Contain    ${RESULT_PHONENUM}