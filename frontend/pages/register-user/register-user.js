class RegisterUser {
    selectors = {
        page: ".register-user",
        navigationButton: "#navigation",
        firstNameInput: "#inputFirstName",
        lastNameInput: "#inputLastName",
        emailInput: "#inputEmail",
        passwordInput: "#inputPassword",
        spanFirstName: "#spanFirstName",
        spanLastName: "#spanLastName",
        spanEmail: "#spanEmail",
        spanPassword: "#spanPassword" 
    };

    components = {
        page: null
    };

    constructor(){
        this.init();
    }

    init() {
        //TODO Generalize selectors and component creating mode
        this.components.page = document.querySelector(this.selectors.page);

        this.components.firstNameInput = this.components.page.querySelector(this.selectors.firstNameInput);
        this.components.lastNameInput = this.components.page.querySelector(this.selectors.lastNameInput);
        this.components.emailInput = this.components.page.querySelector(this.selectors.emailInput);
        this.components.passwordInput = this.components.page.querySelector(this.selectors.passwordInput);

        this.components.spanFirstName = this.components.page.querySelector(this.selectors.spanFirstName);
        //TODO Make functions that hiddes and shows element
        this.components.spanFirstName.classList.add("hidden");

        this.components.spanLastName = this.components.page.querySelector(this.selectors.spanLastName);
        this.components.spanLastName.classList.add("hidden");

        this.components.spanEmail = this.components.page.querySelector(this.selectors.spanEmail);
        this.components.spanEmail.classList.add("hidden");

        this.components.spanPassword = this.components.page.querySelector(this.selectors.spanPassword);
        this.components.spanPassword.classList.add("hidden");

        this.components.navigationButton = this.components.page.querySelector(this.selectors.navigationButton);
        this.components.navigationButton.addEventListener("click", (e) => {
            if(this.validate()){
                Events.dispatchNavigate(Routes.LOGIN_USER);
            }
            
        });


        
    }

    update() {

    }

    render() {
        return this.components.page;
    }
    //TODO improve validation mecanism (should display all erros instead of the first found one)
    validate(){
        if(this.components.firstNameInput.value.length < 2){
            this.components.spanFirstName.classList.remove("hidden");
            this.components.spanFirstName.innerText = "This field should have at least 2 letters";
            return false;
        }
        this.components.spanFirstName.classList.add("hidden");

        if( this.components.lastNameInput.value.length < 2){
            this.components.spanLastName.classList.remove("hidden");
            this.components.spanLastName.innerText = "This field should have at least 2 letters";
            return false;
        }
        this.components.spanLastName.classList.add("hidden");

        if(!this.validateEmail(this.components.emailInput.value)){
            this.components.spanEmail.classList.remove("hidden");
            this.components.spanEmail.innerText = "This field should have a valid email";
            return false;
        }
        this.components.spanEmail.classList.add("hidden");

        if(!this.validatePassword(this.components.passwordInput.value)){
            this.components.spanPassword.classList.remove("hidden");
            this.components.spanPassword.innerText = "The password must have at least 8 letters, contain a capital letter and 2 digits";
            return false;
        }
        this.components.spanPassword.classList.add("hidden");

        return true;
    }

    validateEmail(email){
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }

    validatePassword(password){
        if(password.length <8){
            return false;
        }
        if(!this.containsUpperCase(password)){
            return false;
        }
        if(!this.containsTwoDigits(password)){
            return false;
        }

        return true;
    }

    isUpperCase(char){    
        return char >= 'A' && char <= 'Z';
    }
    
    containsUpperCase(text){
        for( let i = 0; i < text.length; i++){
            if(this.isUpperCase(text[i])){
                return true;
            }
        }
        return false;
    }

    isNumber(char){    
        return char >= '0' && char <= '9';
    }

    containsTwoDigits(text){
        let digitsCount = 0;
        for( let i = 0; i < text.length; i++){
            if(this.isNumber(text[i])){
                digitsCount += 1;
                if(digitsCount >= 2){
                    return true;
                }
            }
        }
        return false;
    }

}
