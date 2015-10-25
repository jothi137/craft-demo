//Service Factory

craft.factory('mainService', ['$http', function ($http) {
    return {
        request: function request(reqConfig, onSuccess, onFailure) {

            if (!reqConfig.method) {
                reqConfig.method = 'GET';
            }

            reqConfig.params = reqConfig.params || {};

            $http(reqConfig).success(onSuccess).error(onFailure);
        }
    }
}]);