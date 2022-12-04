import "../app.js";
import { showRating } from "../helpers.js";
import { getExercises } from "../models/exercises.js";
import { getCurrentUser } from "../models/user.js";

let exercisesData = [];


window.addEventListener('load', function () {
    const currentUser = getCurrentUser();

    if (currentUser != null) {
        const $filterByRecommended = document.getElementById('filter-by-recommended');
        $filterByRecommended.classList.remove('d-none');
        $filterByRecommended.classList.add('d-flex');
    }

    // lấy dữ liệu exercises từ firestore
    getExercises().then(function (data) {
        exercisesData = data;
        showExerciseList(exercisesData);
    });
});

// xử lý sự kiện khi tìm kiếm exercises theo từ khoá, phù hợp với bản thân

// truy xuất recommended-check
const $recommendedCheck = document.getElementById('recommended-check');
$recommendedCheck.onchange = filterAndShowExercises;
// truy xuất search-exercises-form
const $searchExercisesForm = document.getElementById('search-exercises-form');
$searchExercisesForm.onsubmit = function (event) {
    event.preventDefault();
    filterAndShowExercises();
}

// lọc exercises theo điều kiện
function filterAndShowExercises() {
    let keyword = $searchExercisesForm.keyword.value.toLowerCase();
    let recommended = $recommendedCheck.checked;

    // lọc tất cả exercises có tên chứa keyword
    let result = exercisesData.filter(function (exercise) {
        return exercise.name.toLowerCase().includes(keyword);
    });

    // lọc exercises phù hợp với người dùng
    const currentUser = getCurrentUser();
    if (recommended && currentUser) {
        result = result.filter(function (exercise) {
            const [minAge, maxAge] = exercise.recommended_ages.split('-');
            return exercise.recommended_genders.includes(currentUser.gender)
                && (exercise.recommended_purposes.filter(p => currentUser.purposes.includes(p)).length > 0)
                && (minAge <= currentUser.age && currentUser.age <= maxAge)
        });
    }

    showExerciseList(result);
}

// xử lý sự kiện khi sắp xếp exercises
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
        if (orderBy == 'Rating') compareValue = a.avg_rating - b.avg_rating;

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
    // truy xuất exercise-list
    const $exerciseList = document.getElementById('exercise-list');

    // xóa tất cả phần tử cũ trong exerciseList
    $exerciseList.innerHTML = '';

    for (let exercise of exercises) {
        // tạo thẻ div để chứa nội dung cho hiển thị
        const $exerciseContainer = document.createElement('div');
        $exerciseContainer.className = "col-lg-4 mb-3";
        $exerciseContainer.innerHTML = `
    <div class="exercise-container border rounded container-fluid" onclick="window.location='./exercise_detail.html?exercise_id=${exercise.id}'">
        <div class="row">
            <div class="col-12 exercise-img rounded-top mb-2" style="background-image: url('${exercise.image}');">
                <span class="h3 p-2 text-success float-end">
                    <i class="fas fa-check-circle"></i>
                </span>
            </div>
            <div class="col-12 exercise-name mb-2 h3">${exercise.name}</div>
            <div class="col-12 exercise-muscle mb-2">
                ${exercise.muscles.map(item => `<span class="badge bg-info">${item}</span>`).join('&nbsp;')}
            </div>
            <div class="col-6 exercise-calories">${exercise.calories} calories</div>
            <div class="col-6 exercise-rating text-warning text-end">${showRating(exercise.avg_rating)}</div>
        </div>
    </div>`;
        $exerciseList.append($exerciseContainer);
    }
}