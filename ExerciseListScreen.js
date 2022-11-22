import { getExercises } from "../models/exercises.js";

let exercisesData = [];

// truy xuất exercise-list
const $exerciseList = document.getElementById('exercise-list');

// truy xuất search-exercises-form
const $searchExercisesForm = document.getElementById('search-exercises-form');
$searchExercisesForm.onsubmit = function (event) {
    event.preventDefault();

    let keyword = $searchExercisesForm.keyword.value.toLowerCase();

    // lọc tất cả exercise có tên chứa keyword
    let filter = exercisesData.filter(function (exercise) {
        return exercise.name.toLowerCase().includes(keyword);
    });

    // hiển thị dữ liệu đã được lọc
    showExerciseList(filter);
}

// truy xuất phần tử có id là order-by
const $orderBy = document.getElementById('order-by');
// truy xuất phần tử có id là order-direction
const $orderDirection = document.getElementById('order-direction');

$orderBy.onchange = sortExecises;
$orderDirection.onchange = sortExecises;

function sortExecises() {
    // lấy ra tiêu chí sắp xếp & thứ tự sắp xếp
    const orderBy = $orderBy.value;
    const orderDirection = $orderDirection.value;

    // tiến hành sắp xếp sử dụng phương thức sort của mảng
    let sortedExercises = exercisesData.sort(function (a, b) {
        let compareValue = 0;

        if (orderBy == 'Ngày tạo') compareValue = new Date(a.created_at) - new Date(b.created_at);
        if (orderBy == 'Calories') compareValue = a.calories - b.calories;

        if (orderDirection == 'Giảm dần') compareValue = -compareValue;

        return compareValue;
    });

    showExerciseList(sortedExercises);
}


/**
 * Hiển thị dữ liệu lên màn hình
 * @param {Array<any>} exercises 
 */
function showExerciseList(exercises) {
    // xóa tất cả phần tử cũ trong exerciseList
    $exerciseList.innerHTML = '';

    for (let exercise of exercises) {
        // tạo thẻ div để chứa nội dung cho hiển thị
        const $exerciseContainer = document.createElement('div');
        $exerciseContainer.className = "col-lg-3 mb-3";
        $exerciseContainer.innerHTML = `
    <div class="exercise-container border rounded container-fluid">
        <div class="row">
            <div class="col-12 exercise-img rounded mb-2" style="background-image: url('${exercise.image}');">
                <span class="h3 p-2 text-success float-end">
                    <i class="fas fa-check-circle"></i>
                </span>
            </div>
            <div class="col-12 exercise-name mb-2 h3">${exercise.name}</div>
            <div class="col-12 exercise-muscle mb-2">
                ${exercise.muscle.map(item => `<span class="badge bg-info">${item}</span>`).join('&nbsp;')}
            </div>
            <div class="col-6 exercise-calories">${exercise.calories} calories</div>
            <div class="col-6 exercise-rating text-warning text-end">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
    </div>`;
        $exerciseList.append($exerciseContainer);
    }
}

function start() {
    // lấy dữ liệu exercises từ firestore
    getExercises().then(function (data) {
        exercisesData = data;
        showExerciseList(exercisesData);
    });

}

start();