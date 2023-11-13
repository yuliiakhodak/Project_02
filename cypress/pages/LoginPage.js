class LoginPage {
    getFields(){
        return cy.get("#username, #password")
    }

    getUsernameField(){
        return cy.get('#username')
    }

    getPasswordField(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#login_btn')
    }

    getSuccessMessage(){
        return cy.get('#success_lgn')
    }
    getLogOutButtom(){
        return cy.get('#logout')
    }

    clickLoginButton(){
        this.getLoginButton().click()
    }
    getLoginForm(){
        return cy.get(".LoginForm_content__GphXn")
    }
    getForgotPassword(){
        return cy.get("#login_btn").siblings()
    }
    getModalHeading(){
        return cy.get("#modal_title")
    }
    getDeleteButton(){
        return cy.get(".delete")
    }
    getEmailInput(){
        return cy.get("#email")
    }
    getModalCard(){
        return cy.get(".modal-card")
    }

    getEmailLabel(){
        return cy.get("#email").parent().find("label")
    }
    getSubmitButton(){
        return cy.get("#submit")
    }
 getConfirmationMessage(){
    return cy.get("#confirmation_message")
 }
 getErrorMessage(){
    return cy.get("#error_message")
 }
    userLogin(username, password){
       this.getUsernameField().type(username)
       this.getPasswordField().type(password)
       this.clickLoginButton()
    }
}


export default LoginPage