angular.module('starter.controllers', ['pascalprecht.translate'])

   // Translations
   .config(['$translateProvider', function ($translateProvider) {
      $translateProvider.translations('en', {
         'ENTERLOGINDATA': 'Please enter your Duerr Dental Net logininformation:',
         'ENTERLOGINDATAMESSAGE': 'Please enter complete login data'
      });

      $translateProvider.translations('de', {
         'ENTERLOGINDATA': 'Geben Sie hier Ihre Duerr Dental Net Anmeldedaten ein:',
         'ENTERLOGINDATAMESSAGE': 'Bitte Logindaten vollständig eingeben'
      });

      $translateProvider.preferredLanguage('de');
   }])

// Services:

   // Set or get search value (scanned or from input)
   .service('SearchValueService', function () {
      console.log("SearchValueService setup done");
      return {
         // Zu "Letzte Suchen" hinzufügen
         addSuchbegriff: function (suchbegriff) {
            if (localStorage["mylastsearches"] == undefined) {
               var a = [];
               a.unshift(suchbegriff);
               window.localStorage["mylastsearches"] = JSON.stringify(a);
               //$scope.$apply;

               console.log("searches setted: " + suchbegriff);
            } else {
               var a = [];
               a = JSON.parse(localStorage["mylastsearches"]);

               a.unshift(suchbegriff);
               window.localStorage["mylastsearches"] = JSON.stringify(a);
               console.log("searches setted: " + suchbegriff);
            }
         },
         //Letzte Suchen holen
         getSearches: function () {
            var suchbegriffe = [];
            if (localStorage["mylastsearches"] == undefined) {
            } else {
               var suchbegriffe = JSON.parse(localStorage["mylastsearches"]);
               console.log("searches got: " + suchbegriffe.length);
            }
            return suchbegriffe;
         },
         alerttest: function () {
            alert('TEST');
         },
         setSearchValue: function (searchvalue) {
            window.localStorage['searchvalue'] = searchvalue;
            console.log("SearchValueService setted: " + searchvalue);
         },
         getSearchValue: function () {
            console.log("SearchValueService got: " + window.localStorage['searchvalue']);
            return window.localStorage['searchvalue'] + "";
         },
         setArticleNo: function (searchvalue) {
            window.localStorage['articleno'] = searchvalue;
            console.log("SearchValueService setted: " + searchvalue);
         },
         getArticleNo: function () {
            console.log("SearchValueService got: " + window.localStorage['articleno']);
            return window.localStorage['articleno'] + "";
         }
      }
   })

   // Set or get login values
   .service('UserLoginService', function () {
      console.log("SearchValueService setup done");
      return {

         // get or set userdata
         setUserName: function (username) {
            window.localStorage['username'] = username;
            console.log("username setted: " + username);
         },
         setUserPassword: function (userpassword) {
            window.localStorage['userpassword'] = userpassword;
            console.log("userpassword setted: " + userpassword);
         },
         getUserPassword: function () {
            console.log("userpassword got: " + window.localStorage['userpassword']);
            return window.localStorage['userpassword'] + "";
         },
         getUserName: function () {
            console.log("username got: " + window.localStorage['username']);
            return window.localStorage['username'] + "";
         }
      }
   })

