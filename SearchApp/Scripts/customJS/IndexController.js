(function () {

    var txtSearchUrl = "https://api.github.com/search/repositories?q="; //the given url to search for the key
    var txtSearch = "";
    var bookmarksObj = { name: '', avatar: '' };

    app.controller('searchCtrl', function ($scope, $http) {
        //clicking the search button or pressing the Enter button:
        $scope.onClickSearch = function () {
            if ($scope.searchKey==undefined) {
                alert("Please make sure to insert a key to search");
               return;
            }
            txtSearch = txtSearchUrl + $scope.searchKey; //set the entire url to search by
            $scope.searchTitle = "Search Results: ";
            $scope.keyInUrl = "search's been made for url: " + txtSearch; //user indication

            //get the API data 
            $http.get(txtSearch).then(function (response) {
                $scope.countRes = "found " + response.data.items.length + " items";
                //alternate the data in ng-repeat directive
                $scope.searchResults = response.data.items;
            });

            //save bookmark into session by using tmp var bookmarksObj in a key-value structure
            //containing the keys as asked: name, owner avatar
            $scope.saveBookmark = function (fullRepositoryName, avatar) {    
                bookmarksObj.name = fullRepositoryName;
                bookmarksObj.avatar = avatar;

                //item save into session, while the key of the session is increased by 1 (starting from 0)
                sessionStorage.setItem(sessionStorage.length, JSON.stringify(bookmarksObj));              

                $scope.countBms = ", "+sessionStorage.length + " bookmarks saved";
            }
        };
    });


}).call(angular);