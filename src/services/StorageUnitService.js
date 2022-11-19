import http from "./http-common";

class StorageUnitService {
    create(data) {
        return http.post("/storage-unit/post", data);
    }

    get(id) {
        return http.get(`/storage-unit/get/${id}`);
    }

    getAll() {
        return http.get("/storage-unit/all");
    }

    update(id, data) {
        return http.put(`/storage-unit/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/storage-unit/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/storage-unit/deleteall`)
    }
}

export default new StorageUnitService();