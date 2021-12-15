class LoginUser {
    selectors = {
        page: ".login-user",
        navigationButton: "#navigation",
        inputEmail: "#inputEmail",
        inputPassword: "#inputPassword",
        spanEmail: "#spanEmail",
        spanPassword: "#spanPassword"
    }

    components = {
        page: null
    }

    constructor() {
        this.init();
    }

    init() {
        this.components.page = document.querySelector(this.selectors.page);

        this.components.inputEmail = this.components.page.querySelector(this.selectors.inputEmail);
        this.components.inputPassword = this.components.page.querySelector(this.selectors.inputPassword);

        this.components.spanEmail = this.components.page.querySelector(this.selectors.spanEmail);
        this.components.spanEmail.classList.add("hidden");

        this.components.spanPassword = this.components.page.querySelector(this.selectors.spanPassword);
        this.components.spanPassword.classList.add("hidden");

        this.components.navigationButton = this.components.page.querySelector(this.selectors.navigationButton);
        this.components.navigationButton.addEventListener("click", (e) =>{
            if(this.validate()){
                Events.dispatchNavigate(Routes.REGISTER_USER);
            }
        });
    }

    update() {

    }

    render() {
        return this.components.page;
    }

    validate(){
        if(!this.validateEmail(this.components.inputEmail.value)){
            this.components.spanEmail.classList.remove("hidden");
            this.components.spanEmail.innerText = "This field should have a valid email";
            return false;
        }
        this.components.spanEmail.classList.add("hidden");

        if(this.components.inputPassword.value.length < 2){
            this.components.spanPassword.classList.remove("hidden");
            this.components.spanPassword.innerText = "This field should have a valid password, at least 2 letters";
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
}
