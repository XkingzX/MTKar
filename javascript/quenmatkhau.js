function quenmatkhau() 
{
    var taikhoan = document.getElementById("dn_email").value;
    var userJson = localStorage.getItem(taikhoan);
    var thongtintaikhoan = JSON.parse(userJson);
    if (thongtintaikhoan == null) 
    {
        alert("Email không tồn tại!");
        document.getElementById("dn_email").value = '';
    }
    else if(thongtintaikhoan.taikhoan==taikhoan) 
    {
        document.getElementById("dn_email").value = '';
        alert("Một tin nhắn đã được gửi tới email của bạn, vui lòng kiểm tra!");
    }
}
