
var cart = JSON.parse(localStorage.getItem("cart"));
if (cart!=null)
{
    giohang = cart;
}
else
{
    var giohang = [];
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
    window.location.assign("productlist.html")
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
    var cart = JSON.parse(localStorage.getItem("cart"));
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
            <td><button onclick ="xoa(`+stt+`)">Xoa</button></td>
            </tr>`;
        }
        document.getElementById("thongtingiohang").innerHTML = kq;
    }
}
function xoa(stt)
{
    var cart = this.data;
    for (k = 0;k<list.length;k++)
    {
        if (cart[i].stt == stt)
        {
            giohang.splice(i,1);
            window.location.assign("cart.html")
        }
    }
}

function tang(x, i)
{
    var td = x.parentElement;
    var sl = parseInt(td.childNodes[1].innerHTML);
    var slmoi = sl+1;
    td.childNodes[1].innerHTML = slmoi;
    giohang[i]["soluong"] = slmoi;
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
