// xử lý tìm kiếm và lọc
function searchAndFilter() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var statusFilter = document.getElementById('statusFilter').value;
    
    // Lấy danh sách kỳ thi
    var examList = [
        { name: 'Luyện tập', status: 'accessible' },
        { name: 'Giữa kỳ', status: 'scheduled' },
        { name: 'Cuối kỳ', status: 'accessible' },
    ];

    // Lọc và hiển thị danh sách kỳ thi
    var filteredExams = examList.filter(function(exam) {
        return (exam.name.toLowerCase().includes(searchInput) || searchInput === '') &&
               (statusFilter === 'all' || exam.status === statusFilter);
    });

    displayExamList(filteredExams);
}

function displayExamList(exams) {
    var examListContainer = document.getElementById('examList');
    examListContainer.innerHTML = '';

    exams.forEach(function(exam) {
        var listItem = document.createElement('li');
        listItem.textContent = exam.name + ' - ' + exam.status;
        examListContainer.appendChild(listItem);
    });
}

searchAndFilter();



//Xử lý logic đăng nhập user, admin
function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Gọi hàm xác thực tài khoản
    var userRole = authenticateUser(username, password);

    if (userRole === "user") {
        alert("Đăng nhập thành công!"); 
        window.location.href = "trang_chinh_user.html"; // Chuyển hướng về trang chính (user)
    } else if (userRole === "admin") {
        alert("Đăng nhập thành công!");
        window.location.href = "admin-dashboard.html"; // Chuyển hướng về trang admin
    } else {
        alert("Thông tin đăng nhập không đúng.");
    }

    return false; // Ngăn chặn việc submit form 
}

function authenticateUser(username, password) {
    // mô phỏng thực hiện xác thực tài khoản
    var registeredUsers = [
        { username: "user1", password: "password1", role: "user" },
        { username: "admin", password: "admin123", role: "admin" },
        { username: "user2", password: "password2", role: "user" },
        { username: "user3", password: "password3", role: "user" },
    ];

    // Kiểm tra xem thông tin đăng nhập có trùng khớp với bất kỳ tài khoản đã đăng ký nào không
    for (var i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i].username === username && registeredUsers[i].password === password) {
            return registeredUsers[i].role; 
        }
    }

    return null; // không tìm thấy tài khoản
}


//Xử lý logic đăng ký
function validateRegisterForm() {
    var newUsername = document.getElementById("newUsername").value;
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Kiểm tra xác nhận mật khẩu
    if (newPassword !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp.");
        return false; // Ngăn chặn việc submit form
    }
    
    // Gọi hàm đăng ký tài khoản
    registerUser(newUsername, email, newPassword);
    
    alert("Đăng ký thành công!"); 
        window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập
    
        return false; // Ngăn chặn việc submit form 
    }
    
    function registerUser(username, email, password) {
        //mô phỏng đăng ký tài khoản
        console.log("Đăng ký tài khoản:", { username, email, password });
    }
    
