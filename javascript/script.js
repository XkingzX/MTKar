const container = document.getElementById("container");
const dangkyBtn = document.getElementById("chuyen_dangky");
const dangnhapBtn = document.getElementById("chuyen_dangnhap");

//Làm chuyển từ trang dangky sang dangnhap
dangkyBtn.addEventListener("click", () => {
  container.classList.add("active");
});

dangnhapBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

function dangky() 
{
    var taikhoan = document.getElementById("dk_email").value;
    var matkhau = document.getElementById("dk_pass").value;
    var tendangnhap = document.getElementById("dk_name").value;
    

    var thongtintaikhoan = {
        "taikhoan": taikhoan,
        "matkhau": matkhau,
        "tendangnhap": tendangnhap
    };

    localStorage.setItem('thongtintaikhoan', JSON.stringify(thongtintaikhoan));

    document.getElementById("dk_name").value = '';
    document.getElementById("dk_email").value = '';
    document.getElementById("dk_pass").value = '';
    if (taikhoan === "" && matkhau === "")
    {
        alert("Vui lòng điền thông tin");
    }
    if (thongtintaikhoan.hasOwnProperty(taikhoan)) {
      //Hàm này kiểm tra xem một thuộc tính có tồn tại trong một đối tượng hay không.
      alert("Tài khoản này đã tồn tại");}
    else {
      thongtintaikhoan[taikhoan] = matkhau;
      alert("Đăng ký thành công");}
      return;
}
function dangnhap() 
{
  var taikhoan = document.getElementById("dn_email").value;
  var matkhau = document.getElementById("dn_pass").value;
  var userJson = localStorage.getItem('thongtintaikhoan');
  var thongtintaikhoan = JSON.parse(userJson);
  if (thongtintaikhoan==null) 
  {
      alert("Sai tên đăng nhập hoặc mật khẩu");
  }
  else if (thongtintaikhoan.matkhau === matkhau && thongtintaikhoan.taikhoan == taikhoan) {
      alert("Đăng nhập thành công");
      window.open('home.html', '_blank');
      window.close();
    }
      else{
      alert("Sai tên đăng nhập hoặc mật khẩu");
  }
}
//Hien thi dang nhap
const togglePasswordButton = document.getElementById('hienthimatkhau1');
const passwordInput = document.getElementById('dn_pass');

togglePasswordButton.addEventListener('click', () => {
  const isPasswordVisible = passwordInput.type === 'password';
  passwordInput.type = isPasswordVisible ? 'text' : 'password';

  togglePasswordButton.classList.toggle('show-password');
  togglePasswordButton.textContent = isPasswordVisible ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu';
});

//Hien thi dang ky
const togglePasswordButton2 = document.getElementById('hienthimatkhau2');
const passwordInput2 = document.getElementById('dk_pass');

togglePasswordButton2.addEventListener('click', () => {
  const isPasswordVisible2 = passwordInput2.type === 'password';
  passwordInput2.type = isPasswordVisible2 ? 'text' : 'password';

  togglePasswordButton2.classList.toggle('show-password');
  togglePasswordButton2.textContent = isPasswordVisible2 ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu';
});