'use strict'
app.factory('getUserInfo', ['$rootScope', '$resource', function($rootScope, $resource) {
    return {
        userInfo: function(user) {
            return $resource("https://api.github.com/users/" + user, {}, {
                get: {
                    method: "GET",
                    isArray: false
                }
            });
        }
    };
}]);