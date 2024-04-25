var cart = JSON.parse(localStorage.getItem("cart"));
if (cart!=null)
{
    giohang = cart;
}
else
{
    var giohang = [];
}
function openorder()
{
    window.location.assign("order.html")
}
function opencart()
{
    window.location.assign("cart.html")
}
function moreinfo()
{
    window.location.assign("product.html")
}
function productlist()
{
    window.location.assign("shop.html")
}
function emailsubmit()
{
    var mail;
    mail = document.getElementById("email").value;
    if(mail != null)
    alert ("Dang ky thanh cong");


    else{
        alert ("Vui long nhap Email");
}
}
function loaddatahome()
{
    loadcart();
}
function loaddatacart()
{
    loadcart();
    showcart();
    total();
}
function showcart()
{
    if (cart!=null)
    {
        var kq = "";
        for(let i =0;i<cart.length;i++)
        {
            let stt = i+1;
            kq += `                            
            <tr>
            <td>`+ stt +`</td>
            <td><img src ="`+ cart[i]["hinh"] +`" height = "80px"</td>
            <td>`+ cart[i]["ten"] +`</td>
            <td>`+"$"+ cart[i]["gia"]+`</td>
            <td><button onclick ="giam(this,`+i+`)">-</button><span>`+ cart[i]["soluong"] +`</span><button onclick ="tang(this,`+i+`)">+</button></td>
            <td><button onclick ="xoa(${cart[i].id})">Xoa</button></td>
            </tr>`;   
        }
        localStorage.setItem("cart",JSON.stringify(giohang));
        document.getElementById("thongtingiohang").innerHTML = kq;
    }
}
function xoa(x)
{
    for(let k=0;k<cart.length;k++)
    {
        if (cart[k].id == x)
        {
            cart.splice(k, 1);           
        }
    }
    loaddatacart();

}
function tang(x, i)
{
    var td = x.parentElement;
    var sl = parseInt(td.childNodes[1].innerHTML);
    var slmoi = sl+1;
    td.childNodes[1].innerHTML = slmoi;
    giohang[i]["soluong"] = slmoi;
    localStorage.setItem("cart",JSON.stringify(giohang));
    total();
}
function giam(x, i)
{
    var td = x.parentElement;
    var sl = parseInt(td.childNodes[1].innerHTML);
    if (sl == 1)
    {
        alert("Không thể giảm thêm");
    }
    else
    {    
        var slmoi = sl-1;
        td.childNodes[1].innerHTML = slmoi;
        giohang[i]["soluong"] = slmoi;
        localStorage.setItem("cart",JSON.stringify(giohang));
        total();}

    }
function total()
{
    var cart = giohang;
    if (cart!=null)
    {
        var total = 0;
        for(let i =0;i<cart.length;i++)
        {
            var tt= parseFloat(cart[i]["gia"]) * parseFloat(cart[i]["soluong"]);
            total += tt;

        }
        document.getElementById("tongdonhang").innerHTML = "Tổng đơn hàng: $"+ total;
    }
}
function loadcart()
{
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart!=null)
    {
        document.getElementById("slsp").innerHTML = cart.length;
    }
}
function delcart()
{
    localStorage.removeItem("cart");
    alert("Xoá giỏ hàng thành công");
    window.location = "cart.html";
}
function kiemtradangnhap_donhang(){
    {
      var laydulieu = localStorage.getItem('thongtintaikhoan');
      if (laydulieu !== null) {
        
        var thongtintaikhoan = JSON.parse(laydulieu);

        var tenNguoiDung = document.getElementById('ten-nguoi-dung');
        tenNguoiDung.innerHTML = "<span style='color: white;'>Xin chào, </span>" + thongtintaikhoan.tendangnhap;
      }
      else if (laydulieu == null){
        var tenNguoiDung = document.getElementById('ten-nguoi-dung');
        tenNguoiDung.textContent = '';
      }
    }
  };