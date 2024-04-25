// script.js
// Thêm vào file script.js

var formDangKy = document.getElementById("formDangKy");
var tenDangKy = document.getElementById("ten-dang-ky");
var matKhauDangKy = document.getElementById("mat-khau-dang-ky");
var xacNhanMatKhau = document.getElementById("xac-nhan-mat-khau");
var thongBaoDangKy = document.getElementById("thong-bao-dang-ky");

formDangKy.addEventListener("submit", function(event) {
    event.preventDefault();

    var tenDangKyValue = tenDangKy.value.trim();
    var matKhauDangKyValue = matKhauDangKy.value.trim();
    var xacNhanMatKhauValue = xacNhanMatKhau.value.trim();

    // Kiểm tra nếu tên đăng nhập đã tồn tại
    var thongTinTaiKhoanString = localStorage.getItem("thongtintaikhoan");
    if (thongTinTaiKhoanString) {
        var thongTinTaiKhoan = JSON.parse(thongTinTaiKhoanString);
        if (thongTinTaiKhoan.hasOwnProperty(tenDangKyValue)) {
            thongBaoDangKy.textContent = "Tài khoản đã tồn tại!";
            return;
        }
    }

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu khớp nhau
    if (matKhauDangKyValue !== xacNhanMatKhauValue) {
        thongBaoDangKy.textContent = "Mật khẩu không khớp!";
        return;
    }

    // Tạo tài khoản mới
    if (!thongTinTaiKhoanString) {
        thongTinTaiKhoan = {};
    }
    thongTinTaiKhoan[tenDangKyValue] = matKhauDangKyValue;
    localStorage.setItem("thongtintaikhoan", JSON.stringify(thongTinTaiKhoan));

    thongBaoDangKy.textContent = "Đăng ký thành công!";

    // Chuyển hướng đến trang đăng nhập
    window.location.href = "login.html";
});

window.onload = function() {
    var formDangNhap = document.getElementById("formDangNhap");
    var tenNguoiDung = document.getElementById("ten-nguoi-dung");
    var matKhau = document.getElementById("mat-khau");
    var thongBao = document.getElementById("thong-bao");

    formDangNhap.addEventListener("submit", function(event) {
        event.preventDefault();

        var tenDangNhapValue = tenNguoiDung.value.trim();
        var matKhauValue = matKhau.value.trim();

        // Lấy dữ liệu tài khoản từ localStorage
        var thongTinTaiKhoanString = localStorage.getItem("thongtintaikhoan");
        if (thongTinTaiKhoanString) {
            var thongTinTaiKhoan = JSON.parse(thongTinTaiKhoanString);

            // Kiểm tra tài khoản và mật khẩu
            if (thongTinTaiKhoan.hasOwnProperty(tenDangNhapValue) && thongTinTaiKhoan[tenDangNhapValue] === matKhauValue) {
                thongBao.textContent = "Đăng nhập thành công!";

                // Lưu trữ tên người dùng vào localStorage
                localStorage.setItem("tenDangNhapHienTai", tenDangNhapValue);

                // Chuyển hướng đến trang quản lý
                window.location.href = "quanly.html";
                alert("Trang quanly");
            } else {
                thongBao.textContent = "Tài khoản hoặc mật khẩu không chính xác!";
            }
        } else {
            thongBao.textContent = "Tài khoản không tồn tại!";
        }
    });
};
