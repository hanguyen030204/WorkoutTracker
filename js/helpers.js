// trong này chứa một vài hàm tiện ích để sử dụng

/**
 * Thực hiện biến đổi nhiều doc lấy từ firestore
 * @param {Array<object>} docs 
 * @return {object}
 */
function transformDocs(docs) {
    let result = [];

    for (let i = 0; i < docs.length; i++) {
        let newDoc = transformDoc(docs[i]);
        result.push(newDoc);
    }

    return result;
}

/**
 * Thực hiện biến đổi 1 document lấy từ firestore
 * @param {object} docs 
 * @return {object}
 */
function transformDoc(doc) {
    let newDoc = doc.data(); // newDoc là 1 object
    newDoc.id = doc.id; // thêm thuộc tính id vào newDoc
    newDoc._original = doc;
    newDoc._ref = doc.ref;
    return newDoc;
}

/**
 * Hiển thị rate dưới dạng các star
 * @param {Number} score
 * @return {String} 
 */
function showRating(score) {
    return `<i class="fas fa-star"></i>`.repeat(Math.ceil(score));
}

/**
 * Tạo lựa chọn rating
 * @param {String} elementId 
 */
function makeRateSelect(elementId, maxScore = 5) {
    const $rate = document.getElementById(elementId);
    $rate.classList.add('text-warning');
    $rate.innerHTML = '';

    $rate.getValue = function () {
        return $rate.getElementsByClassName('fas').length;
    }

    for (let i = 0; i < maxScore; i++) {
        const $star = document.createElement('i');
        $star.className = 'me-3 rate-star far fa-star';

        const value = i + 1;
        $star.onclick = function () {
            const $stars = $rate.getElementsByClassName('rate-star');
            for (let j = 0; j < $stars.length; j++) {
                const $item = $stars[j];
                $item.className = j < value ? 'me-3 rate-star fas fa-star' : 'me-3 rate-star far fa-star';
            }
        }

        $rate.append($star);
    }

    return $rate;
}


export { transformDocs, transformDoc, showRating, makeRateSelect };