'use strict';

angular.module('newSomEnergiaWebformsApp')
    .service('AjaxHandler', ['cfg', 'uiHandler', '$http', '$q', '$log', function(cfg, uiHandler, $http, $q, $log) {

        var service = this;
        /// Joins asynchronous petitions to an API
        var Loader = function(attribute, url, errorCode, dataGetter) {
            var self = this;
            self.data = undefined;
            self.promise = undefined;
            self.waitingScopes = [];
            self.attribute = attribute;
            self.url = url;
            self.errorCode = errorCode;
            self.dataGetter = dataGetter;

            self.load = function(scope) {
                if (self.data !== undefined) {
                    scope[self.attribute] = self.data;
                    return;
                }
                self.waitingScopes.push(scope);
                self.preload();
            };

            self.preload = function() {
                if (self.promise !== undefined) {
                    return;
                }
                self.promise = true; // early reserve
                self.promise = service.dataRequest(self.url, self.errorCode);
                self.promise.then(
                    function (response) {
                        if (response.state !== cfg.STATE_TRUE) {
                            uiHandler.showErrorDialog('GET response state false recived (ref.003-'+self.errorCode+')');
                            return;
                        }
                        self.data = self.dataGetter(response);
                        while (true) {
                            if (self.waitingScopes.length === 0) { break; }
                            var s = self.waitingScopes.shift();
                            s[self.attribute] = self.data;
                        }
                    },
                    function (reason) { uiHandler.showErrorDialog('Get '+attribute+' failed ' + reason); }
                );
            };
        };

        this.languages = new Loader(
            'languages', 'data/idiomes', '002',
            function(response) { return response.data.idiomes; }
            );

        // TODO: Deprecated
        this.getLanguages = function($scope) {
            this.loadLanguages($scope);
        };

        this.loadLanguages = function($scope) {
            this.languages.load($scope);
        };

        this.preloadLanguages = function() {
            this.languages.preload();
        };

        this.states = new Loader(
            'provinces', 'data/provincies', '001',
            function(response) { return response.data.provincies; }
            );

        // TODO: Deprecated
        this.getStates = function($scope) {
            this.loadStates($scope);
        };
        this.loadStates = function($scope) {
            this.states.load($scope);
        };
        this.preloadStates = function() {
            this.states.preload();
        };

        // Get cities
        this.getCities = function($scope, selector, provinceId) {
            if (provinceId !== undefined) {
                var citiesPromise = this.dataRequest('data/municipis/' +  provinceId, '003');
                citiesPromise.then(
                    function (response) {
                        if (response.state === cfg.STATE_TRUE) {
                            if (selector === 1) {
                                $scope.cities = response.data.municipis;
                            } else if (selector === 2) {
                                $scope.cities2 = response.data.municipis;
                            }
                        } else {
                            uiHandler.showErrorDialog('GET response state false recived (ref.003-003)');
                        }
                    },
                    function (reason) { uiHandler.showErrorDialog('Update city select failed ' + reason); }
                );
                $scope.formListener();
            }
        };
        this.dataRequest = function(urlpath, errorCode) {
            var url = cfg.API_BASE_URL+urlpath;
            var deferred = $q.defer();
            $http.get(url)
                .success(function (response) {
                    if (response.status === cfg.STATUS_ONLINE) {
                        if (response.state !== cfg.STATE_TRUE) {
                            $log.error('AjaxHandler GET request ' + urlpath + ' error response recived', response);
                        }
                        deferred.resolve(response);
                    } else if (response.status === cfg.STATUS_OFFLINE) {
                        uiHandler.showErrorDialog('API server response status offline recived (ref.002-' + errorCode + ')');
                    } else {
                        uiHandler.showErrorDialog('API server response unknown status recived (ref.001-' + errorCode + ')');
                    }
                })
                .error(function (data) {
                    deferred.reject(data);
                });

            return deferred.promise;
        };

        // Async GET state call
        this.getStateRequest = function($scope, URL, errorCode) {
            var aborter = $q.defer();
            var deferred = $q.defer();
            deferred.promise.abort = function() {
                aborter.reject('Aborted');
            };
            $http.get(URL, {timeout: aborter} )
                .success(function (response) {
                    var msg;
                    if (response.status === cfg.STATUS_ONLINE) {
                        deferred.resolve(response);
                        $scope.formListener($scope.form);
                    } else if (response.status === cfg.STATUS_OFFLINE) {
                        msg = 'API server response status offline received (ref.002-' + errorCode + ')';
                        uiHandler.showErrorDialog(msg);
                        deferred.reject(msg);
                    } else {
                        msg = 'API server unknown status (ref.001-' + errorCode + ')';
                        uiHandler.showErrorDialog(msg);
                        deferred.reject(msg);
                    }
                })
                .error(function (data, status, headers, config, statusText) {
                    $log.debug('Error on getStateReq:', [data, status, headers, config, statusText]);
                    deferred.reject(data);
                });

            return deferred.promise;
        };

        // Async POST call
        this.postRequest = function($scope, URL, postData, errorMsg) {
            var deferred = $q.defer();
            $http.post(URL, postData)
                .success(function (response) {
                    if (response.status === cfg.STATUS_ONLINE) {
                        if (response.state === cfg.STATE_TRUE) {
                            $log.log('AjaxHandler POST request ' + URL + ' response recived', response);
                            //uiHandler.showWellDoneDialog();
                        } else {
                            $log.error('AjaxHandler POST request ' + URL + ' error response recived', response);
                        }
                        deferred.resolve(response);
                    } else if (response.status === cfg.STATUS_OFFLINE) {
                        uiHandler.showErrorDialog('API server status offline (ref.002-' + errorMsg + ')');
                    } else {
                        uiHandler.showErrorDialog('API server unknown status (ref.001-' + errorMsg + ')');
                    }
                })
                .error(function (data) {
                    deferred.reject(data);
                });

            return deferred.promise;
        };

    }]);
