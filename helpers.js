// trong này chứa một vài hàm tiện ích để sử dụng

/**
 * Thực hiện biến đổi dữ liệu lấy từ firestore
 * @param {Array<object>} docs 
 */
function transformDocs(docs) {
    // cái docs nó là 1 mảng, Hà biết mảng là gì chưa? là array đấy. 
    // đã đc học thao tác về mảng chưa? duyệt mảng, biến đổi mảng, sắp xếp? 
    // thì để ý vào cái docs lần nữa này, docs là 1 array chứa các object cùng kiểu. mỗi object sẽ có id, data.
    // a sẽ dựa vào 2 cái này để lấy ra được dữ liệu mình cần

    let result = [];

    for (let i = 0; i < docs.length; i++) {
        let doc = docs[i];

        let newDoc = doc.data(); // newDoc là 1 object
        newDoc.id = doc.id; // thêm thuộc tính id vào newDoc

        result.push(newDoc);
    }

    return result;
}

export { transformDocs };