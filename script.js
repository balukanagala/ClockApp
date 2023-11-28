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
updateDate();
setInterval(updateDay,86400000);
updateDay();
/*
If the clock function is called only once then it just displays the date but it will not update
since clock has to be updated every second we call it for every 1000ms=1sec

For date and day function has to be called for every 24hrs
but (updateDate,86400000); is not working!
Reason by chatGPT :
It is possible that there might be a timing issue or a delay in the initial execution of the updateDate function when using the 24-hour interval.

So we can call it for every sec as the clock function but it'll make our code unefficient!
Efficient Code :
setInterval(updateDate, 86400000);
updateDate();
setInterval(updateDay,86400000);
updateDay();
This way, the function is called once when the page loads, and then it updates every 24 hours. 
*/