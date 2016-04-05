(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    // Controller.$inject = ['dependencies'];

    /* @ngInject */
    function MainCtrl() {
        var vm = this;
        vm.openNodes = [1,2,3,4,5,6,7,8];
        activate();

        function activate() {

        }
    }
})();
