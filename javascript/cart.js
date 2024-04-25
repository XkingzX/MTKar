var giohang = [];
var btn = document.getElementsByTagName("button");
for (let i = 0; i < btn.length; i++)
{
    btn[i].addEventListener("click", function()
    {
        var hinh = btn[i].parentElement.childNodes[1].src;
        var ten = btn[i].parentElement.childNodes[3].text;
        var gia = btn[i].parentElement.childNodes[7].value;
        var soluong = 1;
        var sp = {
            "hinh":hinh,
            "ten":ten,
            "gia":gia,
            "soluong":soluong,
        }
        giohang.push(sp);
    })
}