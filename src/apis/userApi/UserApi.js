import { Config, getApiAxios, handleHeaders } from "../../common";

class UserAPI {
  _api;

  constructor() {
    this._api = getApiAxios(
      Config.getInstance().API_URL + "/user",
      handleHeaders("token")
    );
  }

  async getMyInfo() {
    return await this._api.get(`getmyinfo`);
  }

  async updateMyInfo(fullname, email) {
    return await this._api.put(`update`, {
      fullname,
      email,
    });
  }

  async changepassword(newPassword) {
    return this._api.put(`changepassword`,{newPassword});
  }

  async getList() {
    return await this._api.get("list");
  }
}
export { UserAPI };
