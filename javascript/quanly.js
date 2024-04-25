const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


const Orders = [
    {
        productName: 'Lamboghini Revuelto',
        productNumber: '1',
        paymentStatus: 'Đã thanh toán',
        status: 'Đang giao'
    },
    {
        productName: 'Lamboghini Huracán',
        productNumber: '1',
        paymentStatus: 'Chưa thanh toán',
        status: 'Từ chối'
    },
    {
        productName: 'Tesla Model S',
        productNumber: '1',
        paymentStatus: 'Đã thanh toán',
        status: 'Hoàn thành'
    },
    {
        productName: 'BMW 330',
        productNumber: '1',
        paymentStatus: 'Đã thanh toán',
        status: 'Hoàn thành'
    },
]
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Từ chối' ? 'danger' : order.status === 'Đang giao' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Chi tiết</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});
//Hiển thị tên người dùng        
window.onload = function() {
    var laydulieu = localStorage.getItem('thongtintaikhoan');
    if (laydulieu !== null) {
        var thongtintaikhoan = JSON.parse(laydulieu);
        var tenNguoiDung = document.getElementById('ten-nguoi-dung');
        tenNguoiDung.textContent = thongtintaikhoan.tendangnhap;
    }
    };