document.addEventListener("DOMContentLoaded", function(){
    App.init();
    App.render();
});

document.addEventListener(Events.TYPE.NAVIGATE, function(event){
    Navigator.navigateTo(event.detail.route);
    App.render();
});


class App {
    static init(){
        Navigator.init();
    }

    static update(){

    }

    static render(){
        document.body.innerHTML = "";
        document.body.appendChild(Navigator.getCurrent().component.render());
    }
}