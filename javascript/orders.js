var thongtintaikhoan = {
    taikhoan: "",
    matkhau: "",
    tendangnhap: "",
    diachi: "",
    sdt: "",
    ngaysinh: "",
    gioitinh: ""
};
function luuThongTin() {
    var taikhoan = document.getElementById('dn_email').value;
    var matkhau = document.getElementById('dn_pass').value;
    var tendangnhap = document.getElementById('dn_name').value;
    var diachi = document.getElementById('cn_dchi').value;
    var sdt = document.getElementById('cn_sdt').value;
    var ngaysinh = document.getElementById('cn_ngsinh').value;
    var gioitinh = document.getElementById('cn_gioitinh').value;
    if (taikhoan && matkhau) {
        thongtintaikhoan.taikhoan = taikhoan;
        thongtintaikhoan.matkhau = matkhau;
        thongtintaikhoan.tendangnhap = tendangnhap;
        thongtintaikhoan.diachi = diachi;
        thongtintaikhoan.sdt = sdt;
        thongtintaikhoan.ngaysinh = ngaysinh; 
        thongtintaikhoan.gioitinh = gioitinh;

        localStorage.setItem('thongtintaikhoan', JSON.stringify(thongtintaikhoan));
        alert("Lưu thông tin vào tài khoản của bạn thành công")
        history.go(-1);
    } else {
        alert('Vui lòng nhập email và mật khẩu của bạn!');
    }
}

function hienThiThongTin() {
    var thongtinElement = document.createElement('div');
    thongtinElement.innerHTML = '<h2>Thông Tin Tài Khoản</h2>';
    thongtinElement.innerHTML += '<p>Email: ' + thongtintaikhoan.taikhoan + '</p>';
    thongtinElement.innerHTML += '<p>Tên: ' + (thongtintaikhoan.tendangnhap || '') + '</p>';
    thongtinElement.innerHTML += '<p>Địa chỉ: ' + (thongtintaikhoan.diachi || '') + '</p>';
    thongtinElement.innerHTML += '<p>Số điện thoại: ' + (thongtintaikhoan.sdt || '') + '</p>';
    thongtinElement.innerHTML += '<p>Ngày sinh: ' + (thongtintaikhoan.ngaysinh || '') + '</p>';
    thongtinElement.innerHTML += '<p>Giới tính: ' + (thongtintaikhoan.gioitinh || '') + '</p>';

    var container = document.querySelector('.container');
    container.appendChild(thongtinElement);
}
window.onload = function() {
    // Lấy giá trị từ localStorage
    var laydulieu = localStorage.getItem('thongtintaikhoan');

    if (laydulieu !== null) {
        // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
        var thongtintaikhoan = JSON.parse(laydulieu);

        // Gán giá trị lấy được vào các ô input
        document.getElementById('dn_email').value = thongtintaikhoan.taikhoan;
        document.getElementById('dn_pass').value = thongtintaikhoan.matkhau;
    } else {
        alert('Vui lòng tạo tài khoản');
        window.location.href = ("dangnhap.html");
    }
};
const togglePasswordButton = document.getElementById('hienthimatkhau');
const passwordInput = document.getElementById('dn_pass');

togglePasswordButton.addEventListener('click', () => {
  // Thay đổi type của input password
  const isPasswordVisible = passwordInput.type === 'password';
  passwordInput.type = isPasswordVisible ? 'text' : 'password';

  // Thay đổi icon và text của nút
  togglePasswordButton.classList.toggle('show-password');
  togglePasswordButton.textContent = isPasswordVisible ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu';
});