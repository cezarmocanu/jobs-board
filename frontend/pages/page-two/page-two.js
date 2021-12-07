class PageTwo {
    selectors = {
        page: ".page-two"
    }

    components = {
        page: null
    }

    constructor() {
        this.init();
        Logger.info(this.components.page);
    }

    init() {
        this.components.page = document.querySelector(this.selectors.page);
    }

    update() {

    }

    render() {
        return this.components.page;
    }
}
