// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'monospaced.elastic'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();

        }

        ionic.Platform.isFullScreen = true;
    });
})

.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
   }])
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.form.checkbox('square');
        $ionicConfigProvider.backButton.text('');
        // Patrick 28.06.15 11:52
        $ionicConfigProvider.backButton.previousTitleText(false);


        $stateProvider

            .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })

        .state('app.search', {
            url: "/search",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/search.html",
                    controller: "getArticleBySearchCtrl"
                        //reloadOnSearch: false
                }
            }
        })

        .state('app.registerdevice', {
            url: "/registerdevice",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/registerdevice.html",
                    controller: "registerDeviceCtrl"
                }
            }
        })


        .state('app.scanned', {
            url: "/scanned",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/scanned.html"
                }
            }
        })

        .state('app.regdevice', {
            url: "/regdevice",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/regdevice.html",
                    controller: "getRegdeviceCtrl"
                }
            }
        })

        .state('app.service', {
            url: "/service",
            views: {
                'menuContent': {
                    templateUrl: "templates/service.html",
                    controller: "ServiceCtrl"
                }
            }
        })

        .state('app.redirect', {
            url: "/redirect",
            views: {
                'menuContent': {
                    templateUrl: "templates/redirect.html",
                    controller: 'RedirectCtrl'
                }
            }
        })

        .state('app.firstredirect', {
            url: "/firstredirect",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/firstredirect.html",
                    controller: 'FirstRedirectCtrl'
                }
            }
        })

        .state('app.intro', {
            url: "/intro",
            views: {
                'menuContent': {
                    templateUrl: "templates/intro.html",
                    controller: 'IntroCtrl'
                }
            }
        })

        .state('app.browse', {
            url: "/browse",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/browse.html",
                    controller: 'BrowseController'
                }
            }
        })

        .state('app.searchproducts', {
            url: "/searchproducts",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/searchproducts.html"
                }
            }
        })

        .state('app.einstellungen', {
            url: "/einstellungen",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/einstellungen.html",
                    controller: 'SettingsController'
                }
            }
        })

        .state('app.home', {
            url: "/home",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: 'DragController'
                }
            }
        })

        .state('app.impressum', {
            url: "/impressum",
            views: {
                'menuContent': {
                    templateUrl: "templates/impressum.html"
                }
            }
        })

        .state('app.geraet', {
            url: "/geraet",
            views: {
                'menuContent': {
                    templateUrl: "templates/geraet.html"
                }
            }
        })

        .state('app.dokumente', {
            url: "/dokumente",
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: "templates/dokumente.html"
                    }
                }
            })
        
        

        .state('app.geraete', {
            url: "/geraete",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/geraete.html",
                    controller: 'HistoryCtrl'

                }
            }
        })

        .state('app.reggeraete', {
            url: "/reggeraete",
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: "templates/reggeraete.html",
                    controller: 'GetregCtrl'

                }
            }
        })

        .state('app.downloads', {
            url: "/downloads",
            views: {
                'menuContent': {
                    templateUrl: "templates/downloads.html",
                    controller: 'DownloadHistoryCtrl'

                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/firstredirect');
    });