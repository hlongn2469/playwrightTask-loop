# playwrightTask-loop
The tests are located at asana-login.js

Acceptance Criteria:
Setup and Preparation:
Create a new project or workspace specifically for this task.
Ensure Playwright and the necessary dependencies are installed and set up.


Login Automation:
Automate the login process to Asana using the provided credentials.
https://app.asana.com/-/login
Email: ben+pose@workwithloop.com
Password: Password123
The script should be capable of inputting the email address and password and submit the form successfully.


Data-Driven Testing Using JSON:
Your tests should be driven from the testCases JSON object.
Implement a mechanism to read test case data from this JSON object to drive your tests.
Each test case will comprise of 3 test.step:
Navigation: Navigate to the correct leftNav item as mentioned in the JSON object.
Column Verification: Confirm that the specified card_title is present in the designated column.
