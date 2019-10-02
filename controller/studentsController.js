exports.index = (req,res,next)=>{
    res.render('studentsPage/index',{
        title:"Öğrenci işleri - AİDAT TAKİP SİSTEMİ",
        path:"/aidatlar"
    });
}