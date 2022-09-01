const os = require("os");

// Returns the operating system CPU architecture
const CPUArchitecture = () => {
  console.log(os.arch());
};

// -----------------------------------------------------
// -----------------------------------------------------

// Returns an array of objects containing information about each logical CPU core.
const eachLogicalCPU = () => {
  console.log(os.cpus());
};

// -----------------------------------------------------
// -----------------------------------------------------

// Returns the amount of free system memory in bytes as an integer.
const freeSystemMemory = () => {
  console.log(os.freemem() / (1000 * 1000 * 1000)); // in GB
};

// -----------------------------------------------------
// -----------------------------------------------------

// Returns the string path of the current user's home directory.
const homeDirectory = () => {
  console.log(os.homedir());
};

// -----------------------------------------------------
// -----------------------------------------------------

// Returns a string identifying the operating system platform
const operatingSystemPlatform = () => {
  console.log(os.platform());
};

// -----------------------------------------------------
// -----------------------------------------------------

// Returns the total amount of system memory in bytes as an integer.
const totalAmountOfSystemMemory = () => {
  console.log(os.totalmem() / (1000 * 1000 * 1000)); // in GB
};
// -----------------------------------------------------
// -----------------------------------------------------

// Returns the operating system name
const operatingSystemName = () => {
  console.log(os.type());
};
// -----------------------------------------------------
// -----------------------------------------------------

// Returns the system uptime in number of seconds.
const systemUptimeInNumberOfSecond = () => {
  setInterval(() => {
    console.log(os.uptime());
  }, 1000);
};

// -----------------------------------------------------
// -----------------------------------------------------

// /Returns information about the currently effective user ------------------

const currentUserInfo = () => {
  console.log(os.userInfo());
};

// -----------------------------------------------------

// Returns a string identifying the kernel version. --------------------

const kernelVersion = () => {
  console.log(os.version());
};

// much needed function ------------
const getOsInfo = () => {
  return {
    uptime: os.uptime(),
    type: os.type(),
    release: os.release(),
    hostname: os.hostname(),
    arch: os.arch(),
    platform: os.platform(),
  };
};

const osInfo = getOsInfo();
console.log(osInfo);
