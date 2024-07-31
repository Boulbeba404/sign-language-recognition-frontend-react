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
    return await this._api.get(`get/${id}`);
  }

  async createModel(name, architecture, description, file) {
    return await this._api.post("create", {
      name,
      architecture,
      description,
      file,
    });
  }

  async updateModel(id, name, architecture, description, file) {
    return await this._api.post(`update/${id}`, {
      name,
      architecture,
      description,
      file,
    });
  }

  async getModelById(id) {
    return this._api.get(`getbyid/${id}`);
  }

  async getList() {
    return await this._api.get("list");
  }
}
export { ModelAPI };
