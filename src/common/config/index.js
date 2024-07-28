class Config {
  API_URL = "http://localhost:8000";
  static instance;
  static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

export default Config;
