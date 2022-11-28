import http from "./http-common";

class PaymentService {
    create(data) {
        return http.post("/payment/post", data);
    }

    get(id) {
        return http.get(`/payment/get/${id}`);
    }

    getAll() {
        return http.get("/payment/all");
    }

    update(id, data) {
        return http.put(`/payment/update/${id}`, data);
    }

    delete(id) {
        return http.delete(`/payment/delete/${id}`);
    }
}

export default new PaymentService();