// Controller:

   .controller('getLastsearchCtrl', function ($scope, $http, $ionicLoading, $state, SearchValueService) {

      var data = SearchValueService.getSearches();
      $scope.searches = data;

      // Suche
      $scope.searchprodukteclick = function (searchfor) {
         // Set the searchvalue in the service for later useage
         $ionicLoading.show();

         SearchValueService.setSearchValue(searchfor);
         $state.go("app.search");
      };

   })

   .controller('AppCtrl', function ($http, $scope, $ionicModal, $state, $timeout, $ionicLoading, SearchValueService, UserLoginService) {
      // Form data for the login modal
      $scope.loginData = {};

      // Create the filter modal that we will use later
      $ionicModal.fromTemplateUrl('templates/filter.html', {
         scope: $scope
      }).then(function (modal) {
         $scope.modal = modal;
      });

      // Triggered in the filter modal to close it
      $scope.closeFilter = function () {
         $scope.modal.hide();
      };

      // Triggered in the filter modal to apply and close it
      $scope.applyFilter = function () {
         $scope.modal.hide();
      };

      // Open the filter modal
      $scope.showFilter = function () {
         $scope.modal.show();
      };

      // Start Scan (for Search)
      $scope.scanBarcode = function () {
         $ionicLoading.show();

         cordova.plugins.barcodeScanner.scan(
            function (result) {
               //alert("Result: " + result.text + "\n" +
               //"Format: " + result.format + "\n" +
               //"Cancelled: " + result.cancelled);

               // Set the scanned value in the service for later useage
               SearchValueService.setArticleNo(result.text);
               $state.go("app.scanned");

               if (result.cancelled) {
                  $ionicLoading.hide();
                  //if(ionic.Platform.is('ios')){
                  //   window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                  //}
                  console.log("Scanner cancelled");
               }
            });
      };

      // Suche
      $scope.searchprodukte = function (searchfor) {
         // Set the searchvalue in the service for later useage
         //alert(searchfor.nach);
         $ionicLoading.show();
         var today = new Date();
         // alert(today);
         var dd = today.getDate();
         var mm = today.getMonth() + 1; //January is 0!
         var yyyy = today.getFullYear();

         if (dd < 10) {
            dd = '0' + dd
         }

         if (mm < 10) {
            mm = '0' + mm
         }
         var minute = today.getMinutes();
         var hour = today.getHours();
         today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
         var sucharray = [{
            Bezeichnung: searchfor.nach,
            Datum: today
         }
         ];
         SearchValueService.addSuchbegriff(sucharray);
         SearchValueService.setSearchValue(searchfor.nach);
         $state.go("app.search");
      };

      // open Registrationform
      $scope.openreg = function () {
         window.open('http://www.duerrdental.com/', '_blank', 'location=yes,EnableViewPortScale=yes');
      };

      // open demomode
      $scope.demomode = function () {
         $state.go("app.browse");
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function (loginData) {
         console.log('Doing login', $scope.loginData);
         var username = $scope.loginData.username;
         var password = $scope.loginData.password;
         $ionicLoading.show();
         //var httpReq = new plugin.HttpRequest();

         var dataObj = 'user=' + username + '&pw=' + password + '&app_id=DD-ServiceAPP&action=auth&debug=0&app_lang=de';
         $scope.nothingfound = "";

         $http({
            method: 'POST',
            url: 'http://dlc.duerrdental.com/api/',
            data: dataObj,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
         }).success(function (data, status, headers, config) {
            $scope.loginresponsedata = data;
            //$scope.articles = JSON.stringify(data);
            var statusresponse = $scope.loginresponsedata.status;
            var loggedin = false;
            var returnstatus = "";
            if (angular.isDefined(statusresponse)) {
               if (angular.isDefined(statusresponse.USER_DATA_VALID)) {
                  loggedin = true;
                  $state.go("app.browse");
               }
               else if (angular.isDefined(statusresponse.USER_INVALID)) {
                  loggedin = false;
                  returnstatus = statusresponse.USER_INVALID;
                  alert(returnstatus);
               }
               else if (angular.isDefined(statusresponse.PW_INVALID)) {
                  loggedin = false;
                  returnstatus = statusresponse.PW_INVALID;
                  alert(returnstatus);

               }
               else {
                  alert("something went wrong");
               }
            }

            $ionicLoading.hide();
         });

      };

      // open Registration Form
      $scope.registeruser = function () {
         window.open("http://www.duerrdental.net/de/home/ihre-registrierung/", '_blank', 'location=yes,EnableViewPortScale=yes');
      };

      // open userdata Form
      $scope.forgotdata = function () {
         window.open("http://www.duerrdental.net/de/home/ihre-registrierung/?tx_felogin_pi1%5Bforgot%5D=1", '_blank', 'location=yes,EnableViewPortScale=yes');
      };
   })

   .controller('PlaylistsCtrl', function ($scope) {
      $scope.playlists = [
         {title: 'Reggae', id: 1},
         {title: 'Chill', id: 2},
         {title: 'Dubstep', id: 3},
         {title: 'Indie', id: 4},
         {title: 'Rap', id: 5},
         {title: 'Cowbell', id: 6}
      ];
   })

   .controller('getArticleByScanCtrl', function ($scope, $http, $ionicLoading, SearchValueService) {
      //$scope.getArticle =  function() {
      $ionicLoading.show();
      // Define Standard POST Parameter
      var formData = {
         user: "test@test.de",
         pw: "test1114",
         app_id: "DD-ServiceAPP",
         action: "product_search",
         debug: "0",
         app_lang: "de",
         article_name: "pro"
      };
      var postData = JSON.stringify(formData);
      //var httpReq = new plugin.HttpRequest();

      var searchvalue = SearchValueService.getArticleNo();

      var dataObj = 'user=test@test.de&pw=test1114&app_id=DD-ServiceAPP&action=product_search&debug=0&app_lang=de&article_nr=' + searchvalue + '&article_name=' + searchvalue + '&serial_no=' + searchvalue;
      $scope.nothingfound = "";

      $http({
         method: 'POST',
         url: 'http://dlc.duerrdental.com/api/',
         data: dataObj,
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function (data, status, headers, config) {
         $scope.articles = data;
         $ionicLoading.hide();
         console.log($scope.articles.status);
         var articlecountstring = $scope.articles.status.PRODUCT_SEARCH_RESULTS_FOUND.replace(/[^0-9\.]+/g, "");
         articlecountstring = articlecountstring.replace(".", "");
         $scope.articlecount = articlecountstring;

         if ($scope.articles.status.PRODUCT_SEARCH_RESULT_EMPTY = "Die Produktsuche lieferte kein Ergebnis.") {

            $scope.nothingfound = "Die Produktsuche lieferte kein Ergebnis.";

         }
         else {
            $scope.nothingfound = "";

         }

      });
      //};

   })

   .controller('getArticleDocs', function ($scope, $http, $ionicLoading, SearchValueService) {
      //$scope.getArticle =  function() {
      $ionicLoading.show();
      var httpReq = new plugin.HttpRequest();

      var searchvalue = SearchValueService.getArticleNo();

      httpReq.post("http://dlc.duerrdental.com/api/", {
         user: "test@test.de",
         pw: "test1114",
         app_id: "DD-ServiceAPP",
         action: "document_search",
         debug: "0",
         app_lang: "de",
         article_nr: searchvalue
      }, function (err, data) {
         //alert(data);
         $scope.articles = JSON.parse(data);
         $ionicLoading.hide();
         //$scope.articles = JSON.stringify(data);
      });

      //};

   })

   .controller('loginCtrl', function ($scope, $http, $ionicLoading, UserLoginService) {
      //$scope.getArticle =  function() {
      $ionicLoading.show();
      var httpReq = new plugin.HttpRequest();

      var searchvalue = SearchValueService.getArticleNo();

      httpReq.post("http://dlc.duerrdental.com/api/", {
         user: "test@test.de",
         pw: "test1114",
         app_id: "DD-ServiceAPP",
         action: "document_search",
         debug: "0",
         app_lang: "de",
         article_nr: searchvalue
      }, function (err, data) {
         //alert(data);
         $scope.articles = JSON.parse(data);
         $ionicLoading.hide();
         //$scope.articles = JSON.stringify(data);
      });

      //};

   })

   .controller('getArticleBySearchCtrl', function ($scope, $http, $ionicLoading, SearchValueService, $state) {

      $ionicLoading.show();
      // Define Standard POST Parameter
      //var httpReq = new plugin.HttpRequest();

      var searchvalue = SearchValueService.getSearchValue();
      console.log(searchvalue);

      var dataObj = 'user=test@test.de&pw=test1114&app_id=DD-ServiceAPP&action=product_search&debug=0&app_lang=de&article_nr=' + searchvalue + '&article_name=' + searchvalue + '&serial_no=' + searchvalue;
      $scope.nothingfound = "";

      $http({
         method: 'POST',
         url: 'http://dlc.duerrdental.com/api/',
         data: dataObj,
         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function (data, status, headers, config) {
         $scope.articles = data;
         $ionicLoading.hide();
         console.log($scope.articles.status);
         var articlecountstring = $scope.articles.status.PRODUCT_SEARCH_RESULTS_FOUND.replace(/[^0-9\.]+/g, "");
         articlecountstring = articlecountstring.replace(".", "");
         $scope.articlecount = articlecountstring;

         if ($scope.articles.status.PRODUCT_SEARCH_RESULT_EMPTY = "Die Produktsuche lieferte kein Ergebnis.") {

            $scope.nothingfound = "Die Produktsuche lieferte kein Ergebnis.";

         }
         else {
            $scope.nothingfound = "";

         }

      });

      // open opendetails of Device
      $scope.opendetails = function (serialno) {
         // Set the selected value in the service for later useage
         SearchValueService.setArticleNo(serialno);
         $state.go("app.scanned");
      };

   })

   .controller('PlaylistCtrl', function ($scope, $stateParams) {
   });
