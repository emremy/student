const student = {
    name:"Emre mert yilmaz",
    tcno:20000000000,
    motherName:"Emrenin annesi",
    motherNumber:10000000000,
    fatherName:"Emrenin babasi",
    fatherNumber:30000000000,
    relative:"Abisi",
    relativeNumber:60000000000
}

exports.index = (req,res,next)=>{
    res.render('studentsPage/index',{
        title:"Öğrenci işleri - AİDAT TAKİP SİSTEMİ",
        path:"/aidatlar",
        student:student
    });
}