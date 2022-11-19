import http from "./http-common";

class CustomerService {
    create(data) {
        return http.post("/customer/post", data);
    }

    get(id) {
        return http.get(`/customer/get/${id}`);
    }

    getAll() {
        return http.get("/customer/all");
    }

    update(id, data) {
        return http.put(`/customer/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/customer/delete/${id}`);
    }

    deleteAll() {
        return http.delete(`/customer/deleteall`)
    }
}

export default new CustomerService();