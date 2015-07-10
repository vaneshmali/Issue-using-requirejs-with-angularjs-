//* main.js */
var base_url="http://localhost/ums/angular/js";
require.config({ 
    paths: {
        'angular': base_url+'/lib/angular.min',
        'ngRoute': base_url+'/lib/angular-route.min',
        'flash': base_url+'/lib/angular-flash',
        'angular-loading-bar': base_url+'/lib/loading-bar.min',
        'ngAnimate': base_url+'/lib/angular-animate.min',
        'ui.bootstrap': base_url+'/lib/ui-bootstrap-tpls-0.12.0',
        'uniqueField': base_url+'/admin/directives/angular-unique',
        'input_match': base_url+'/admin/directives/angular-input-match',
        'uniqueEdit': base_url+'/admin/directives/angular-unique-edit',
        'angularAMD': base_url+'/lib/angularAMD.min',
        'chart.js': base_url+'/lib/Chart.min',
        'angular-chart': base_url+'/lib/angular-chart.min',
        'app': base_url+'/admin/app',

    },
    waitSeconds: 0,
     shim: { 
     'angular': { exports: 'angular'},
    'angularAMD': { deps: ['angular']},
    'angular-chart': { deps: ['angular','chart.js']},
    'ngRoute':{ deps: ['angular']},
    'angular-loading-bar':{ deps:['angular'] },
    'ngAnimate': { deps:['angular'] } ,
    'ui.bootstrap': {deps: ['angular'] },
    'uniqueField': {deps: ['angular'] },
    'input_match': {deps: ['angular'] },
    'uniqueEdit': {deps: ['angular'] },
    'flash': {deps: ['angular'] },
    },
    deps: ['app']
});
