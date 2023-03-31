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
      if ($scope.$root.modules.spaces) {
        uitour.createStep({
          selector: '.nav-primary li.reserve-space-link',
          stepId: 'spaces',
          order: 4,
          title: _t('app.public.tour.welcome.spaces.title'),
          content: _t('app.public.tour.welcome.spaces.content'),
          placement: 'right'
        });
      }
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
        selector: '.nav-primary .admin-section',
        stepId: 'admin',
        order: 9,
        title: _t('app.public.tour.welcome.admin.title', { ROLE: _t(`app.public.common.${$scope.currentUser.role}`) }),
        content: _t('app.public.tour.welcome.admin.content'),
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
      if ($scope.status.news && settingsPromise.home_blogpost) {
        uitour.createStep({
          selector: 'news',
          stepId: 'news',
          order: 13,
          title: _t('app.public.tour.welcome.news.title'),
          content: _t('app.public.tour.welcome.news.content'),
          placement: 'bottom'
        });
      }
      if ($scope.status.projects) {
        uitour.createStep({
          selector: 'projects',
          stepId: 'last_projects',
          order: 14,
          title: _t('app.public.tour.welcome.last_projects.title'),
          content: _t('app.public.tour.welcome.last_projects.content'),
          placement: 'right'
        });
      }
      if ($scope.status.twitter) {
        uitour.createStep({
          selector: 'twitter',
          stepId: 'last_tweet',
          order: 15,
          title: _t('app.public.tour.welcome.last_tweet.title'),
          content: _t('app.public.tour.welcome.last_tweet.content'),
          placement: 'left'
        });
      }
      if ($scope.status.members) {
        uitour.createStep({
          selector: 'members',
          stepId: 'last_members',
          order: 16,
          title: _t('app.public.tour.welcome.last_members.title'),
          content: _t('app.public.tour.welcome.last_members.content'),
          placement: 'left'
        });
      }
      if ($scope.status.events) {
        uitour.createStep({
          selector: 'events',
          stepId: 'next_events',
          order: 17,
          title: _t('app.public.tour.welcome.next_events.title'),
          content: _t('app.public.tour.welcome.next_events.content'),
          placement: 'top'
        });
      }
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
