// trong file này sẽ có 4 thao tác cơ bản: Create-Read-Update-Delete
// cái filters sẽ có nhiệm vụ lọc ra những bài tập nếu người dùng thực hiện thao tác tìm kiếm, sắp xếp
// chỗ filters a cứ truyền vào trước, xử lý thì để sau nhé
// 

import { transformDocs } from "../helpers.js";
import { addDoc, collection, db, getDocs } from "../init.js";

/**
 * Lấy dữ liệu exercises
 * @param {object} filters 
 * @returns {Promise}
 */
function getExercises(filters = null) {
    return getDocs(collection(db, "exercises")).then(function (response) {
        // log ra cái response để xem trong đấy có gì, dữ liệu cần thiết ở đâu
        // chắc chắn dữ liệu nằm trong thuộc tính docs của response
        let result = transformDocs(response.docs);
        return result;
    });
}

/**
 * Tạo mới exericse
 * @param {*} exercise 
 * @returns {Promise}
 */
function createExercise(exercise) {
    return addDoc(collection(db, "exercises"), exercise);
}

export { getExercises, createExercise };