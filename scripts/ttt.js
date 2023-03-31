const injector = function () {
    // return angular.element(document.getElementById("rootApp")).injector();
    return angular.element(document.body).injector();
};
function calll() {
    alert("ggg")
}
function calll2() {

    var uiTourService=injector().get("uiTourService")
    console.log(uiTourService)
    const uitour = uiTourService.getTourByName('welcome');
    uitour.createStep({
        selector: 'body',
        stepId: 'welcome',
        order: 0,
        title:'app.public.tour.welcome.welcome.title',
        content: 'app.public.tour.welcome.welcome.content',
        placement: 'bottom',
        orphan: true
    });
    uitour.start();
}
