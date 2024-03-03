// Mảng giả định chứa thông tin các bài thi
var examData = [
    { id: 1, title: 'Bài thi 1', subject: 'Triết học', class: 'Lớp A', status: 'Có thể truy cập', type: 'Luyện tập' },
    { id: 2, title: 'Bài thi 2', subject: 'Lập trình C++', class: 'Lớp B', status: 'Đã lên lịch', type: 'Cuối kỳ' },
    { id: 3, title: 'Bài thi 3', subject: 'Nhập môn CNPM', class: 'Lớp B', status: 'Đã lên lịch', type: 'Giữa kỳ' },
    { id: 4, title: 'Bài thi 4', subject: 'Nhập môn TTNT', class: 'Lớp A', status: 'Đã lên lịch', type: 'Cuối kỳ' },
    { id: 5, title: 'Bài thi 5', subject: 'Hệ điều hành', class: 'Lớp A', status: 'Đã lên lịch', type: 'Cuối kỳ' },
    { id: 6, title: 'Bài thi 6', subject: 'Kiến trúc máy tính', class: 'Lớp C', status: 'Có thể truy cập', type: 'Cuối kỳ' },
    { id: 7, title: 'Bài thi 7', subject: 'Tư tưởng HCM', class: 'Lớp D', status: 'Đã lên lịch', type: 'Giữa kỳ' },
    { id: 8, title: 'Bài thi 8', subject: 'Toán rời rạc 1', class: 'Lớp E', status: 'Có thể truy cập', type: 'Luyện tập' },
];

// Hàm để hiển thị danh sách các bài thi
function displayExamList(exams) {
    var examListSection = document.getElementById('examList');
    examListSection.innerHTML = ''; // Xóa nội dung cũ của danh sách

    (exams || examData).forEach(function(exam) {
        var examContainer = document.createElement('div');
        examContainer.classList.add('exam-container');

        var examItem = document.createElement('div');
        examItem.classList.add('exam-item');

        var examTitle = document.createElement('h3');
        examTitle.textContent = exam.title;

        var examDetails = document.createElement('p');
        examDetails.innerHTML = `<strong>Môn học:</strong> ${exam.subject} <br>
                                <strong>Lớp học:</strong> ${exam.class} <br>
                                <strong>Trạng thái:</strong> ${exam.status} <br>
                                <strong>Kỳ thi:</strong> ${exam.type}`;

        // Thêm nút bắt đầu làm bài và xử lý sự kiện
        var startButton = document.createElement('button');
        startButton.textContent = 'Bắt đầu làm bài';
        startButton.addEventListener('click', function() {
            var examId = exam.id;
            var examUrl = `exam_${examId}.html`; // Đặt tên trang bài thi theo id

            // Mở trang trong tab mới
            window.open(examUrl, '_blank');
        });

        examItem.appendChild(examTitle);
        examItem.appendChild(examDetails);
        examItem.appendChild(startButton);
        examContainer.appendChild(examItem);

        examListSection.appendChild(examContainer);
    });
}

// Hàm để tìm kiếm và lọc danh sách bài thi
function searchAndFilter() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var statusFilter = document.getElementById('statusFilter').value;
    var subjectFilter = document.getElementById('subjectFilter').value;
    var classFilter = document.getElementById('classFilter').value;
    var examFilter = document.getElementById('examFilter').value;

    // Thêm log để kiểm tra giá trị của các bộ lọc
    console.log("Search Input:", searchInput);
    console.log("Status Filter:", statusFilter);
    console.log("Subject Filter:", subjectFilter);
    console.log("Class Filter:", classFilter);
    console.log("Exam Filter:", examFilter);

    var filteredExams = examData.filter(function(exam) {
        return (
            (exam.id.toString().includes(searchInput) ||
             exam.title.toLowerCase().includes(searchInput) ||
             exam.subject.toLowerCase().includes(searchInput) ||
             exam.class.toLowerCase().includes(searchInput) ||
             exam.status.toLowerCase().includes(searchInput) ||
             exam.type.toLowerCase().includes(searchInput)) &&
            (statusFilter === 'all' || exam.status.toLowerCase().includes(statusFilter)) &&
            (subjectFilter === 'all' || exam.subject.toLowerCase().includes(subjectFilter)) &&
            (classFilter === 'all' || exam.class.toLowerCase().includes(classFilter)) &&
            (examFilter === 'all' || exam.type.toLowerCase().includes(examFilter))
        );
    });

    displayExamList(filteredExams);
}



// Gọi hàm để hiển thị danh sách các bài thi khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    searchAndFilter(); // Hiển thị danh sách mặc định khi trang được tải
});
