import { http } from "./config"

export const quanLyRapServ = {
    getAllThongTinCumRap() {
        return http.get("/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
    },
    layThongtinHeThongRap: () => {
        return http.get(`/QuanLyRap/LayThongtinHeThongRap`);
    },
    layThongTinCumRapTheoHeThong: (maHeThongRap) => {
        return http.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }
}