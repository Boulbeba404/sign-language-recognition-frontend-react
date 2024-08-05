import { Config, getApiAxios, handleHeaders } from "../../common";

class UserAPI {
  _api;

  constructor() {
    this._api = getApiAxios(
      Config.getInstance().API_URL + "/user",
      handleHeaders("token")
    );
  }

  async getList() {
    return await this._api.get("list");
  }
}
export { UserAPI };
