const os = require("os");

const osUptime = os.uptime();

console.log(osUptime);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
