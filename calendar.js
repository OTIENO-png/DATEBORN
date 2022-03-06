function akan() {  
  var userinput = document.getElementById("DOB").value;  
  var gender = document.getElementById("gender").value; 
  var akanName;

  if(userinput==null || userinput=='') {  
    document.getElementById("message").innerHTML = "**Choose a date please!";    
    return false;  
   
  } else {  
    const d = new Date(userinput);//convert to javascript datetime format
    
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[d.getDay()];
    let male =  {Sunday:"Kwasi", Monday:"Kwadwo", Tuesday:"Kwabena", Wednesday:"Kwaku", Thursday:"Yaw",Friday:"Kofi",Saturday:"Kwame",};

    let female = {Sunday:"Akosua", Monday:"Adwoa", Tuesday:"Abenaa", Wednesday:"Akua", Thursday:"Yaa",Friday:"Afua",Saturday:"Ama",};

    if(gender == "Female"){
      akanName = female[day]
      console.log(female[day])

    }else{
      console.log(male[day])
      akanName = male[day]
      
    }
  return document.getElementById("result").innerHTML =    
           "Your Akan name is " + akanName;  
  }  
}