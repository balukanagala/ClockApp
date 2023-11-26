function updateClock(){
    var date=new Date();//creating an instance date
    var hours=date.getHours();//getHours,Seconds,Minutes are methods of date obj.
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var time=`${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    document.getElementById("clock").innerHTML=time;
}
function updateDate(){
    //console.log("Updating date...");
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1; // Adding 1 to the month
    var year = d.getFullYear();
    var DMY = `${date < 10 ? "0" : ""}${date}-${month < 10 ? "0" : ""}${month}-${year}`;
    //console.log("Date:", DMY);
    document.getElementById("date").innerHTML = DMY;
}
function updateDay(){
    var d=new Date();
    var day = d.getDay();
    switch(day){
        case 0:
            document.getElementById("day").innerHTML = "Sunday";
            break;
        case 1:
            document.getElementById("day").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("day").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("day").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("day").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("day").innerHTML = "Friday";
            break;
        default:
            document.getElementById("day").innerHTML = "Saturday";
    }
}
setInterval(updateClock,1000);
setInterval(updateDate, 86400000);
updateDate(); // Add this line to call the function immediately
setInterval(updateDay,1000);
//setInterval(updateDate,1000);
// updateClock();
