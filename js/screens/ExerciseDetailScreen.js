import "../app.js";
import { makeRateSelect, showRating } from "../helpers.js";
import { getExerciseById } from "../models/exercises.js";
import { getCurrentUser } from "../models/user.js";
import { getViewsByExerciseId, rateExercise } from "../models/user_exercise.js";

let exerciseData = {};

window.addEventListener('load', function () {
    // lấy exercise_id tại queryString
    const params = new URLSearchParams(window.location.search);
    const exerciseId = params.get("exercise_id");

    const $commentForm = document.getElementById('comment-form');
    const $commentAlert = document.getElementById('comment-alert');
    const $recommentExercise = document.getElementById('recomment-exercise');

    $recommentExercise.onclick = function () {
        $commentForm.classList.remove('d-none');
        $commentAlert.classList.add('d-none');
    }

    if (!exerciseId) {
        showNotFound();
        return;
    }

    // lấy chi tiết exercise
    getExerciseById(exerciseId).then(function (exercise) {
        exerciseData = exercise;
        showExerciseDetail(exerciseData);
    }).catch(function (error) {
        console.error(error)
        showNotFound();
    });

    // xử lý thêm bình luận
    const currentUser = getCurrentUser();
    if (currentUser == null) {
        $commentForm.classList.add('d-none');
    } else {
        const $rateSelect = makeRateSelect('rate-select');
        const $scoreError = document.getElementById('score-error');
        const $commentError = document.getElementById('comment-error');
        const $commentList = document.getElementById('comment-list');

        $commentForm.onsubmit = function (event) {
            event.preventDefault();

            $scoreError.innerHTML = '';
            $commentError.innerHTML = '';

            let score = $rateSelect.getValue();
            let comment = $commentForm.comment.value.trim();

            let isPassed = true;
            if (!score) {
                isPassed = false;
                $scoreError.innerHTML = "Nhập vào điểm số";
            }

            if (!comment) {
                isPassed = false;
                $commentError.innerHTML = 'Nhập vào bình luận';
            }

            if (isPassed) {
                rateExercise(exerciseId, score, comment).then(function (data) {
                    $commentAlert.classList.remove('d-none');
                    $commentForm.classList.add('d-none');

                    let $currentComment = document.querySelector(`.comment-container[data-user-id=${currentUser.id}]`);
                    let $tmp = generateCommentContainer(data);
                    if (!$currentComment) {
                        $commentList.prepend($tmp);
                    } else {
                        $currentComment.replaceWith($tmp);
                    }
                });
            }
        };
    }

    // lấy danh sách comment
    getViewsByExerciseId(exerciseId).then(function (views) {

        const comments = views.filter(v => v.score !== null).sort(function (a, b) {
            if (a.user_id == currentUser.id) return -1;
            if (b.user_id == currentUser.id) return 1;

            return new Date(b.comment_at) - new Date(a.comment_at);
        });

        const currentUserComment = comments.find(c => c.user_id == currentUser.id);
        if (currentUserComment != null) {
            $commentAlert.classList.remove('d-none');
            $commentForm.classList.add('d-none');
        }

        showComments(comments);

        // tính toán score info
        let result = {
            avgScore: 0,
            userNumber: comments.length,
            progress: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
        };

        if (comments.length > 0) {
            for (let comment of comments) {
                result.avgScore += comment.score;
                result.progress[comment.score] += 1;
            }

            result.avgScore /= comments.length;

            for (let key in result.progress) {
                result.progress[key] = result.progress[key] * 100 / comments.length;
            }
        }

        showScoreInfo(result);

    });

});

function showExerciseDetail(exercise) {
    const $name = document.getElementById("exercise-name");
    const $calories = document.getElementById("exercise-calories");
    const $difficulty = document.getElementById("exercise-difficulty");
    const $equipments = document.getElementById("exercise-equipments");
    const $muscle = document.getElementById("exercise-muscle");
    const $description = document.getElementById("exercise-description");
    const $instruction = document.getElementById("exercise-instruction");
    const $video = document.getElementById("exercise-video");
    const $purposes = document.getElementById("exercise-purposes");
    const $genders = document.getElementById("exercise-genders");
    const $ages = document.getElementById("exercise-ages");

    $name.innerHTML = exercise.name;
    $calories.innerHTML = exercise.calories;
    $difficulty.innerHTML = exercise.difficulty;
    $equipments.innerHTML = exercise.equipments.length > 0
        ? exercise.equipments.map(item => `<span class="badge bg-warning">${item}</span>`).join('&nbsp;')
        : "Không";
    $muscle.innerHTML = exercise.muscles.map(item => `<span class="badge bg-info">${item}</span>`).join('&nbsp;');
    $description.innerHTML = exercise.description;
    $instruction.innerHTML = exercise.instruction;
    $video.src = exercise.video;
    $purposes.innerHTML = exercise.recommended_purposes.map(item => `<p>- ${item}</p>`).join('');
    $genders.innerHTML = exercise.recommended_genders.join(' và ');
    $ages.innerHTML = exercise.recommended_ages;
}

function showNotFound() {
    const $exerciseDetail = document.getElementById('exercise-detail');
    const $notFound = document.getElementById('not-found');

    $exerciseDetail.classList.add('d-none');
    $notFound.classList.remove('d-none');
}

function showComments(comments) {
    const $commentList = document.getElementById('comment-list');
    $commentList.innerHTML = '';

    for (let view of comments) {
        let $commentContainer = generateCommentContainer(view);
        $commentList.append($commentContainer);
    }
}

function generateCommentContainer(data) {
    let $commentContainer = document.createElement('div');
    $commentContainer.className = 'comment-container border d-flex mb-3 p-3';
    $commentContainer.setAttribute('data-exercise-id', data.exercise_id);
    $commentContainer.setAttribute('data-user-id', data.user_id);

    $commentContainer.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" width="50" height="50" class="rounded-circle">
        <div class="w-100 ms-3">
            <div>
                <b class="comment-user">${data.user?.name || 'User 1'}</b>
                &nbsp;&nbsp;&nbsp;
                <span class="text-warning">${showRating(data.score)}</span>
                <div class="text-secondary float-end">${new Date(data.comment_at).toLocaleString()}</div>
            </div>
            <div>${data.comment}</div>
        </div>
    `;
    return $commentContainer;
}

function showScoreInfo(data) {
    console.log(data);
    const $avgScore = document.getElementById('avg-score');
    const $avgStar = document.getElementById('avg-star');
    const $userNumber = document.getElementById('user-number');

    $avgScore.innerHTML = data.avgScore;
    $avgStar.innerHTML = showRating(data.avgScore);
    $userNumber.innerHTML = data.userNumber;

    showStarProgress(data.progress);
}

function showStarProgress(data) {
    const $starProgress = document.getElementById('star-progress');
    $starProgress.innerHTML = '';

    for (let key in data) {
        const $item = document.createElement('div');
        $item.className = 'd-flex align-items-center mb-2';
        $item.innerHTML = `
        <b class="me-3"><i class="fas fa-star"></i> ${key}</b>
        <div class="progress w-50">
            <div class="progress-bar bg-success" style="width: ${data[key]}%;" role="progressbar" id="five-star-number"></div>
        </div>
        `;

        $starProgress.append($item);
    }
}