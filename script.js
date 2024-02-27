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

