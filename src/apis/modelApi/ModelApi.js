import { Config, getApiAxios, handleHeaders } from "../../common";

class ModelAPI {
  _api;

  constructor() {
    this._api = getApiAxios(
      Config.getInstance().API_URL + "/recognition",
      handleHeaders("token")
    );
  }

  async getModelById(id) {
    return await this._api.get(`getById/${id}`);
  }

  async createModel(name, architecture, file) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("architecture", architecture);
    formData.append("file", file);
    return await this._api.post("create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async updateModel(id, name, architecture, file) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("architecture", architecture);
    formData.append("file", file);
    return await this._api.put(`update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async getModelById(id) {
    return this._api.get(`getbyid/${id}`);
  }

  async getList() {
    return await this._api.get("getRecognitions");
  }

  async deleteModel(id) {
    return await this._api.delete(`delete/${id}`);
  }
}
export { ModelAPI };
