/* jshint -W097 */// jshint strict:false
/*jslint node: true */
"use strict";

// you have to require the adapter module and pass a options object
var utils = require(__dirname + '/lib/utils'); // Get common adapter utils

var objects = {};

var adapter = utils.adapter({    // name has to be set and has to be equal to adapters folder name and main file name excluding extension
    name:  'piface',
    
    // is called if a subscribed state changes
    stateChange: function (id, state) {
        adapter.log.info('stateChange ' + id + ' ' + JSON.stringify(state));

        if (!state.ack) {
            var ids = id.split(".");
            ids = ids[ids.length - 1];
                
         adapter.log.info('ids ' + ids);     
       
        }
    },

        
  
    // is called when adapter shuts down - callback has to be called under any circumstances!
    unload: function (callback) {
        try {
            eiscp.close();
        } finally {
            callback();
        }
    },

    ready: function () {
        adapter.subscribeStates('*');
        main();
    }  
  
  });
  
function pifaceinit(){
    var PIFD = require('node-pifacedigital');
    var pi = new PIFD.PIFaceDigital(0,true);
}  
  
function getinputs() {
        var val = pi.getInput();
      adapter.log.info('Inputs: ' + val);
}

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function createObjects () {
      // Datenpunkte anlegen
      var role = 'button';
      var value = '';
      var datapoints = new Array(
          'OUT0',
          'OUT1',
          'OUT2',
          'OUT3',
          'OUT4',
          'OUT5',
          'OUT6',
          'OUT7',
          'IN0',
          'IN1',
          'IN2',
          'IN3',
          'IN4',
          'IN5',
          'IN6',
          'IN7'
          );
      
      for ( var i=0 ; i < datapoints.length ; i++ )  {
          adapter.log.info('My array objects: ' + adapter.namespace + '.' + datapoints[i] + ', role = ' + role);        

      // Create DP command if not exist and config fixedvar active
            
      adapter.log.info('Create new object: ' + adapter.namespace + '.' + datapoints[i] + ', role = ' + role);
      
        objects[adapter.namespace + '.' + datapoints[i]] = {
            _id: adapter.namespace + '.' + datapoints[i],
            common: {
                name: datapoints[i],
                role: role,
                type: 'number'
            },
            native: {
                command: datapoints[i]
            },
            type: 'state'
        };

        adapter.setObject(datapoints[i], objects[adapter.namespace + '.' + datapoints[i]], function (err, obj) {
            adapter.setState(datapoints[i], {val: value, ack: true});
        });
    }
   }

function main() {
    // First create the objects
     createObjects();
     pifaceinit();
     getinputs();
        
}


