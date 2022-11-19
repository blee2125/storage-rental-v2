import http from "./http-common";

class LeaseService {
    create(data) {
        return http.post("/lease/post", data);
    }

    get(id) {
        return http.get(`/lease/get/${id}`);
    }

    getAll() {
        return http.get("/lease/all");
    }

    update(id, data) {
        return http.put(`/lease/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/lease/delete/${id}`);
    }
}

export default new LeaseService();