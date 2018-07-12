var nodeCmd = require('node-cmd');
function runReboot() {
    nodeCmd.get(
        'shutdown',
        function(err, data, stderr){
            console.log(data);
        }
    );
 
    nodeCmd.run('shutdown -r -t 0');
}
// runReboot();
exports.runReboot = runReboot