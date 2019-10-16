const classes = [
    {
        id:1,
        name:"5 / A"
    },
    {
        id:2,
        name:"5 / B"
    }
];

exports.index = (req,res,next)=>{
    res.render('index/index',{
        title:"Anasayfa - AİDAT TAKİP SİSTEMİ",
        path:"/",
        classes:classes
    });
}