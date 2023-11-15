/// <reference types="cypress" />

import LoginPage from "../../pages/LoginPage";



describe("Project - Login Function", () => {
    const loginPage = new LoginPage()
    beforeEach(() => {
        cy.visit("https://techglobal-training.com/frontend/project-2")
        cy.fixture('example').then(function (data) {
            this.username = data.username
            this.password = data.password
            this.email = data.email
        })

    })

    it("Test Case 01 - Validate the login form", () => {
        const data = ["Please enter your username", "Please enter your password"]

        loginPage.getFields().each(($el, index) => {
            cy.wrap($el).should("be.visible").and("have.not.attr", "required")
            cy.wrap($el).siblings().should("have.text", data[index])
        })

        loginPage.getLoginButton().should("be.visible").and("be.enabled").and("have.text", "LOGIN")
        loginPage.getLoginButton().siblings().should("be.visible").and("have.text", "Forgot Password?").click()
    })

    it("Test Case 02 - Validate the valid login", function () {
        loginPage.userLogin(this.username, this.password)
        loginPage.getSuccessMessage().should("be.visible")
        loginPage.getLogOutButtom().should("be.visible").and("have.text", "LOGOUT")
    })
    it("Test Case 03 - Validate the logout", function () {
        loginPage.userLogin(this.username, this.password)
        loginPage.getLogOutButtom().click()
        loginPage.getLoginForm().should("be.visible")

    })
    it("Test Case 04 - Validate the Forgot Password? Link and Reset Password modal", () => {
        loginPage.getForgotPassword().click()
        loginPage.getModalHeading().should("be.visible")
        loginPage.getDeleteButton().should("be.visible")
        loginPage.getEmailInput().should("be.visible").siblings().should("have.text", "Enter your email address and we'll send you a link to reset your password. ")
        loginPage.getSubmitButton().should("be.visible").and("be.enabled").and("have.text", "SUBMIT")
    })
    it("Test Case 05 - Validate the Reset Password modal close button", () => {
        loginPage.getForgotPassword().click()
        loginPage.getModalCard().should("be.visible")
        loginPage.getDeleteButton().click()
        loginPage.getModalCard().should("not.exist")
    })
    it("Test Case 06 - Validate the Reset Password form submission", function () {
        loginPage.getForgotPassword().click()
        loginPage.getEmailInput().type(this.email)
        loginPage.getSubmitButton().click()
        loginPage.getConfirmationMessage().should("be.visible")

    })
    it("Test Case 07 - Validate the invalid login with the empty credentials", function () {

        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should("have.text", "Invalid Username entered!")
    })
    const info = [
        {
            username: "John",
            password: "Test1234",
            description:"Test Case 08 - Validate the invalid login with the wrong username",
            message: "Invalid Username entered!"
        },
        {
            username: "TechGlobal",
            password: "1234",
            description:"Test Case 09 - Validate the invalid login with the wrong password",
            message: "Invalid Password entered!"
        },
        {
            username: "John",
            password: "1234",
            description:"Test Case 10 - Validate the invalid login with the wrong username and password",
            message: "Invalid Username entered!"
        }
    ]
    info.forEach((test)=>{
        it(test.description, () =>{
            loginPage.userLogin(test.username, test.password)
            loginPage.getErrorMessage().should("have.text", test.message)
        })
    })

})