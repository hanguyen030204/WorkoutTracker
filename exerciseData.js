import { createExercise } from "../models/exercises.js";

let exerciseData = [
    {
        "name": "Canis mesomelas",
        "muscle": [
            "Chest",
            "Arm"
        ],
        "instruction": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "difficulty": "Insane",
        "description": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "calories": 495,
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-04-24"
    }, {
        "name": "Anastomus oscitans",
        "muscle": [
            "Leg",
            "Abs"
        ],
        "instruction": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
        "difficulty": "Normal",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "calories": 920,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-10-12"
    }, {
        "name": "Felis silvestris lybica",
        "muscle": [
            "Butt",
            "Leg"
        ],
        "instruction": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "difficulty": "Insane",
        "description": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        "calories": 111,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-23"
    }, {
        "name": "Panthera leo persica",
        "muscle": [
            "Butt",
            "Abs"
        ],
        "instruction": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "difficulty": "Advanced",
        "description": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
        "calories": 961,
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-11-05"
    }, {
        "name": "Sagittarius serpentarius",
        "muscle": [
            "Leg",
            "Arm"
        ],
        "instruction": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "difficulty": "Advanced",
        "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "calories": 770,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-08-18"
    }, {
        "name": "Trichechus inunguis",
        "muscle": [
            "Butt",
            "Chest"
        ],
        "instruction": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
        "difficulty": "Easy",
        "description": "Cras pellentesque volutpat dui.",
        "calories": 407,
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-04-10"
    }, {
        "name": "Varanus salvator",
        "muscle": [
            "Arm",
            "Leg"
        ],
        "instruction": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
        "difficulty": "Easy",
        "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
        "calories": 118,
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-03-19"
    }, {
        "name": "Branta canadensis",
        "muscle": [
            "Abs",
            "Arm"
        ],
        "instruction": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
        "difficulty": "Advanced",
        "description": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
        "calories": 824,
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-04-11"
    }, {
        "name": "Ceratotherium simum",
        "muscle": [
            "Leg",
            "Arm"
        ],
        "instruction": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
        "difficulty": "Advanced",
        "description": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "calories": 365,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-23"
    }, {
        "name": "Cynomys ludovicianus",
        "muscle": [
            "Chest",
            "Leg"
        ],
        "instruction": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "difficulty": "Normal",
        "description": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "calories": 527,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-08-16"
    }, {
        "name": "Anser anser",
        "muscle": [
            "Butt",
            "Chest"
        ],
        "instruction": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "difficulty": "Easy",
        "description": "In quis justo.",
        "calories": 776,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-05-11"
    }, {
        "name": "Tamiasciurus hudsonicus",
        "muscle": [
            "Leg",
            "Butt"
        ],
        "instruction": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "difficulty": "Advanced",
        "description": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
        "calories": 102,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-01-18"
    }, {
        "name": "Damaliscus dorcas",
        "muscle": [
            "Chest",
            "Butt"
        ],
        "instruction": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "difficulty": "Easy",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "calories": 512,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-02-17"
    }, {
        "name": "Terathopius ecaudatus",
        "muscle": [
            "Leg",
            "Abs"
        ],
        "instruction": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "difficulty": "Advanced",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
        "calories": 843,
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-07-21"
    }, {
        "name": "Nesomimus trifasciatus",
        "muscle": [
            "Arm",
            "Chest"
        ],
        "instruction": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "difficulty": "Insane",
        "description": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
        "calories": 528,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2021-12-02"
    }, {
        "name": "Haliaeetus leucoryphus",
        "muscle": [
            "Abs",
            "Chest"
        ],
        "instruction": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
        "difficulty": "Normal",
        "description": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
        "calories": 620,
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-08-10"
    }, {
        "name": "Crotalus cerastes",
        "muscle": [
            "Butt",
            "Leg"
        ],
        "instruction": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
        "difficulty": "Insane",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "calories": 907,
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-21"
    }, {
        "name": "Felis wiedi or Leopardus weidi",
        "muscle": [
            "Arm",
            "Leg"
        ],
        "instruction": "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
        "difficulty": "Normal",
        "description": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
        "calories": 916,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-20"
    }, {
        "name": "Aonyx cinerea",
        "muscle": [
            "Arm",
            "Leg"
        ],
        "instruction": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "difficulty": "Advanced",
        "description": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "calories": 822,
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-11-09"
    }, {
        "name": "Fratercula corniculata",
        "muscle": [
            "Arm",
            "Abs"
        ],
        "instruction": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "difficulty": "Normal",
        "description": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
        "calories": 100,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-10-25"
    }, {
        "name": "Grus canadensis",
        "muscle": [
            "Butt",
            "Abs"
        ],
        "instruction": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "difficulty": "Insane",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
        "calories": 747,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-10-24"
    }, {
        "name": "Tockus flavirostris",
        "muscle": [
            "Arm",
            "Leg"
        ],
        "instruction": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
        "difficulty": "Insane",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "calories": 381,
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-19"
    }, {
        "name": "Egretta thula",
        "muscle": [
            "Arm",
            "Abs"
        ],
        "instruction": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
        "difficulty": "Advanced",
        "description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
        "calories": 863,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-07-20"
    }, {
        "name": "Sauromalus obesus",
        "muscle": [
            "Leg",
            "Abs"
        ],
        "instruction": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "difficulty": "Insane",
        "description": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
        "calories": 722,
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-08-15"
    }, {
        "name": "Dasypus novemcinctus",
        "muscle": [
            "Butt",
            "Leg"
        ],
        "instruction": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        "difficulty": "Advanced",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
        "calories": 671,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-10-25"
    }, {
        "name": "Papilio canadensis",
        "muscle": [
            "Abs",
            "Chest"
        ],
        "instruction": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
        "difficulty": "Easy",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
        "calories": 586,
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-04-17"
    }, {
        "name": "Paradoxurus hermaphroditus",
        "muscle": [
            "Butt",
            "Arm"
        ],
        "instruction": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "difficulty": "Insane",
        "description": "Fusce consequat. Nulla nisl.",
        "calories": 566,
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-06"
    }, {
        "name": "Felis caracal",
        "muscle": [
            "Arm",
            "Leg"
        ],
        "instruction": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "difficulty": "Easy",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "calories": 288,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2021-12-04"
    }, {
        "name": "Lama glama",
        "muscle": [
            "Abs",
            "Leg"
        ],
        "instruction": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
        "difficulty": "Insane",
        "description": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
        "calories": 920,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-06"
    }, {
        "name": "Ovis ammon",
        "muscle": [
            "Arm",
            "Abs"
        ],
        "instruction": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
        "difficulty": "Easy",
        "description": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
        "calories": 789,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2021-12-27"
    }, {
        "name": "Butorides striatus",
        "muscle": [
            "Leg",
            "Chest"
        ],
        "instruction": "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        "difficulty": "Advanced",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "calories": 617,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-05-18"
    }, {
        "name": "Tayassu tajacu",
        "muscle": [
            "Butt",
            "Chest"
        ],
        "instruction": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "difficulty": "Easy",
        "description": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
        "calories": 249,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-03"
    }, {
        "name": "Casmerodius albus",
        "muscle": [
            "Leg",
            "Arm"
        ],
        "instruction": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        "difficulty": "Normal",
        "description": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
        "calories": 388,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-08-27"
    }, {
        "name": "Dasypus novemcinctus",
        "muscle": [
            "Butt",
            "Leg"
        ],
        "instruction": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "difficulty": "Insane",
        "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
        "calories": 711,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-05-11"
    }, {
        "name": "Helogale undulata",
        "muscle": [
            "Arm",
            "Leg"
        ],
        "instruction": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "difficulty": "Easy",
        "description": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "calories": 469,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-02-05"
    }, {
        "name": "Anitibyx armatus",
        "muscle": [
            "Chest",
            "Abs"
        ],
        "instruction": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
        "difficulty": "Insane",
        "description": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
        "calories": 951,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-05-04"
    }, {
        "name": "Crocuta crocuta",
        "muscle": [
            "Leg",
            "Abs"
        ],
        "instruction": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "difficulty": "Normal",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "calories": 682,
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-24"
    }, {
        "name": "Procyon lotor",
        "muscle": [
            "Leg",
            "Abs"
        ],
        "instruction": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
        "difficulty": "Normal",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
        "calories": 899,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-10-28"
    }, {
        "name": "Myotis lucifugus",
        "muscle": [
            "Chest",
            "Leg"
        ],
        "instruction": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
        "difficulty": "Insane",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
        "calories": 335,
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-08-05"
    }, {
        "name": "Catharacta skua",
        "muscle": [
            "Chest",
            "Leg"
        ],
        "instruction": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        "difficulty": "Insane",
        "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
        "calories": 577,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-02-27"
    }, {
        "name": "Mycteria ibis",
        "muscle": [
            "Chest",
            "Butt"
        ],
        "instruction": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
        "difficulty": "Easy",
        "description": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "calories": 399,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-01-04"
    }, {
        "name": "Cervus unicolor",
        "muscle": [
            "Leg",
            "Arm"
        ],
        "instruction": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
        "difficulty": "Easy",
        "description": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
        "calories": 696,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-04-29"
    }, {
        "name": "Ciconia episcopus",
        "muscle": [
            "Chest",
            "Leg"
        ],
        "instruction": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
        "difficulty": "Easy",
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "calories": 415,
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-06-05"
    }, {
        "name": "Sciurus niger",
        "muscle": [
            "Chest",
            "Abs"
        ],
        "instruction": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
        "difficulty": "Insane",
        "description": "Etiam vel augue.",
        "calories": 768,
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-07-23"
    }, {
        "name": "Pitangus sulphuratus",
        "muscle": [
            "Arm",
            "Leg"
        ],
        "instruction": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "difficulty": "Advanced",
        "description": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "calories": 625,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-08-28"
    }, {
        "name": "Thylogale stigmatica",
        "muscle": [
            "Abs",
            "Butt"
        ],
        "instruction": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        "difficulty": "Insane",
        "description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
        "calories": 479,
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-03-06"
    }, {
        "name": "Alopochen aegyptiacus",
        "muscle": [
            "Butt",
            "Leg"
        ],
        "instruction": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        "difficulty": "Advanced",
        "description": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
        "calories": 392,
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-02-18"
    }, {
        "name": "Paraxerus cepapi",
        "muscle": [
            "Arm",
            "Chest"
        ],
        "instruction": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
        "difficulty": "Insane",
        "description": "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
        "calories": 876,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-10-31"
    }, {
        "name": "Varanus salvator",
        "muscle": [
            "Butt",
            "Arm"
        ],
        "instruction": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "difficulty": "Insane",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
        "calories": 188,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-09-18"
    }, {
        "name": "Phalaropus fulicarius",
        "muscle": [
            "Abs",
            "Arm"
        ],
        "instruction": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
        "difficulty": "Normal",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "calories": 103,
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "video": "https://youtu.be/kIaqbrWBexY",
        "created_at": "2022-09-29"
    }
];

/**
 * Thêm exercise vào collection exercises
 */
function generateExerciseData() {
    for (let i = 0; i < exerciseData.length; i++) {
        let exercise = exerciseData[i];
        createExercise(exercise)
    }
}

export { exerciseData, generateExerciseData };