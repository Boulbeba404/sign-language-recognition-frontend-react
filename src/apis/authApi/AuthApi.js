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
}
export { AuthAPI };
