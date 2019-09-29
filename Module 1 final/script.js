function idCard(){

    var firstName = document.getElementById("fn").value;
    var lastName = document.getElementById("ln").value;
    var postFullName = firstName +' '+ lastName;
        
    document.getElementById("postFullName").innerHTML = postFullName;
    //first name and last name extracted to "id card"
    
    var address = document.getElementById("add").value;
    
    var postAddress = address;
    document.getElementById("postAddress").innerHTML = postAddress;
    
    
    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("pn").value);
    
    var numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);
    
    for(i = 0; i <= numberArray.length; i++){
        if(numberArray[i]<=100){
            document.getElementById("postAge").innerHTML = "Age:" + " " + age;

        }
        else if(numberArray[i]>100){
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number:" + " " + phoneNumber;

        }
        
    }
}