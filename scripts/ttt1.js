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
        title: _t('app.public.tour.welcome.welcome.title'),
        content: _t('app.public.tour.welcome.welcome.content'),
        placement: 'bottom',
        orphan: true
      });
      uitour.createStep({
        selector: '.nav-primary li.home-link',
        stepId: 'home',
        order: 1,
        title: _t('app.public.tour.welcome.home.title'),
        content: _t('app.public.tour.welcome.home.content'),
        placement: 'right'
      });
      uitour.createStep({
        selector: '.nav-primary li.public-calendar-link',
        stepId: 'calendar',
        order: 2,
        title: _t('app.public.tour.welcome.calendar.title'),
        content: _t('app.public.tour.welcome.calendar.content'),
        placement: 'right'
      });
      uitour.createStep({
        selector: '.nav-primary li.reserve-machine-link',
        stepId: 'machines',
        order: 3,
        title: _t('app.public.tour.welcome.machines.title'),
        content: _t('app.public.tour.welcome.machines.content'),
        placement: 'right'
      });
    
      uitour.createStep({
        selector: '.nav-primary li.reserve-training-link',
        stepId: 'trainings',
        order: 5,
        title: _t('app.public.tour.welcome.trainings.title'),
        content: _t('app.public.tour.welcome.trainings.content'),
        placement: 'right'
      });
      uitour.createStep({
        selector: '.nav-primary li.reserve-event-link',
        stepId: 'events',
        order: 6,
        title: _t('app.public.tour.welcome.events.title'),
        content: _t('app.public.tour.welcome.events.content'),
        placement: 'right'
      });
      uitour.createStep({
        selector: '.nav-primary li.projects-gallery-link',
        stepId: 'projects',
        order: 7,
        title: _t('app.public.tour.welcome.projects.title'),
        content: _t('app.public.tour.welcome.projects.content'),
        placement: 'right'
      });
      uitour.createStep({
        selector: '.nav-primary li.plans-link',
        stepId: 'plans',
        order: 8,
        title: _t('app.public.tour.welcome.plans.title'),
        content: _t('app.public.tour.welcome.plans.content'),
        placement: 'right'
      });

      uitour.createStep({
        selector: '.navbar.header li.about-page-link',
        stepId: 'about',
        order: 10,
        title: _t('app.public.tour.welcome.about.title'),
        content: _t('app.public.tour.welcome.about.content'),
        placement: 'bottom',
        popupClass: 'shift-right-40'
      });
      uitour.createStep({
        selector: '.navbar.header li.notification-center-link',
        stepId: 'notifications',
        order: 11,
        title: _t('app.public.tour.welcome.notifications.title'),
        content: _t('app.public.tour.welcome.notifications.content'),
        placement: 'bottom'
      });
      uitour.createStep({
        selector: '.navbar.header li.user-menu-dropdown',
        stepId: 'profile',
        order: 12,
        title: _t('app.public.tour.welcome.profile.title'),
        content: _t('app.public.tour.welcome.profile.content'),
        placement: 'bottom',
        popupClass: 'shift-left-80'
      });
    
      uitour.createStep({
        selector: 'body',
        stepId: 'customize',
        order: 18,
        title: _t('app.public.tour.welcome.customize.title'),
        content: _t('app.public.tour.welcome.customize.content'),
        placement: 'bottom',
        orphan: 'true'
      });
    uitour.start();
}
