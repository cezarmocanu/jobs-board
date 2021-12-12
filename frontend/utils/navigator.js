class Navigator{
    static INTITIAL_ROUTE = Routes.ONE;
    static ROUTE_COMPONENTS = null
    static CURRENT_ROUTE = null;
    static CURRENT_COMPONENT = null;

    static init(){
        Navigator.ROUTE_COMPONENTS = {
            [Routes.ONE] : new PageOne(),
            [Routes.TWO]: new PageTwo()
        };

        Navigator.navigateTo(Navigator.INTITIAL_ROUTE);
    }

    static navigateTo(route) {
        //TODO Add check so that route is inside Routes keys
        //And dev_log error in case it isn't

        Logger.info(`Navigated to route [${route}]`);
        Navigator.CURRENT_COMPONENT = Navigator.ROUTE_COMPONENTS[route];
        Navigator.CURRENT_ROUTE = route;
    }

    static getCurrent() {
        return {
            route: Navigator.CURRENT_ROUTE,
            component: Navigator.CURRENT_COMPONENT
        };
    }
}
