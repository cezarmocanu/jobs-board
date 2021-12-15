class PageTwo {
    selectors = {
        page: ".page-two",
        navigationButton: "#navigation"
    }

    components = {
        page: null
    }

    constructor() {
        this.init();
    }

    init() {
        this.components.page = document.querySelector(this.selectors.page);

        this.components.navigationButton = this.components.page.querySelector(this.selectors.navigationButton);
        this.components.navigationButton.addEventListener("click", function(){
            Events.dispatchNavigate(Routes.REGISTER_USER);
        });
    }

    update() {

    }

    render() {
        return this.components.page;
    }
}
