
const VersalinkDevice = require('@agilatech/versalink-device');
const device = require('@agilatech/mpu');

module.exports = class Mpu extends VersalinkDevice {
    
    constructor(config) {
        
        // The bus/file must be defined. If not supplied in config, then default to i2c-1
        const bus  = config['bus'] || "/dev/i2c-2";

        // The addr should be defined as well.
        const addr = config['addr'] || 0x68;

        // The rate is how often we want the hardware to update its values internally
        const rate = config['rate'] || 500;
        
        const hardware = new device(bus, addr, rate);
        
        super(hardware, config);
        
    }
    
}

