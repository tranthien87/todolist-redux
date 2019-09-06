var randomId = require('random-id');

export  const TaskData = [
    {
        id: randomId(5, 'aA0'),
        name: 'Soạn React Js',
        labelArr: ['FontEnd'],
        priority: 1,
        memberIdArr: ['user_2'],
        status: "danghoanthanh",
        description: 'Phải soạn React JS kèm theo với Node Js và Redux'
    },
    {
        id: randomId(5, 'aA0'),
        name: 'Soạn React Js',
        labelArr: ['FontEnd', 'BackEnd'],
        priority: 2,
        memberIdArr: ['user_2'],
        status: "chuahoanthanh",
        description: 'Phải soạn React JS kèm theo với Node Js và Redux'
    },
    {
        id: randomId(5, 'aA0'),
        name: 'Soạn Angular',
        labelArr: ['FontEnd', 'API'],
        priority: 3,
        memberIdArr: ['user_1', 'user_3'],
        status: "hoanthanh",
        description: 'Nội dung của angular rất dài và khó'
    },
    {
        id: randomId(5, 'aA0'),
        name: 'Soạn HTML và JavaScript',
        labelArr: ['FontEnd', 'Issue'],
        priority: 2,
        memberIdArr: ['user_3'],
        status: "huy",
        description: 'Soạn thảo Html 5 và bootstrap 4 cho học viên'
    },
    {
        id: randomId(5, 'aA0'),
        name: 'Tài Liệu SASS',
        labelArr: ['FontEnd'],
        priority: 1,
        memberIdArr: ['user_1','user_2'],
        status: "danghoanthanh",
        description: 'Tài liệu hướng dẫn sử dụng Sass'
    }
]