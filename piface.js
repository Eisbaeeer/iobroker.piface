/**
 *
 *      ioBroker PiFace Adapter
 *
 *      Copyright (c) 2016 Eisbaeeer@gmail.com
 *
 *      MIT License
 *
 */

var utils =   require(__dirname + '/lib/utils'); // Get common adapter utils
var adapter = utils.adapter('piface');
var PiFaceIN = [];
var inp = [];
var PIFD = require('node-pifacedigital');
var pi = new PIFD.PIFaceDigital(0,true);


adapter.on('ready', function () {
    main();
});

adapter.on('objectChange', function (id, obj) {
    adapter.log.info('objectChange ' + id + ' ' + JSON.stringify(obj));
});

adapter.on('stateChange', function (id, state) {
    adapter.log.info('stateChange ' + id + ' ' + JSON.stringify(state));
    adapter.log.info('stateVal ' + state.val);

    // you can use the ack flag to detect if state is command(false) or status(true)
    if (!state.ack) {
        adapter.log.info('ack is not set!');
        
    // here we go and set the outputs if state of object is changed with no ack
                if (id == adapter.namespace + '.' + 'OUT0' && state.val == "1" || id == adapter.namespace + '.' + 'OUT0' && state.val == "true" ) {
                    pi.set(0,1); //(pin,value)
                    adapter.setState (adapter.namespace + '.' + 'OUT0', {val: true, ack: true});
                    }
                if (id == adapter.namespace + '.' + 'OUT0' && state.val == "0" || id == adapter.namespace + '.' + 'OUT0' && state.val == "false" ) {
                    pi.set(0,0); //(pin,value)
                    adapter.setState (adapter.namespace + '.' + 'OUT0', {val: false, ack: true});                    
                    }      
                if (id == adapter.namespace + '.' + 'OUT1' && state.val == "1" || id == adapter.namespace + '.' + 'OUT1' && state.val == "true" ) {
                    pi.set(1,1); //(pin,value)
                    }
                if (id == adapter.namespace + '.' + 'OUT1' && state.val == "0" || id == adapter.namespace + '.' + 'OUT1' && state.val == "false" ) {
                    pi.set(1,0); //(pin,value)
                    }      
                if (id == adapter.namespace + '.' + 'OUT2' && state.val == "1" || id == adapter.namespace + '.' + 'OUT2' && state.val == "true" ) {
                    pi.set(2,1); //(pin,value)
                    }
                if (id == adapter.namespace + '.' + 'OUT2' && state.val == "0" || id == adapter.namespace + '.' + 'OUT2' && state.val == "false" ) {
                    pi.set(2,0); //(pin,value)
                    }      
                if (id == adapter.namespace + '.' + 'OUT3' && state.val == "1" || id == adapter.namespace + '.' + 'OUT3' && state.val == "true" ) {
                    pi.set(3,1); //(pin,value)
                    }
                if (id == adapter.namespace + '.' + 'OUT3' && state.val == "0" || id == adapter.namespace + '.' + 'OUT3' && state.val == "false" ) {
                    pi.set(3,0); //(pin,value)
                    }      
                if (id == adapter.namespace + '.' + 'OUT4' && state.val == "1" || id == adapter.namespace + '.' + 'OUT4' && state.val == "true" ) {
                    pi.set(4,1); //(pin,value)
                    }
                if (id == adapter.namespace + '.' + 'OUT4' && state.val == "0" || id == adapter.namespace + '.' + 'OUT4' && state.val == "false" ) {
                    pi.set(4,0); //(pin,value)
                    }      
                if (id == adapter.namespace + '.' + 'OUT5' && state.val == "1" || id == adapter.namespace + '.' + 'OUT5' && state.val == "true" ) {
                    pi.set(5,1); //(pin,value)
                    }
                if (id == adapter.namespace + '.' + 'OUT5' && state.val == "0" || id == adapter.namespace + '.' + 'OUT5' && state.val == "false" ) {
                    pi.set(5,0); //(pin,value)
                    }      
                if (id == adapter.namespace + '.' + 'OUT6' && state.val == "1" || id == adapter.namespace + '.' + 'OUT6' && state.val == "true" ) {
                    pi.set(6,1); //(pin,value)
                    }
                if (id == adapter.namespace + '.' + 'OUT6' && state.val == "0" || id == adapter.namespace + '.' + 'OUT6' && state.val == "false" ) {
                    pi.set(6,0); //(pin,value)
                    }      
                if (id == adapter.namespace + '.' + 'OUT7' && state.val == "1" || id == adapter.namespace + '.' + 'OUT7' && state.val == "true" ) {
                    pi.set(7,1); //(pin,value)
                    }
                if (id == adapter.namespace + '.' + 'OUT7' && state.val == "0" || id == adapter.namespace + '.' + 'OUT7' && state.val == "false" ) {
                    pi.set(7,0); //(pin,value)
                    }      

  }
});


