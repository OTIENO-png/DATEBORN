function ageCalculator() {  
    var userinput = document.getElementById("DOB").value;  
    var gender = document.getElementById("gender").value; 
    var dob = new Date(userinput);  

    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      const d = new Date(dob);
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      let day = weekday[d.getDay()];
      let male =  {Sunday:"Kwasi", Monday:"Kwadwo", Tuesday:"Kwabena", Wednesday:"Kwaku", Thursday:"Yaw",Friday:"Kofi",Saturday:"Kwame",};

      let female = {Sunday:"Akosua", Monday:"Adwoa", Tuesday:"Abenaa", Wednesday:"Akua", Thursday:"Yaa",Friday:"Afua",Saturday:"Ama",};

      if(gender == "Female"){
        console.log(female[day])

      }else{
        console.log(male[day])
        
      }

      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff); 
    
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    return document.getElementById("result").innerHTML =    
             "Age is: " + age + " years. ";  
    }  
}  
