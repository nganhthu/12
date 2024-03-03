// Một mảng giả định chứa thông tin các bài thi
var examData = [
    { id: 1, title: 'Bài thi 1', subject: 'Triết học', class: 'Lớp A', status: 'Có thể truy cập', type: 'Luyện tập' },
    { id: 2, title: 'Bài thi 2', subject: 'Lập trình c++', class: 'Lớp B', status: 'Đã lên lịch', type: 'Cuối kỳ' },
    { id: 3, title: 'Bài thi 3', subject: 'Nhập môn CNPM', class: 'Lớp B', status: 'Đã lên lịch', type: 'Giữa kỳ' },
    { id: 4, title: 'Bài thi 4', subject: 'Nhập môn TTNT', class: 'Lớp A', status: 'Đã lên lịch', type: 'Cuối kỳ' },
];

// Hàm để hiển thị danh sách các bài thi
function displayExamList() {
    var examListSection = document.getElementById('examList');

    examData.forEach(function(exam) {
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



        examItem.appendChild(examTitle);
        examItem.appendChild(examDetails);
        examContainer.appendChild(examItem);

        examListSection.appendChild(examContainer);
    });
}

// Gọi hàm để hiển thị danh sách các bài thi khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    displayExamList();
});