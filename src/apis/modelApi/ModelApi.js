import { Config, getApiAxios, handleHeaders } from "../../common";

class ModelAPI {
  _api;

  constructor() {
    this._api = getApiAxios(
      Config.getInstance().API_URL + "/model",
      handleHeaders("token")
    );
  }

  async getModelById(id) {
    return await this._api.get(`/get/${id}`);
  }
}
export { ModelAPI };
