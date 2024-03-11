// ket_qua_bai_thi.js

// Mảng giả định chứa thông tin kết quả các bài thi
var resultData = [
    { examId: 1, title: 'Bài thi 1', subject: 'Triết học', class: 'Lớp A', date:'12/03/2024', result: 'Đạt', score: 6 },
    { examId: 2, title: 'Bài thi 2', subject: 'Lập trình C++', class: 'Lớp B', date:'05/03/2024', result: 'Không đạt', score: 45 },
    { examId: 3, title: 'Bài thi 3', subject: 'Nhập môn CNPM', class: 'Lớp B', date:'01/03/2024',result: 'Đạt', score: 78 },
    { examId: 4, title: 'Bài thi 4', subject: 'Nhập môn TTNT', class: 'Lớp A', date:'06/02/2024',result: 'Không đạt', score: 32 },
    { examId: 5, title: 'Bài thi 5', subject: 'Hệ điều hành', class: 'Lớp A',  },
    { examId: 6, title: 'Bài thi 6', subject: 'Kiến trúc máy tính', class: 'Lớp C',  },
    { examId: 7, title: 'Bài thi 7', subject: 'Tư tưởng HCM', class: 'Lớp D',date:'12/01/2024', result: 'Đạt', score: 88 },
    { examId: 8, title: 'Bài thi 8', subject: 'Toán rời rạc 1', class: 'Lớp E', },
];

// Hàm để hiển thị danh sách kết quả các bài thi
function displayResultList(results) {
    var resultListSection = document.getElementById('resultList');
    resultListSection.innerHTML = ''; // Xóa nội dung cũ của danh sách
    var score = parseInt(sessionStorage.getItem('score'));

    (results || resultData).forEach(function(result) {
        var resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');

        var resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        var resultInfo = document.createElement('p');
        resultInfo.innerHTML = `<strong>Tiêu đề:</strong> ${result.title} <br>
                                <strong>Môn học:</strong> ${result.subject} <br>
                                <strong>Lớp:</strong> ${result.class}<br>
                                <strong>Ngày làm:</strong> ${result.date}<br>
                                <strong>Điểm số:</strong> ${result.score}<br>
                                <strong>Kết quả:</strong> ${result.result} <br>`;

        // Thêm nút xem kết quả và xử lý sự kiện
        var viewResultButton = document.createElement('button');
        viewResultButton.textContent = 'Xem Kết Quả';
        viewResultButton.addEventListener('click', function() {
            var examId = result.examId;
            var resultUrl = `result_${examId}.html`; // Đặt tên trang kết quả theo examId

            // Mở trang trong tab mới
            window.open(resultUrl, '_blank');
        });

        resultItem.appendChild(resultInfo);
        resultItem.appendChild(viewResultButton);
        resultContainer.appendChild(resultItem);

        resultListSection.appendChild(resultContainer);
    });
}

// Hàm để tìm kiếm và lọc danh sách kết quả
function searchAndFilterResults() {
    var searchInputResult = document.getElementById('searchInputResult').value.toLowerCase();

    // Thêm log để kiểm tra giá trị của bộ lọc tìm kiếm
    console.log("Search Input for Results:", searchInputResult);

    var filteredResults = resultData.filter(function(result) {
        return (
            (result.examId.toString().includes(searchInputResult) ||
             result.result.toLowerCase().includes(searchInputResult) ||
             result.score.toString().includes(searchInputResult))
        );
    });

    displayResultList(filteredResults);
}

// Gọi hàm để hiển thị danh sách kết quả khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    searchAndFilterResults(); // Hiển thị danh sách mặc định khi trang được tải
});
