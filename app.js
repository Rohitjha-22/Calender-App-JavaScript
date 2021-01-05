var dt=new Date();
function Render(){
    var prevdate=new Date(dt.getFullYear(),dt.getMonth(),0).getDate();
    var startdate=dt.getDay();
    let enddate=new Date(dt.getFullYear(),dt.getMonth()+1,0).getDate();
    var today=new Date();
    var month=[
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER"
    ];
    document.getElementById('datestr').innerText=dt.toDateString();
    document.getElementById('mon').innerText=month[dt.getMonth()];
    var day= "";
    for(let x=startdate;x>0;x--){
        day+="<div class='prevdate'>" + (prevdate-x+1) +"</div>";
    }
    for(let i=1;i<=enddate;i++){
        if(i==today.getDate() && dt.getMonth()==today.getMonth()){
            day +="<div class='active'>" + i +"</div>";
        } else{
        day +="<div>" + i +"</div>";}
    }
    document.getElementsByClassName("days")[0].innerHTML=day;
}//Render function ended here
//controlling the buttons

function moveDate(para){
    if(para=="prev"){
        dt.setMonth(dt.getMonth()-1);
        Render();
    }
    if(para=="next"){
        dt.setMonth(dt.getMonth()+1);
        Render();
    }   

}
