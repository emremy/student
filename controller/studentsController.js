var student = [
    {
        id:1,
        name:"Emre mert yilmaz",
        tcno:123456789,
        motherName:"Emrenin annesi",
        motherNumber:542312,
        fatherName:"Emrenin babasi",
        fatherNumber:512354,
        relative:"Abisi",
        relativeNumber:5341
    },
    {
        id:2,
        name:"Halil yilmaz",
        tcno:123565788,
        motherName:"Halilin annesi",
        motherNumber:53412,
        fatherName:"Halilin babasi",
        fatherNumber:51235,
        relative:"Abisi",
        relativeNumber:52136
    }
];

exports.index = (req,res,next)=>{
    res.render('studentsPage/index',{
        title:"Öğrenci işleri - AİDAT TAKİP SİSTEMİ",
        path:"/aidatlar",
        student:student[0]
    });
}
exports.students = (req,res,next)=>{

    res.render('studentsPage/classToStudents',{
        title:"Şu sınıfa ait öğrenciler",
        path:"/ogrenciler",
        students: student
    })
}