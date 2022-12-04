import { generateExerciseData } from "../data/exerciseData.js";

// tạo thêm bản ghi trong collection exercises
const $generateExercisesBtn = document.getElementById('generate-exercises-btn');
$generateExercisesBtn.onclick = function () {
    generateExerciseData();
    console.log("Tạo thêm exercises");
}