function pifaceinit(){
    adapter.log.info('function pifaceinit() called!');

}

function pifaceread() {  
var PIFD = require('node-pifacedigital');
var pi = new PIFD.PIFaceDigital(parseInt(adapter.config.PiFaceAddress, 10) || 0, true);  
        PiFaceIN[0] = pi.get(0);
        PiFaceIN[1] = pi.get(1);
        PiFaceIN[2] = pi.get(2);
        PiFaceIN[3] = pi.get(3);
        PiFaceIN[4] = pi.get(4);
        PiFaceIN[5] = pi.get(5);
        PiFaceIN[6] = pi.get(6);
        PiFaceIN[7] = pi.get(7);
        
        // change to "true"|"false"
                if (PiFaceIN[0] == '1') {
          PiFaceIN[0] = true
          }
        if (PiFaceIN[0] == '0') {
          PiFaceIN[0] = false
          }

        if (PiFaceIN[1] == '1') {
          PiFaceIN[1] = true
          }
        if (PiFaceIN[1] == '0') {
          PiFaceIN[1] = false
          }

        if (PiFaceIN[2] == '1') {
          PiFaceIN[2] = true
          }
        if (PiFaceIN[2] == '0') {
          PiFaceIN[2] = false
          }

        if (PiFaceIN[3] == '1') {
          PiFaceIN[3] = true
          }
        if (PiFaceIN[3] == '0') {
          PiFaceIN[3] = false
          }

        if (PiFaceIN[4] == '1') {
          PiFaceIN[4] = true
          }
        if (PiFaceIN[4] == '0') {
          PiFaceIN[4] = false
          }

        if (PiFaceIN[5] == '1') {
          PiFaceIN[5] = true
          }
        if (PiFaceIN[5] == '0') {
          PiFaceIN[5] = false
          }

        if (PiFaceIN[6] == '1') {
          PiFaceIN[6] = true
          }
        if (PiFaceIN[6] == '0') {
          PiFaceIN[6] = false
          }

        if (PiFaceIN[7] == '1') {
          PiFaceIN[7] = true
          }
        if (PiFaceIN[7] == '0') {
          PiFaceIN[7] = false
          }

// set objects if input is changed
            if (PiFaceIN[0] !== inp[0]) {
                adapter.setState (adapter.namespace + '.' + 'IN0', {val: PiFaceIN[0], ack: true});
                inp[0] = PiFaceIN[0];
            }
            if (PiFaceIN[1] !== inp[1]) {
                adapter.setState (adapter.namespace + '.' + 'IN1', {val: PiFaceIN[1], ack: true});
                inp[1] = PiFaceIN[1];
            }
            if (PiFaceIN[2] !== inp[2]) {
                adapter.setState (adapter.namespace + '.' + 'IN2', {val: PiFaceIN[2], ack: true});
                inp[2] = PiFaceIN[2];
            }
            if (PiFaceIN[3] !== inp[3]) {
                adapter.setState (adapter.namespace + '.' + 'IN3', {val: PiFaceIN[3], ack: true});
                inp[3] = PiFaceIN[3];
            }
            if (PiFaceIN[4] !== inp[4]) {
                adapter.setState (adapter.namespace + '.' + 'IN4', {val: PiFaceIN[4], ack: true});
                inp[4] = PiFaceIN[4];
            }
            if (PiFaceIN[5] !== inp[5]) {
                adapter.setState (adapter.namespace + '.' + 'IN5', {val: PiFaceIN[5], ack: true});
                inp[5] = PiFaceIN[5];
            }
            if (PiFaceIN[6] !== inp[6]) {
                adapter.setState (adapter.namespace + '.' + 'IN6', {val: PiFaceIN[6], ack: true});
                inp[6] = PiFaceIN[6];
            }
            if (PiFaceIN[7] !== inp[7]) {
                adapter.setState (adapter.namespace + '.' + 'IN7', {val: PiFaceIN[7], ack: true});
                inp[7] = PiFaceIN[7];
            }

//    adapter.log.info('Inputs: ' + PiFaceIN[0] + ":" + PiFaceIN[1] + ":" + PiFaceIN[2] + ":" + PiFaceIN[3] + ":" + PiFaceIN[4] + ":" + PiFaceIN[5] + ":" + PiFaceIN[6] + ":" + PiFaceIN[7] );
}

function main() {
    pifaceinit();
    setInterval(pifaceread, 100);
//    setInterval(pifaceread, adapter.config.interval * 1000);
    adapter.subscribeStates('*');
            adapter.log.info('function main() called!');
}

