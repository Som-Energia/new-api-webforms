'use strict';

angular.module('SomEnergiaWebForms')
    .controller('OrderCtrl', function (cfg, ApiSomEnergia, ValidateHandler, uiHandler, $scope, $http, $routeParams, $translate, $timeout, $window, $log) {

        // INIT
        $scope.developing = cfg.DEVELOPMENT;
        // MUST APPLY TO EMBED WITH WORDPRESS (detects inside frame)
        if (window !== window.top) { // Inside a frame
            try {
                document.domain = cfg.BASE_DOMAIN;
            } catch(err) {
                console.log('While setting document domain:', err);
            }
        }

        // Just when developing, show untranslated strings instead of falling back to spanish
        if (!$scope.developing ) {
            $translate.fallbackLanguage('es');
        }
        if ($routeParams.locale !== undefined) {
            $translate.use($routeParams.locale);
        }

        $scope.showAll = false;
        // To false to debug one page completion state independently from the others
        $scope.waitPreviousPages = true;

        $scope.form = {};
        $scope.form.ownerIsMember='';
        $scope.form.phases = undefined;
        $scope.form.discriminacio = undefined;
        $scope.form.choosepayer = cfg.PAYER_TYPE_TITULAR;
        $scope.form.address = {};
        $scope.form.addressNumber = {};
        $scope.form.addressFloor = {};
        $scope.form.addressDoor = {};
        $scope.form.postalcode = undefined;
        $scope.form.cupsAddress = '';
        $scope.form.invoice = {};
        $scope.form.documentation = {};
        $scope.initForm = {};
        $scope.formsoci = {};
        $scope.ibanEditor = {};
        $scope.cupsEditor = {};
        $scope.cnaeEditor = { disabled: true };
        $scope.cadastreEditor = {};
        $scope.owner = {};
        $scope.payer = {};
        $scope.prices = {};
        $scope.maxfilesize = cfg.MAX_MB_FILE_SIZE;
        ApiSomEnergia.preloadStates();
        ApiSomEnergia.preloadLanguages();

        $scope.showAllSteps = function() {
            $scope.showAll = true;
        };

        $scope.rate20IsInvalid = false;
        $scope.rate21IsInvalid = false;
        $scope.rate3AIsInvalid = false;
        $scope.postalCodeIsInvalid = false;
        $scope.invalidAttachFileExtension = false;
        $scope.overflowAttachFile = false;
        $scope.accountIsInvalid = false;
        $scope.invalidTitular = false;

        $scope.isPayerPageComplete = false;
        $scope.farePageError = undefined;
        $scope.supplyPointPageError = undefined;
        $scope.ownerPageError = undefined;
        $scope.payerPageError = undefined;

        $scope.orderFormSubmitted = false;
        $scope.completeAccountNumber = '';
        $scope.availablePowers = function() {
            if ($scope.form.phases === undefined) {
                return [];
            }
            if ($scope.form.phases === 'mono') {
                return $scope.availablePowersMonophase;
            }
            return $scope.availablePowersTriphase;
        };
        $scope.rates = [
            cfg.RATE_20A,
            cfg.RATE_20DHA,
            cfg.RATE_20DHS,
            cfg.RATE_21A,
            cfg.RATE_21DHA,
            cfg.RATE_21DHS,
            cfg.RATE_30A,
        ];
        $scope.availablePowersMonophase = [
/*
            0.345,
            0.69,
            0.805,
*/
            1.15,
            1.725,
            2.3,
            3.45,
            4.6,
            5.75,
            6.9,
            8.05,
            9.2,
            10.35,
            11.5,
            14.49,
        ];
        $scope.availablePowersTriphase = [
/*
            1.039,
            2.078,
*/
            2.425,
            3.464,
            5.196,
            6.928,
            10.392,
            13.856,
/*
            17.321,
            20.785,
            24.249,
            27.713,
            31.177,
            34.641,
            43.648,
*/
        ];
        // GET LANGUAGES
        ApiSomEnergia.getLanguages($scope);

        // POWER VALIDATION
        ValidateHandler.validatePower($scope, 'form.power');
        ValidateHandler.validatePower($scope, 'form.power2');
        ValidateHandler.validatePower($scope, 'form.power3');
        ValidateHandler.validateNewPower($scope, 'form.newpower');
        ValidateHandler.validateInteger($scope, 'form.estimation');
        // POSTAL CODE VALIDATION
        ValidateHandler.validatePostalCode($scope, 'form.postalcode', false);


        $scope.esAlta = function() {
            if ($scope.form.hasservice === undefined) { return undefined; }
            return ! $scope.form.hasservice;
        };

        $scope.$watch('form.phases', function(oldvalue, newvalue) {
            // Reseting newpower if we change phases
            if (oldvalue!==newvalue) {
                $scope.form.newpower = undefined;
            }
            $scope.formListener();
        });
        function recomputeFareFromAlta(/*oldvalue, newvalue*/) {
            var newPower = parseFloat($scope.form.newpower);
            newPower = (isNaN(newPower)) ? undefined : newPower;

            var newFare;
            if (newPower < 10) { newFare = '2.0'; }
            else if (newPower < 15) { newFare = '2.1'; }
            else if (newPower >= 15) { newFare = '3.0'; }

            if (newFare!=='3.0') {
                $scope.form.power=$scope.form.newpower;
            }

            if (newFare !== undefined) {
                var discrimination = newPower<15 ? $scope.form.discriminacio : 'nodh';
                if (discrimination===undefined) {
                    newFare = undefined;
                } else {
                    newFare += { nodh:'A', dh:'DHA', dhs:'DHS' }[discrimination];
                }
            }
            $scope.form.rate = newFare;
        }
        $scope.$watch('form.newpower', recomputeFareFromAlta);
        $scope.$watch('form.discriminacio', recomputeFareFromAlta);

        // CONTROL READY STEPS ON CHANGE FORM
        $scope.isPartnerPageComplete = function() {
            return (
                $scope.initForm !== undefined &&
                $scope.initForm.isReady !== undefined &&
                $scope.initForm.isReady()
            );
        };
        $scope.setOwnerAndPayerLanguage=function(soci) {
            var language = soci.lang;
            soci.langname = soci.lang==='ca_ES'?'Català':'Español';
            $scope.payer.setLanguage(language);
            $scope.owner.setLanguage(language);
        };

        $scope.isSupplyPointPageComplete = function() {
            //console.log('- isSupplyPointPageComplete');
            function error(message) {
                $scope.supplyPointPageError = message;
                //console.log(message);
                return false;
            }

            $scope.supplyPointPageError = undefined;

            if ($scope.waitPreviousPages) {
                if (!$scope.isPartnerPageComplete()) {
                    return error('INCOMPLETE_PREVIOUS_STEP');
                }
            }
            if ($scope.esAlta() === undefined) {
                return error('UNSELECTED_NEW_SUPPLY_POINT');
            }
            if ($scope.form.address.value === undefined) {
                return error('NO_SUPPLY_POINT_ADDRESS');
            }
            if ($scope.form.addressNumber.value === undefined) {
                return error('NO_SUPPLY_POINT_ADDRESS_NUMBER');
            }
            /*
            if ($scope.form.addressFloor.value === undefined) {
                return error('NO_SUPPLY_POINT_ADDRESS_FLOOR');
            }
            if ($scope.form.addressDoor.value === undefined) {
                return error('NO_SUPPLY_POINT_ADDRESS_DOOR');
            }
            */
            if ($scope.form.postalcode === undefined || $scope.postalCodeIsInvalid!==false) {
                return error('NO_POSTALCODE');
            }

            $scope.form.cupsAddress = $scope.form.address.value;
            if ($scope.form.addressNumber.value !== undefined) {
                $scope.form.cupsAddress += ', ' + $scope.form.addressNumber.value;
            }
            if ($scope.form.addressFloor.value !== undefined) {
                $scope.form.cupsAddress += ', ' + $scope.form.addressFloor.value;
            }

            if ($scope.form.addressDoor.value !== undefined) {
                $scope.form.cupsAddress += ', ' + $scope.form.addressDoor.value;
            }

            if ($scope.form.postalcode !== undefined) {
                $scope.form.cupsAddress += ' - ' + $scope.form.postalcode;
            }

            if ($scope.form.province === undefined) {
                return error('NO_SUPPLY_POINT_STATE');
            }
            if ($scope.form.city === undefined) {
                return error('NO_SUPPLY_POINT_CITY');
            }

            if ($scope.form.ishousing === undefined) {
                return error('NO_IS_HOUSING');
            }

            if (!$scope.cupsEditor.isValid()) {
                return error('INVALID_SUPPLY_POINT_CUPS');
            }

            if (!$scope.cnaeEditor.isValid()) {
                return error('INVALID_SUPPLY_POINT_CNAE');
            }
            if (!$scope.checkCnaeHousing()) {
                return error('INVALID_CNAE_NO_HOUSING');
            }
            if ($scope.overflowAttachFile) {
                return error('INVALID_SUPPLY_POINT_ATTACHMENT');
            }
            return true;
        };

        $scope.isFarePageComplete = function() {
            //console.log('- isFarePageComplete');
            function error(message) {
                if ($scope.farePageError !== message) {
                    $scope.farePageError = message;
                    //console.log(message);
                }
                return false;
            }

            $scope.farePageError = undefined;

            if ($scope.waitPreviousPages) {
                if ($scope.isSupplyPointPageComplete()===false) {
                    return error('INCOMPLETE_PREVIOUS_STEP');
                }
            }
            if ($scope.esAlta()===true) {
                if ($scope.form.phases===undefined) {
                    return error('NO_MONOPHASE_CHOICE');
                }
            }
            if ($scope.esAlta()===false) {
                if ($scope.form.rate === undefined) {
                    return error('NO_FARE_CHOSEN');
                }
            }
            if ($scope.form.power === undefined) {
                return error('NO_POWER_CHOSEN');
            }
            switch ($scope.form.rate) {
                case cfg.RATE_20A:
                case cfg.RATE_20DHA:
                case cfg.RATE_20DHS:
                    if ($scope.rate20IsInvalid) {
                        return error('INVALID_POWER_20');
                    }
                    break;
                case cfg.RATE_21A:
                case cfg.RATE_21DHA:
                case cfg.RATE_21DHS:
                    if ($scope.rate21IsInvalid) {
                        return error('INVALID_POWER_21');
                    }
                    break;
                case cfg.RATE_30A:
                    if ($scope.form.power2 === undefined) {
                        return error('NO_POWER_CHOSEN_P2');
                    }
                    if ($scope.form.power3 === undefined) {
                        return error('NO_POWER_CHOSEN_P3');
                    }
                    if ($scope.rate3AIsInvalid) {
                        return error('INVALID_POWER_30');
                    }
                    break;
            }
            if ($scope.esAlta()===true) {
                if  ($scope.form.rate !== cfg.RATE_30A) {
                    if ($scope.form.discriminacio===undefined) {
                        return error('NO_HOURLY_DISCRIMINATION_CHOSEN');
                    }
                }
            }
            return true;
        };

        $scope.isOwnerPageComplete = function() {
            //console.log('- isOwnerPageComplete');
            function error(message) {
                if ($scope.ownerPageError !== message) {
                    $scope.ownerPageError = message;
                    //console.log(message);
                }
                return false;
            }
            $scope.ownerPageError = undefined;

            if ($scope.waitPreviousPages) {
                if (!$scope.isFarePageComplete()) {
                    return error('INCOMPLETE_PREVIOUS_STEP');
                }
            }
            if (!$scope.esAlta()) {
                if ($scope.form.changeowner === undefined) {
                    return error('OWNER_CHANGED_NOT_CHOSEN');
                }
            }
            if ($scope.form.ownerIsMember === undefined || $scope.form.ownerIsMember==='') {
                return error('OWNER_IS_MEMBER_NOT_CHOSEN');
            }
            if ($scope.form.ownerIsMember !== 'yes') {
                if ($scope.owner.isReady === undefined || !$scope.owner.isReady()) {
                    return error($scope.owner.error);
                }
            }
            if ($scope.form.ownerAcceptsGeneralConditions !== true) {
                return error('UNACCEPTED_GENERAL_CONDITIONS');
            }
            return true;
        };

        $scope.isPayerPageComplete = function() {
            //console.log('- isPayerPageComplete');
            function error(message) {
                if ($scope.payerPageError !== message) {
                    $scope.payerPageError = message;
                    //console.log(message);
                }
                return false;
            }
            $scope.payerPageError = undefined;
            if ($scope.waitPreviousPages) {
                if (!$scope.isOwnerPageComplete()) {
                    return error('INCOMPLETE_PREVIOUS_STEP');
                }
            }
            if ($scope.form.choosepayer === cfg.PAYER_TYPE_OTHER) {
                if ($scope.payer.isReady === undefined) {
                    return false; // Just initializing
                }
                if ($scope.payer.isReady()!==true) {
                    return error($scope.payer.error);
                }
            }
            if ($scope.form.choosepayer !== cfg.PAYER_TYPE_TITULAR) {
                if ($scope.form.payerAcceptsGeneralConditions !== true) {
                    return error('UNACCEPTED_GENERAL_CONDITIONS_NON_OWNER_PAYER');
                }
            }
            if ($scope.ibanEditor.isValid === undefined) {
                return false; // Just initializing
            }
            if ($scope.ibanEditor.isValid() !== true) {
                return error('INVALID_PAYER_IBAN');
            }
            if ($scope.form.acceptaccountowner !== true) {
                return error('UNCONFIRMED_ACCOUNT_OWNER');
            }
            if ($scope.form.voluntary === undefined) {
                return error('NO_VOLUNTARY_DONATION_CHOICE_TAKEN');
            }
            return true;
        };

        $scope.isHousing = function() {
            if ($scope.form.ishousing === true) {
                $scope.cnaeEditor.value = cfg.HOUSING_CNAE;
                $scope.cnaeEditor.disabled = true;
            } else {
                $scope.cnaeEditor.value = '';
                $scope.cnaeEditor.disabled = false;
            }
        };

        $scope.checkCnaeHousing = function() {
            return (!$scope.form.ishousing) ? $scope.cnaeEditor.value !== cfg.HOUSING_CNAE : true;
        };

        $scope.formListener = function() {
            //console.log('listener');
            // TODO: Remove these two lines?
            $scope.effectiveOwner = $scope.form.ownerIsMember === 'yes' ? $scope.initForm.soci : $scope.owner;
            $scope.effectivePayer = $scope.effectiveOwner;

            //$scope.isPayerPageComplete();
        };

        // Wizard logic
        $scope.wizardPage = {};

        // TODO: This is duplicated from wizard page to be used from this scope
        $scope.setPage = function(pageName) {
            //$log.log(pageName);
            $scope.wizardPage.current=pageName;
            window.scrollTo(0,0);
        };

        $scope.setPage('dadesSociPage');


        // KLUDGE: how to translate params of a translation
        // DOUBLE: how to translate params of a translation and passing it to the child scopes
        $scope.t={};
        $scope.t.HELP_INSTALL_TYPE_URL = $translate.instant('HELP_INSTALL_TYPE_URL');
        $scope.t.HELP_POTENCIA_URL = $translate.instant('HELP_POTENCIA_URL');
        $scope.t.HELP_DISCRIMINACIO_HORARIA_URL = $translate.instant('HELP_DISCRIMINACIO_HORARIA_URL');
        $scope.t.HELP_POWER_30_URL = $translate.instant('HELP_POWER_30_URL');
        $scope.t.HELP_POPOVER_CUPS_ALTA_URL = $translate.instant('HELP_POPOVER_CUPS_ALTA_URL');
        $scope.t.HELP_POPOVER_RATE_URL = $translate.instant('HELP_POPOVER_RATE_URL');
        $scope.t.HELP_ADJUNTAR_BUTLLETI_URL = $translate.instant('HELP_ADJUNTAR_BUTLLETI_URL');

        // ON SUBMIT FORM
        $scope.submitOrder = function() {
            $scope.messages = null;
            $scope.orderFormSubmitted = true;
            $scope.cupsIsDuplicated = false;
            $scope.invalidAttachFileExtension = false;
            $scope.overflowAttachFile = false;
            $scope.orderForm.cups.$setValidity('exist', true);
            uiHandler.showLoadingDialog();
            // Prepare request data
            var formData = new FormData();
            formData.append('id_soci', $scope.formsoci.socinumber);
            formData.append('dni', $scope.formsoci.dni);
            formData.append('canvi_titular', $scope.form.changeowner === 'yes' ? 1 : 0);
            formData.append('proces', $scope.esAlta() ? 'A3' : $scope.form.changeowner === 'yes' ? 'C2': 'C1');
            var ownerIsMember = $scope.form.ownerIsMember==='yes';
            formData.append('soci_titular', ownerIsMember ? 1 : 0);
            // TODO: estem ignorant l'idioma dels no socis (owner i payer)
            // TODO: agafar tipus_persona, representant_nom, i representant_dni del soci quan toca
            formData.append('tipus_persona', $scope.owner.usertype === 'person' ? 0 : 1);
            formData.append('representant_nom', $scope.owner.usertype === 'company' ? $scope.owner.representantname : '');
            formData.append('representant_dni', $scope.owner.usertype === 'company' ? $scope.owner.representantdni : '');
            formData.append('titular_nom', ownerIsMember ? $scope.initForm.soci.nom : $scope.owner.name);
            formData.append('titular_cognom', ownerIsMember ? $scope.initForm.soci.cognom : $scope.owner.surname || '');
            formData.append('titular_dni', ownerIsMember ? $scope.initForm.soci.dni : $scope.owner.dni);
            formData.append('titular_email', ownerIsMember ? $scope.initForm.soci.email : $scope.owner.email1);
            formData.append('titular_tel', ownerIsMember ? $scope.initForm.soci.tel : $scope.owner.phone1);
            formData.append('titular_tel2', ownerIsMember ? $scope.initForm.soci.tel2 : $scope.owner.phone2 || '');
            formData.append('titular_adreca', ownerIsMember ? $scope.initForm.soci.adreca : $scope.owner.address);
            formData.append('titular_municipi', ownerIsMember ? $scope.initForm.soci.municipi : $scope.owner.city.id);
            formData.append('titular_cp', ownerIsMember ? $scope.initForm.soci.cp : $scope.owner.postalcode);
            formData.append('titular_provincia', ownerIsMember ? $scope.initForm.soci.provincia : $scope.owner.province.id);
            formData.append('titular_lang', ownerIsMember ? $scope.initForm.soci.lang : $scope.owner.language.code);
            formData.append('tarifa', $scope.form.rate);
            formData.append('cups', $scope.cupsEditor.value);
            formData.append('consum', $scope.form.estimation || ''); // TODO: Remove this when it is clear is not used anymore
            function stringToPower(value) {
                // TODO: this is already done in validation but it did not work in some browesers
                value = ''+value; // ensure it is a string
                value = value.replace(',','.');
                value = value.replace('\'','.');
                value = cfg.THOUSANDS_CONVERSION_FACTOR * value;
                return Math.round(value);
            }
            formData.append('potencia', stringToPower($scope.form.power));
            formData.append('potencia_p2', $scope.form.rate === cfg.RATE_30A ? stringToPower($scope.form.power2) : '');
            formData.append('potencia_p3', $scope.form.rate === cfg.RATE_30A ? stringToPower($scope.form.power3) : '');
            formData.append('cnae', $scope.cnaeEditor.value || '');
            formData.append('cups_adreca', $scope.form.cupsAddress);
            formData.append('cups_provincia', $scope.form.province.id);
            formData.append('cups_municipi', $scope.form.city.id);
            formData.append('referencia', $scope.cadastreEditor.value || '');
            formData.append('fitxer', $scope.form.invoice.file().files[0]);
            var documentationFiles = $scope.form.documentation.file();
            jQuery.each(documentationFiles.files, function(j, file) {
                formData.append('documentacio_alta', file);
            });
            formData.append('payment_iban', $scope.ibanEditor.value);
            formData.append('escull_pagador', $scope.form.choosepayer);
            formData.append('compte_tipus_persona', $scope.payer.usertype === 'person' ? 0 : 1);
            var noPayer = $scope.form.choosepayer !== 'altre';
            formData.append('compte_nom', noPayer ? '' : $scope.payer.name);
            formData.append('compte_cognom', noPayer || $scope.payer.usertype !== 'person' ? '' : $scope.payer.surname);
            formData.append('compte_dni', noPayer ? '' : $scope.payer.dni);
            formData.append('compte_adreca', noPayer ? '' : $scope.payer.address);
            formData.append('compte_provincia', noPayer ? '' : $scope.payer.province.id);
            formData.append('compte_municipi', noPayer ? '' : $scope.payer.city.id);
            formData.append('compte_email', noPayer ? '' : $scope.payer.email1);
            formData.append('compte_tel', noPayer ? '' : $scope.payer.phone1);
            formData.append('compte_tel2', noPayer ? '' : $scope.payer.phone2 || '');
            formData.append('compte_cp', noPayer ? '' : $scope.payer.postalcode);
            formData.append('compte_representant_nom', noPayer || $scope.payer.usertype !== 'company' ? '' : $scope.payer.representantname);
            formData.append('compte_representant_dni', noPayer || $scope.payer.usertype !== 'company' ? '' : $scope.payer.representantdni);
            formData.append('compte_lang', noPayer ? '' : $scope.payer.language.code);
            formData.append('condicions', 1);
            formData.append('condicions_privacitat', 1);
            formData.append('condicions_titular', 1);
            formData.append('donatiu', $scope.form.voluntary === 'yes' ? 1 : 0);
            // Send request data POST
            $http({
                method: 'POST',
                url: cfg.API_BASE_URL + 'form/contractacio',
                headers: {'Content-Type': undefined},
                data: formData,
                transformRequest: angular.identity
            }).then(
                function(response) {
                    uiHandler.hideLoadingDialog();
                    $log.log('response received', response);
                    if (response.data.status === cfg.STATUS_ONLINE) {
                        if (response.data.state === cfg.STATE_TRUE) {
                            // well done
                            uiHandler.showWellDoneDialog();
                            $window.top.location.href = $translate.instant('CONTRACT_OK_REDIRECT_URL');
                        } else {
                            // error
                            $scope.modalTitle = $translate.instant('ERROR_POST_CONTRACTE');
                            $scope.messages = $scope.getHumanizedAPIResponse(response.data.data);
                            $scope.submitReady = false;
                            $scope.rawReason = JSON.stringify(response.data, null,'  ');
                            if ($scope.invalidTitular) {
                                jQuery('#webformsGlobalMessagesModal2').modal('show');
                            }
                            else {
                                jQuery('#webformsGlobalMessagesModal').modal('show');
                            }
                        }
                    } else if (response.data.status === cfg.STATUS_OFFLINE) {
                        uiHandler.showErrorDialog('API server status offline (ref.022-022)');
                    } else {
                        uiHandler.showErrorDialog('API server unknown status (ref.021-021)');
                    }
                },
                function(reason) {
                    $log.error('Send POST failed', reason);
                    uiHandler.hideLoadingDialog();
                    if (reason.status === 413) {
                        $scope.messages = 'ERROR 413';
                    } else {
                        $scope.messages = 'ERROR';
                    }
                    $scope.overflowAttachFile = true;
                    $scope.showAllSteps();
                    $scope.rawReason = JSON.stringify(reason,null,'  ');
                    jQuery('#webformsGlobalMessagesModal').modal('show');
                }
            );

            return true;
        };

        $scope.getTariff = function() {
            const ownerIsMember = $scope.form.ownerIsMember==='yes';
            const vat = ownerIsMember ? $scope.initForm.soci.dni : $scope.owner.dni;
            const cityId = ($scope.form.city && $scope.form.city.id) ? $scope.form.city.id : false;
            const cnae = $scope.cnaeEditor.value || false;
            const tariff = $scope.form.rate || false;

            if( !(vat && cityId && cnae && tariff) ) {
                return false
            }

            const urlParams = 'data/prices?tariff='+tariff+'&vat='+vat+'&cnae='+cnae+'&city_id='+cityId;
            ApiSomEnergia.getStateRequest(
                $scope,
                cfg.APIV2_BASE_URL + urlParams,
                '007'
            )
            .then(
                function(response) {
                    if (response.status === cfg.STATUS_ONLINE) {
                        if (response.state === cfg.STATE_TRUE) {
                            $scope.prices = response.data;
                        }
                    }
                },
                function(reason) {
                    console.log(reason)
                }
            )
        }

        $scope.$watch('form.acceptaccountowner', $scope.getTariff);

        // GET HUMANIZED API RESPONSE
        $scope.getHumanizedAPIResponse = function(arrayResponse) {
            if (arrayResponse.invalid_fields !== undefined) {
                for (var j = 0; j < arrayResponse.invalid_fields.length; j++) {
                    if (arrayResponse.invalid_fields[j].field === 'cups' && arrayResponse.invalid_fields[j].error === 'exist') {
                        $scope.cupsIsDuplicated = true;
                        $scope.orderForm.cups.$setValidity('exist', false);
                    } else if (arrayResponse.invalid_fields[j].field === 'fitxer' && arrayResponse.invalid_fields[j].error === 'bad_extension') {
                        $scope.invalidAttachFileExtension = true;
                        $scope.orderForm.file.$setValidity('exist', false);
                    }
                    else if (arrayResponse.invalid_fields[j].field === 'titular_dni' && arrayResponse.invalid_fields[j].error === 'cant_hire') {
                        $scope.invalidTitular = true;
                    }
                }
            }
            $scope.showAllSteps();
            return ApiSomEnergia.humanizedResponse(arrayResponse);
        };

        // GET COMPLETE ACCOUNT NUMBER WITH FORMAT
        $scope.getCompleteIbanWithFormat = function() {
            if (!$scope.ibanEditor) {
                return 'INVALID';
            }
            if ($scope.ibanEditor.isValid===undefined) {
                return 'INVALID';
            }
            if (!$scope.ibanEditor.isValid()) {
                return 'INVALID';
            }
            var joined = $scope.ibanEditor.value.toUpperCase();
            joined = joined.split(' ').join('');
            joined = joined.split('-').join('');
            joined = joined.split('.').join('');
            return [
                joined.slice(0,4),
                joined.slice(4,8),
                joined.slice(8,12),
                joined.slice(12,16),
                joined.slice(16,20),
                joined.slice(20,24),
            ].join(' ');
        };

    });


