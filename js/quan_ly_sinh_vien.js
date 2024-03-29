// Dữ liệu sinh viên
var students = [
    { name: "Nguyễn Văn A", id: "B21DCCN001", className: "CN01" },
    { name: "Trần Thị B", id: "B21DCCN002", className: "CN12" },
    { name: "Lê Văn C", id: "B21DCCN003", className: "CN02" },
    { name: "Phạm Thị D", id: "B21DCCN045", className: "CN08" },
    { name: "Nguyễn Thị E", id: "B21DCCN123", className: "CN06" }

];

// Hiển thị danh sách sinh viên
function displayStudents(studentList) {
    var tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";
    studentList.forEach(function(student) {
        var row = "<tr>";
        row += "<td >" + student.name + "</td>";
        row += "<td>" + student.id + "</td>";
        row += "<td>" + student.className + "</td>";
        row += "<td class='action-buttons'>";
        row += "<button onclick='showStudentDetail(\"" + student.id + "\")'>Chi tiết</button>";
        row += "<button onclick='editStudent(\"" + student.id + "\")'>Chỉnh sửa</button>";
        row += "<button onclick='deleteStudent(\"" + student.id + "\")'>Xóa</button>";
        row += "</td>";
        row += "</tr>";
        tableBody.innerHTML += row;
    });
}

// Tìm kiếm sinh viên
function searchStudent() {
    var searchText = document.getElementById("searchInput").value.toLowerCase();
    var filteredStudents = students.filter(function(student) {
        return student.name.toLowerCase().includes(searchText) || student.id.toLowerCase().includes(searchText);
    });
    displayStudents(filteredStudents);
}

// Hiển thị trang chi tiết sinh viên
function showStudentDetail(studentId) {
    // Điều hướng đến trang chi tiết sinh viên
    window.location.href = "chi_tiet_sinh_vien.html?id=" + studentId;
}

// Hiển thị trang chỉnh sửa sinh viên
function editStudent(studentId) {
    // Điều hướng đến trang chỉnh sửa sinh viên
    window.location.href = "chinh_sua_quan_ly_sinh_vien.html?id=" + studentId;
}

// Xóa sinh viên
function deleteStudent(studentId) {
    if (confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
        // Xóa sinh viên từ danh sách students
        students = students.filter(function(student) {
            return student.id !== studentId;
        });
        displayStudents(students);
        alert("Xóa thành công!");
    }
}

// Khởi chạy
displayStudents(students);

function goToAddStudent() {
    window.location.href = "them_sinh_vien.html";
}
