/**
 * Copyright 2014 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    "use strict";

    function LircInNode(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        node.status({fill:"yellow",shape:"ring",text:"connecting"})
	var lirc = require('lirc-client')({
	    path: "/var/run/lirc/lircd"
	});
        lirc.on('connect', function () {
            node.status({fill:"green",shape:"dot",text:"connected"})
        });
	lirc.on('receive', function (remote, button, repeat) {
	    var msg = {topic: "lirc/" + remote + "/" + button, payload: repeat };
	    node.send(msg);
	});

       this.on("close", function() {
           lirc.close();
       });
    }
    RED.nodes.registerType("lirc-in",LircInNode);
}
