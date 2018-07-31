(function () {

    var bookmarksObj;//= { name: '', avatar: '' };
    var bmArry = new Array();

    app.controller('bmCtrl', function ($scope, $http) {
        $scope.countBm = sessionStorage.length; //count of saved bookmarks

        //loop over session, parsing into JSON in order to retrieve the data as a key-value structure
        for (var i = 0; i < sessionStorage.length; i++) {
            bookmarksObj = JSON.parse(sessionStorage.getItem(i));
            bmArry.push(bookmarksObj);// save in a tmp array
        }
        // the entire array will be alternate in ng-repeat directive
        $scope.bms = bmArry;

    });


}).call(angular);
