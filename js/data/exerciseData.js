import { createExercise } from "../models/exercises.js";

let exerciseData = [
    {
        "avg_rating": 1,
        "calories": 849,
        "created_at": "9/18/2022",
        "description": "Vestibulum rutrum rutrum neque.",
        "difficulty": "Dễ",
        "equipments": [
            "Treadmill",
            "Chair"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "instruction": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "muscles": [
            "Abs"
        ],
        "name": "Pitangus sulphuratus",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "18-25",
        "recommended_purposes": [
            "Tập GYM chuyên nghiệp"
        ],
        "recommended_genders": [
            "Nam",
            "Nữ"
        ]
    }, {
        "avg_rating": 2,
        "calories": 211,
        "created_at": "9/1/2022",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "difficulty": "Trung bình",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "instruction": "Donec ut dolor.",
        "muscles": [
            "Butt"
        ],
        "name": "Tockus erythrorhyncus",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "60-100",
        "recommended_purposes": [
            "Tập GYM chuyên nghiệp",
            "Mục tiêu khác"
        ],
        "recommended_genders": [
            "Nữ",
            "Nam"
        ]
    }, {
        "avg_rating": 1,
        "calories": 444,
        "created_at": "4/13/2022",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        "difficulty": "Trung bình",
        "equipments": [
            "Treadmill"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "instruction": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "muscles": [
            "Abs",
            "Butt"
        ],
        "name": "Carduelis pinus",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "41-60",
        "recommended_purposes": [
            "Tập GYM chuyên nghiệp",
            "Tập GYM Cải thiện vấn đề sức khoẻ"
        ],
        "recommended_genders": [
            "Nam"
        ]
    }, {
        "avg_rating": 1,
        "calories": 498,
        "created_at": "4/13/2022",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "difficulty": "Khó",
        "equipments": [
            "Barbell",
            "Hand Gripper"
        ],
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "instruction": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
        "muscles": [
            "Arm",
            "Butt"
        ],
        "name": "Motacilla aguimp",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "18-25",
        "recommended_purposes": [
            "Tập GYM giúp bạn kỷ luật với cuộc sống"
        ],
        "recommended_genders": [
            "Nữ",
            "Nam"
        ]
    }, {
        "avg_rating": 3,
        "calories": 397,
        "created_at": "7/1/2022",
        "description": "Cras pellentesque volutpat dui.",
        "difficulty": "Khó",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "instruction": "Duis at velit eu est congue elementum.",
        "muscles": [
            "Butt"
        ],
        "name": "Cereopsis novaehollandiae",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "60-100",
        "recommended_purposes": [
            "Tập GYM chuyên nghiệp"
        ],
        "recommended_genders": [
            "Nữ"
        ]
    }, {
        "avg_rating": 3,
        "calories": 714,
        "created_at": "10/3/2022",
        "description": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        "difficulty": "Khó",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "instruction": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
        "muscles": [
            "Arm",
            "Chest"
        ],
        "name": "Globicephala melas",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "60-100",
        "recommended_purposes": [
            "Mục tiêu khác",
            "Tập GYM giúp bạn kỷ luật với cuộc sống"
        ],
        "recommended_genders": [
            "Nam"
        ]
    }, {
        "avg_rating": 1,
        "calories": 188,
        "created_at": "11/10/2022",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
        "difficulty": "Khó",
        "equipments": [
            "AB Bench",
            "Jump rope"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "instruction": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "muscles": [
            "Arm",
            "Leg"
        ],
        "name": "Priodontes maximus",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "18-25",
        "recommended_purposes": [
            "Tập GYM để bổ trợ bộ môn khác"
        ],
        "recommended_genders": [
            "Nam",
            "Nữ"
        ]
    }, {
        "avg_rating": 1,
        "calories": 249,
        "created_at": "4/17/2022",
        "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
        "difficulty": "Dễ",
        "equipments": [
            "Barbell",
            "AB Bench"
        ],
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "instruction": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "muscles": [
            "Leg"
        ],
        "name": "Macropus eugenii",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "41-60",
        "recommended_purposes": [
            "Tập GYM để bổ trợ bộ môn khác",
            "Tập GYM chuyên nghiệp"
        ],
        "recommended_genders": [
            "Nữ"
        ]
    }, {
        "avg_rating": 1,
        "calories": 913,
        "created_at": "12/28/2021",
        "description": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
        "difficulty": "Trung bình",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "instruction": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "muscles": [
            "Chest"
        ],
        "name": "Rhea americana",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "60-100",
        "recommended_purposes": [
            "Tập GYM Cải thiện vấn đề sức khoẻ"
        ],
        "recommended_genders": [
            "Nam"
        ]
    }, {
        "avg_rating": 2,
        "calories": 510,
        "created_at": "4/25/2022",
        "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
        "difficulty": "Trung bình",
        "equipments": [
            "Dumbbell",
            "Jump rope"
        ],
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "instruction": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
        "muscles": [
            "Arm",
            "Chest"
        ],
        "name": "Sula nebouxii",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "18-25",
        "recommended_purposes": [
            "Tập GYM để bổ trợ bộ môn khác",
            "Tập GYM giúp bạn kỷ luật với cuộc sống"
        ],
        "recommended_genders": [
            "Nữ"
        ]
    }, {
        "avg_rating": 4,
        "calories": 889,
        "created_at": "10/6/2022",
        "description": "Mauris sit amet eros.",
        "difficulty": "Trung bình",
        "equipments": [
            "Barbell",
            "Dumbbell"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "instruction": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "muscles": [
            "Neck",
            "Arm"
        ],
        "name": "Tenrec ecaudatus",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "26-40",
        "recommended_purposes": [
            "Tập GYM để bổ trợ bộ môn khác",
            "Tập GYM Cải thiện vấn đề sức khoẻ"
        ],
        "recommended_genders": [
            "Nam"
        ]
    }, {
        "avg_rating": 5,
        "calories": 292,
        "created_at": "5/17/2022",
        "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "difficulty": "Trung bình",
        "equipments": [
            "Jump rope",
            "Chair"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "instruction": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
        "muscles": [
            "Leg",
            "Arm"
        ],
        "name": "Columba livia",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "18-25",
        "recommended_purposes": [
            "Mục tiêu khác"
        ],
        "recommended_genders": [
            "Nam"
        ]
    }, {
        "avg_rating": 1,
        "calories": 156,
        "created_at": "9/25/2022",
        "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        "difficulty": "Dễ",
        "equipments": [
            "Chair"
        ],
        "image": "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "instruction": "Suspendisse accumsan tortor quis turpis. Sed ante.",
        "muscles": [
            "Leg"
        ],
        "name": "Nasua nasua",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "26-40",
        "recommended_purposes": [
            "Tập GYM giúp bạn kỷ luật với cuộc sống",
            "Tập GYM để bổ trợ bộ môn khác"
        ],
        "recommended_genders": [
            "Nữ"
        ]
    }, {
        "avg_rating": 4,
        "calories": 216,
        "created_at": "11/2/2022",
        "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
        "difficulty": "Trung bình",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "instruction": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "muscles": [
            "Abs",
            "Leg"
        ],
        "name": "Connochaetus taurinus",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "41-60",
        "recommended_purposes": [
            "Tập GYM giúp bạn kỷ luật với cuộc sống",
            "Tập GYM để bổ trợ bộ môn khác"
        ],
        "recommended_genders": [
            "Nữ"
        ]
    }, {
        "avg_rating": 1,
        "calories": 358,
        "created_at": "6/18/2022",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
        "difficulty": "Dễ",
        "equipments": [
            "Jump rope",
            "AB Bench"
        ],
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "instruction": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "muscles": [
            "Neck"
        ],
        "name": "Mellivora capensis",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "26-40",
        "recommended_purposes": [
            "Tập GYM Cải thiện vấn đề sức khoẻ",
            "Tập GYM giúp bạn kỷ luật với cuộc sống"
        ],
        "recommended_genders": [
            "Nữ",
            "Nam"
        ]
    }, {
        "avg_rating": 1,
        "calories": 802,
        "created_at": "2/3/2022",
        "description": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "difficulty": "Khó",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "instruction": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "muscles": [
            "Abs"
        ],
        "name": "Stenella coeruleoalba",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "41-60",
        "recommended_purposes": [
            "Mục tiêu khác",
            "Tập GYM để bổ trợ bộ môn khác"
        ],
        "recommended_genders": [
            "Nữ",
            "Nam"
        ]
    }, {
        "avg_rating": 1,
        "calories": 593,
        "created_at": "7/25/2022",
        "description": "Integer non velit.",
        "difficulty": "Trung bình",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "instruction": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "muscles": [
            "Neck",
            "Chest"
        ],
        "name": "Choloepus hoffmani",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "41-60",
        "recommended_purposes": [
            "Tập GYM để bổ trợ bộ môn khác"
        ],
        "recommended_genders": [
            "Nam"
        ]
    }, {
        "avg_rating": 2,
        "calories": 838,
        "created_at": "9/19/2022",
        "description": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
        "difficulty": "Khó",
        "equipments": [
            "Hand Gripper",
            "Jump rope"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "instruction": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "muscles": [
            "Chest",
            "Neck"
        ],
        "name": "Cynictis penicillata",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "18-25",
        "recommended_purposes": [
            "Tập GYM để bổ trợ bộ môn khác",
            "Tập GYM giúp bạn kỷ luật với cuộc sống"
        ],
        "recommended_genders": [
            "Nam"
        ]
    }, {
        "avg_rating": 3,
        "calories": 299,
        "created_at": "8/24/2022",
        "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
        "difficulty": "Trung bình",
        "equipments": [
            "Dumbbell"
        ],
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "instruction": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
        "muscles": [
            "Abs"
        ],
        "name": "Suricata suricatta",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "26-40",
        "recommended_purposes": [
            "Tập GYM giúp bạn kỷ luật với cuộc sống",
            "Tập GYM Cải thiện vấn đề sức khoẻ"
        ],
        "recommended_genders": [
            "Nam",
            "Nữ"
        ]
    }, {
        "avg_rating": 2,
        "calories": 804,
        "created_at": "10/10/2022",
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "difficulty": "Trung bình",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "instruction": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
        "muscles": [
            "Neck"
        ],
        "name": "Panthera onca",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "60-100",
        "recommended_purposes": [
            "Tập GYM giúp bạn kỷ luật với cuộc sống",
            "Tập GYM Cải thiện vấn đề sức khoẻ"
        ],
        "recommended_genders": [
            "Nữ",
            "Nam"
        ]
    }, {
        "avg_rating": 4,
        "calories": 282,
        "created_at": "10/4/2022",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "difficulty": "Dễ",
        "equipments": [
            "Treadmill",
            "Barbell"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "instruction": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
        "muscles": [
            "Neck"
        ],
        "name": "Larus fuliginosus",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "18-25",
        "recommended_purposes": [
            "Tập GYM để bổ trợ bộ môn khác",
            "Mục tiêu khác"
        ],
        "recommended_genders": [
            "Nữ"
        ]
    }, {
        "avg_rating": 2,
        "calories": 843,
        "created_at": "11/9/2022",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
        "difficulty": "Dễ",
        "equipments": [
            "Treadmill",
            "AB Bench"
        ],
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "instruction": "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "muscles": [
            "Leg"
        ],
        "name": "Sarkidornis melanotos",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "26-40",
        "recommended_purposes": [
            "Tập GYM Cải thiện vấn đề sức khoẻ",
            "Mục tiêu khác"
        ],
        "recommended_genders": [
            "Nữ"
        ]
    }, {
        "avg_rating": 3,
        "calories": 303,
        "created_at": "6/26/2022",
        "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "difficulty": "Dễ",
        "equipments": [
            "Barbell"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "instruction": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
        "muscles": [
            "Butt"
        ],
        "name": "Chloephaga melanoptera",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "60-100",
        "recommended_purposes": [
            "Mục tiêu khác"
        ],
        "recommended_genders": [
            "Nam",
            "Nữ"
        ]
    }, {
        "avg_rating": 3,
        "calories": 750,
        "created_at": "6/5/2022",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "difficulty": "Khó",
        "equipments": [
            "AB Bench"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "instruction": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
        "muscles": [
            "Leg"
        ],
        "name": "Casmerodius albus",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "26-40",
        "recommended_purposes": [
            "Mục tiêu khác"
        ],
        "recommended_genders": [
            "Nam"
        ]
    }, {
        "avg_rating": 2,
        "calories": 419,
        "created_at": "2/19/2022",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "difficulty": "Khó",
        "equipments": [
            "Jump rope"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "instruction": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
        "muscles": [
            "Chest",
            "Arm"
        ],
        "name": "Petaurus norfolcensis",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "26-40",
        "recommended_purposes": [
            "Tập GYM giúp bạn kỷ luật với cuộc sống",
            "Tập GYM Cải thiện vấn đề sức khoẻ"
        ],
        "recommended_genders": [
            "Nữ",
            "Nam"
        ]
    }, {
        "avg_rating": 2,
        "calories": 105,
        "created_at": "9/4/2022",
        "description": "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "difficulty": "Trung bình",
        "equipments": [
            "Treadmill",
            "Dumbbell"
        ],
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/dddddd/000000"
        ],
        "instruction": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "muscles": [
            "Chest"
        ],
        "name": "Ciconia episcopus",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "18-25",
        "recommended_purposes": [
            "Tập GYM giúp bạn kỷ luật với cuộc sống"
        ],
        "recommended_genders": [
            "Nam"
        ]
    }, {
        "avg_rating": 3,
        "calories": 249,
        "created_at": "4/7/2022",
        "description": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        "difficulty": "Khó",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff"
        ],
        "instruction": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "muscles": [
            "Arm",
            "Butt"
        ],
        "name": "Upupa epops",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "41-60",
        "recommended_purposes": [
            "Tập GYM chuyên nghiệp"
        ],
        "recommended_genders": [
            "Nữ"
        ]
    }, {
        "avg_rating": 3,
        "calories": 908,
        "created_at": "3/8/2022",
        "description": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        "difficulty": "Khó",
        "equipments": [
            "AB Bench"
        ],
        "image": "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff"
        ],
        "instruction": "Etiam faucibus cursus urna. Ut tellus.",
        "muscles": [
            "Abs",
            "Neck"
        ],
        "name": "Oryx gazella callotis",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "18-25",
        "recommended_purposes": [
            "Tập GYM giúp bạn kỷ luật với cuộc sống",
            "Tập GYM để bổ trợ bộ môn khác"
        ],
        "recommended_genders": [
            "Nữ",
            "Nam"
        ]
    }, {
        "avg_rating": 4,
        "calories": 160,
        "created_at": "9/17/2022",
        "description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
        "difficulty": "Khó",
        "equipments": [

        ],
        "image": "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
        "images": [
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "instruction": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        "muscles": [
            "Chest",
            "Abs"
        ],
        "name": "Meles meles",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "41-60",
        "recommended_purposes": [
            "Tập GYM để bổ trợ bộ môn khác"
        ],
        "recommended_genders": [
            "Nữ"
        ]
    }, {
        "avg_rating": 3,
        "calories": 294,
        "created_at": "8/26/2022",
        "description": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "difficulty": "Dễ",
        "equipments": [
            "Jump rope",
            "Dumbbell"
        ],
        "image": "http://dummyimage.com/1920x1080.png/dddddd/000000",
        "images": [
            "http://dummyimage.com/1920x1080.png/dddddd/000000",
            "http://dummyimage.com/1920x1080.png/ff4444/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/cc0000/ffffff",
            "http://dummyimage.com/1920x1080.png/5fa2dd/ffffff"
        ],
        "instruction": "Phasellus in felis.",
        "muscles": [
            "Abs",
            "Leg"
        ],
        "name": "Dusicyon thous",
        "video": "https://www.youtube.com/embed/ImNFOaCcWZs",
        "embed": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/ImNFOaCcWZs\" title=\"Chest workout - best home routine to kill pec muscle calisthenics and bodyweight\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "recommended_ages": "41-60",
        "recommended_purposes": [
            "Mục tiêu khác"
        ],
        "recommended_genders": [
            "Nam",
            "Nữ"
        ]
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