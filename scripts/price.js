
  // document.getElementById("goal").innerText = `₹10,232.27` ;
  // document.getElementById("samount").innerText = ` ${10000}` ;
  // document.getElementById("gateway").innerText = `232.27` ;

  function addToWallet(){ 
      let ramount  =   document.getElementById("ramount").value;
      document.getElementById("samount").innerText =  ramount ;  
      let charges  =       (ramount/100)*2.32;
      document.getElementById("gateway").innerText =  Math.round(charges );
      let newgoal  =  Number(ramount) +  Number(charges ) ;
      document.getElementById("goal").innerText = newgoal ;      
   }

                //  *************

       let acc = document.getElementsByClassName("accordion");


                for ( let i = 0; i < acc.length; i++) {
                  acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                      panel.style.display = "none";
                    } else {
                      panel.style.display = "block";
                    }
                  });
                }

   

