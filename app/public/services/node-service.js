(function() {
    'use strict';

    angular
        .module('app')
        .factory('nodeSvc', nodeSvc);

    // nodeSvc.$inject = ['dependencies'];

    /* @ngInject */
    function nodeSvc() {
        var service = {
            createNode: createNode
        };

        return service;

        function createNode() {

            var node = {
                message: '',
                initialize: function(port) {

                    var http = require('http');
                    http.createServer(function(req, res) {
                        res.writeHead(200, {
                            'Content-Type': 'text/plain'
                        });
                        res.end('Hello World\n');
                    }).listen(port, "127.0.0.1");
                    console.log('Server running at http://127.0.0.1:8124/');
                },

                broadcast: function() {
                    //TODO
                },
                kill: function() {
                    //TODO
                },
                slowDown: function() {
                    //TODO
                }
            };

            return node;
        }
    }
})();
