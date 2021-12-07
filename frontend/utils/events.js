class Events {
    static TYPE = {
        NAVIGATE: "NAVIGATE"
    };

    static dispatch (event_type, payload) {
        document.dispatchEvent(new CustomEvent(
            event_type,
            {
                detail: payload
            }
        ));
    }

    static dispatchNavigate (route) {
        Events.dispatch(Events.TYPE.NAVIGATE, {route});
    }
}