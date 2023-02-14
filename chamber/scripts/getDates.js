let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;




var d = new Date();

    // Set the value of the "date" field
    document.getElementById("date2").value = d.toDateString();

    // Set the value of the "time" field
    var hours = d.getHours();
    var mins = d.getMinutes();
    var seconds = d.getSeconds();
    document.getElementById("time").value = hours + ":" + mins + ":" + seconds;



