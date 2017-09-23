var SELENIUM_CONFIGURATION = {
    start_process: true,
    server_path: '',
    host: '127.0.0.1',
    port: 4444
  };
  
  var FIREFOX_CONFIGURATION = {
    browserName: 'firefox',
    javascriptEnabled: true,
    acceptSslCerts: true
  };
  
  var DEFAULT_CONFIGURATION = {
    launch_url: 'http://localhost',
    selenium_port: 4444,
    selenium_host: 'localhost',
    desiredCapabilities: FIREFOX_CONFIGURATION
  };
  
  var ENVIRONMENTS = {
    default: DEFAULT_CONFIGURATION
  };
  
  module.exports = {
    src_folders: ['tests'],
    selenium: SELENIUM_CONFIGURATION,
    custom_commands_path: ['custom-commands'],
    test_settings: ENVIRONMENTS
  };


