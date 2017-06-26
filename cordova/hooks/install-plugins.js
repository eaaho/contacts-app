module.exports = function (context) {
	
	var pluginlist = [
		"cordova-plugin-vibration",
		"cordova-plugin-whitelist"
	];
	
	var fs = require('fs');
	var path = require('path');
	var exec = require('child_process').exec;
	
	function log(error, stdout, stderr) {
		console.log(stdout);
	}
	
	pluginlist.forEach(function(plugin) {
		exec("cordova plugin add " + plugin, log);
	});
}