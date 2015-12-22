'use strict';

angular.module('newSomEnergiaWebformsApp')
.directive('personalData', function () {
    return {
        restrict: 'E',
        scope: {
            form: '=model',
            onchanged: '&?',
        },
        templateUrl: 'scripts/components/personaldata.html',
        controller: 'personalDataCtrl',
        link: function(scope, element, attrs, personalDataCtrl) {
            personalDataCtrl.init(element, attrs);
        },
    };
})
.controller('personalDataCtrl', function(
        cfg,
        AjaxHandler,
        ValidateHandler,
        $scope,
        $log
        ) {
    var self = this;
    self.init = function(/*element, attrs*/) {
    };

    $scope.form.isReady = function() {
        return (
            $scope.form.language &&
            $scope.form.name !== undefined &&
            (
                $scope.form.usertype === 'company' || (
                    $scope.form.usertype === 'person' &&
                    $scope.form.surname !== undefined
                )
            ) &&
            (
                $scope.form.usertype === 'person' || (
                    $scope.form.usertype === 'company' &&
                    $scope.form.representantdni !== undefined &&
                    $scope.form.representantname !== undefined
                )
            ) &&
            $scope.form.dni !== undefined &&
            $scope.form.email1 !== undefined &&
            $scope.form.email2 !== undefined &&
            $scope.form.email1 === $scope.form.email2 &&
            $scope.form.phone1 !== undefined &&
            $scope.form.address !== undefined &&
            $scope.form.postalcode !== undefined &&
            $scope.form.province !== undefined &&
            $scope.form.city !== undefined &&
            $scope.dniRepresentantIsInvalid === false &&
            $scope.emailIsInvalid === false &&
            $scope.emailNoIguals === false &&
            $scope.postalCodeIsInvalid === false &&
            $scope.form.accept === true &&
            true
            );
    };
    $scope.form.setLanguage = function(languageCode) {
        for (var i=0; i<$scope.languages.length; i++) {
            if ($scope.languages[i].code !== languageCode) { continue; }
            $scope.form.language = $scope.languages[i];
            return;
        }
        $scope.form.language = $scope.languages[0];
    };

    $scope.languages = [];
    $scope.provinces = [];
    $scope.cities = [];
    $scope.messages = null;
    $scope.form.usertype = 'person';
    $scope.form.dniEditor = {};
    $scope.form.representantdniEditor = {};

    $scope.dniRepresentantIsInvalid = false;
    $scope.dniDuplicated = false;
    $scope.emailIsInvalid = false;
    $scope.emailNoIguals = false;
    $scope.postalCodeIsInvalid = false;

    // GET LANGUAGES
    AjaxHandler.getLanguages($scope);

    // POSTAL CODE VALIDATION
    var checkPostalCodeTimer = false;
    ValidateHandler.validatePostalCode($scope, 'form.postalcode', checkPostalCodeTimer);

    // TELEPHONE VALIDATION
    ValidateHandler.validateTelephoneNumber($scope, 'form.phone1');
    ValidateHandler.validateTelephoneNumber($scope, 'form.phone2');

    // DNI VALIDATION
    var checkDniTimer = false;
    ValidateHandler.validateDni($scope, 'form.dni', checkDniTimer);
    var checkDniRepresentantTimer = false;
    ValidateHandler.validateDni($scope, 'form.representantdni', checkDniRepresentantTimer);
    // EMAIL VALIDATION
    var checkEmail1Timer = false;
    ValidateHandler.validateEmail1($scope, 'form.email1', checkEmail1Timer);
    var checkEmail2Timer = false;
    ValidateHandler.validateEmail2($scope, 'form.email2', checkEmail2Timer);

    $scope.formListener = function() {
//        $log.debug('Personal data changed:', $scope.form);
        if ($scope.onchanged) {
            $scope.onchanged();
        }
    };

})
;


