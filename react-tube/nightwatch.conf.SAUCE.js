const SCREENSHOT_PATH = "./screenshots/";

module.exports = {
    "src_folders": [
        "test/tdd"
    ],
    "output_folder": "./reports",
    "test_workers": {
        "enabled": true,
        "workers": "auto"
    },
    "test_settings": {
        "default": {
            "launch_url": "http://ondemand.saucelabs.com:80",
            "selenium_port": 80,
            "selenium_host": "ondemand.saucelabs.com",
            "silent": true,
            "username": process.env.SAUCE_USERNAME,
            "access_key": process.env.SAUCE_ACCESS_KEY,
            "screenshots": {
                "enabled": false,
                "path": "",
            },
            "globals": {
                "waitForConditionTimeout": 10000
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "platform": "Windows 10",
                "version": "latest"
            }
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "platform": "Windows 10",
                "version": "latest"
            }
        },
        "safari": {
            "desiredCapabilities": {
                "browserName": "safari",
                "platform": "OS X 10.11",
                "version": "latest"
            }
        },
        "edge": {
            "desiredCapabilities": {
                "browserName": "MicrosoftEdge",
                "platform": "Windows 10",
                "version": "latest"
            }
        },
        "firefox": {
            "desiredCapabilities": {
                "browserName": "firefox",
                "platform": "Linux",
                "version": "latest"
            }
        },
        "ios": {
            "desiredCapabilities": {
                "browserName": "Safari",
                "platformVersion": "11.3",
                "platformName": "iOS",
                "deviceName": "iPhone X Simulator",
                "deviceOrientation": "portrait"
            }
        }
    }
};

function padLeft(count) {
    return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0; // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath(browser) {
    var a = browser.options.desiredCapabilities;
    var meta = [a.platform];
    meta.push(a.browserName ? a.browserName : 'any');
    meta.push(a.version ? a.version : 'any');
    meta.push(a.name); // this is the test filename so always exists.
    var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
    return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;