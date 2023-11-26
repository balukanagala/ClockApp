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
setInterval(updateClock,1000);
setInterval(updateDate, 86400000);
updateDate(); // Add this line to call the function immediately
//setInterval(updateDate,1000);
// updateClock();
