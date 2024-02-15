const os = require("os");
const memory = os.freemem();
const homeDir = os.homedir();
const machineInfo = os.machine();
const osRelease = os.release();
console.log(osRelease);
console.log(machineInfo);
console.log(memory);
console.log(homeDir);
