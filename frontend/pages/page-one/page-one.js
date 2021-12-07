class PageOne {
    selectors = {
        page: ".page-one",
        navigationButton: "#navigation"
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

        this.components.navigationButton = this.components.page.querySelector(this.selectors.navigationButton);
        this.components.navigationButton.onclick = function(e) {
            Events.dispatchNavigate(Routes.TWO);
        };
        
    }

    update() {

    }

    render() {
        return this.components.page;
    }
}
