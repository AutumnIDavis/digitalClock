    function startTime(){
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
          m = checkTime(m);
          s = checkTime(s);
      document.getElementById("words").innerHTML =
      h + ":" + m + ":" + s;
      //Call function greeting back into the program
      greeting();
      var t = setTimeout(startTime, 500);
      }

      function checkTime (i){
        if (i < 10) {i = "0" + i}
        return i;
      }

      function greeting(){
        var greetHour = new Date().getHours();
        var Morn = document.getElementById("Morning");
        var After = document.getElementById("Afternoon");
        var City = document.getElementById("City");
        var Bird = document.getElementById("Bird");
            //console.log var greetHour = new Date().getHours();
            //console.log (greetHour);
            if (greetHour < 12){
              Morn.style.visibility = "visible";
              After.style.visibility = "hidden";
              City.style.visibility = "hidden";
              Bird.style.visibility = "visible";
          } else {
              Morn.style.visibility = "hidden";
              After.style.visibility = "visible";
              City.style.visibility = "visible";
              Bird.style.visibility = "hidden";
        }
      }
