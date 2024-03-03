function loadHeaderAndFooter() {
    // Tải header
    fetch('header_user.html')
        .then(response => response.text())
        .then(data => {
            console.log('Đã tải header thành công');
            document.getElementById('headeruserSection').innerHTML = data;
        })
        .catch(error => console.error('Lỗi khi tải header:', error));

    // Tải footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            console.log('Đã tải footer thành công');
            document.getElementById('footerSection').innerHTML = data;
        })
        .catch(error => console.error('Lỗi khi tải footer:', error));
}

// Gọi hàm khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    loadHeaderAndFooter();
});
