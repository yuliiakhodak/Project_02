# Cypress Testing for Login Page - Project 2

This Cypress project focuses on end-to-end testing for the login functionality of Project 2's frontend application.

## Project Structure

- **Pages:**
  - `LoginPage.js`: Contains page objects and methods related to the login page.

- **Integration Tests:**
  - `login.spec.js`: Cypress test cases for validating various aspects of the login page.

## Installation

1. Clone this repository:

   ```bash
   git clone git@github.com:yuliiakhodak/Project_02.git
2. Navigate to the project directory:

cd project-2-cypress-tests

3. Install dependencies:

npm install
## Configuration
Update the base URL in cypress.json to match your Project 2's frontend URL.
## Running Tests
Open Cypress Test Runner

npm run cypress:open
## Run Cypress Tests in Headless Mode

npm run cypress:run
## Test Cases
1. Validate the login form (Test Case 01):

Checks visibility of form fields and their validation messages.
Validates the visibility and functionality of the login button.
Clicks "Forgot Password?" link.

2. Validate valid login (Test Case 02):

Logs in with valid credentials.
Verifies the success message and the presence of the logout button.

3. Validate logout (Test Case 03):

Logs in and performs a logout.
Verifies the visibility of the login form after logout.

4. Validate Forgot Password? Link and Reset Password modal (Test Case 04):

Clicks the "Forgot Password?" link.
Validates the visibility and content of the Reset Password modal.

5. Validate Reset Password modal close button (Test Case 05):

Clicks the close button on the Reset Password modal.
Verifies that the modal is closed.

6. Validate Reset Password form submission (Test Case 06):

Enters an email address and submits the Reset Password form.
Verifies the visibility of the confirmation message.

7. Validate invalid login with empty credentials (Test Case 07):

Clicks the login button without entering credentials.
Verifies the error message for invalid username.

8. Validate invalid login with wrong username (Test Case 08):

Attempts login with a wrong username.
Verifies the error message for an invalid username.

9. Validate invalid login with wrong password (Test Case 09):

Attempts login with a wrong password.
Verifies the error message for an invalid password.

10.Validate invalid login with wrong username and password (Test Case 10):

Attempts login with both a wrong username and password.
Verifies the error message for an invalid username.
