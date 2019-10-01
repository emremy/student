exports.index = (req,res,next)=>{
    res.render('index/index',{
        title:"Anasayfa - AİDAT TAKİP SİSTEMİ",
        path:"/"
    });
}