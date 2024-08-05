import { Config, getApiAxios, handleHeaders } from "../../common";

class AuthAPI {
  _api;

  constructor() {
    this._api = getApiAxios(
      Config.getInstance().API_URL + "/auth",
      handleHeaders("noToken")
    );
  }

  async login(email, password) {
    return await this._api.post("/login", { email, password });
  }

  async sendEmailReset(email) {
    return this._api.post("/forgotpassword", { email });
  }

  async resetPassword(token, newPassword, confirmedNewPassword) {
    return this._api.post(`/resetpassword/:${token}`, {
      newPassword,
      confirmedNewPassword,
    });
  }

  async getMyInfo() {
    return await this._api.get(`getMyInfo`, {
      headers: handleHeaders("token"),
    });
  }

  async updateMyInfo(fullname, email) {
    return await this._api.put(
      `updateMyInfo`,
      {
        fullname,
        email,
      },
      { headers: handleHeaders("token") }
    );
  }

  async changepassword(newPassword) {
    return this._api.put(
      `changeMyPassword`,
      { newPassword },
      { headers: handleHeaders("token") }
    );
  }
}
export { AuthAPI };
