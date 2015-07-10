var base_url="http://localhost/ums/";
define(['angularAMD', 'ngRoute','flash','angular-loading-bar','ngAnimate','uniqueField','input_match','angular-chart'], function (angularAMD) {
var app = angular.module('angularapp', ['ngRoute','flash','angular-loading-bar','ngAnimate','uniqueField','input_match','angular-chart']);  
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/dashboard', angularAMD.route({
                title : 'Dashboard',
                controller : 'dashboardCtrl',
                templateUrl : base_url+'angular/partials/admin/dashboard.php',
                controllerUrl: base_url+'angular/js/admin/controllers/dashboardCtrl.js'
            }))

//.......................all routing ............//
 .otherwise({
            redirectTo : '/dashboard'
        });
}]);
app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);


  // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);

});
