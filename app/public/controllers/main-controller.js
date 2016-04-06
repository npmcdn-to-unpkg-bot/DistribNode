(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['toastr', 'nodeSvc'];

    /* @ngInject */
    function MainCtrl(toastr, nodeSvc) {
        var vm = this;
        vm.nodes = [];

        vm.openNode = function(port){
          if(validatePort(port))
          {
            var node = nodeSvc.createNode();
            node.initialize(port);
            vm.nodes.push(node);
            toastr.success('Node Started');
          }
          else toastr.error('Invalid Port Number');
      }

      function validatePort(port){
        if(port === "" || port === undefined)
          return false;
        if(port.length !== 4)
          return false;
        if(isNaN(port))
          return false;
        return true;
      }
    }
})();
