// Assignment code here
_pattern =/[a-zA-Z0-9_\-\+\.]/;


var _getRandomByte=function generate() {
 
  if(window.crypto && window.crypto.getRandomValues) 
  {
    var result = new Uint8Array(1);
    
    window.crypto.getRandomValues(result);
    return result[0];
  }
  else if(window.msCrypto && window.msCrypto.getRandomValues) 
  {
    var result = new Uint8Array(1);
    window.msCrypto.getRandomValues(result);
    return result[0];
  }
  else
  {
    return Math.floor(Math.random() * 256);
  }
  // return result[0];
};


var generatePassword=function()
  {
    var length=16;
    alert(length);
    return Array.apply(null, {'length': length})
      .map(function()
      {
        var result;
        while(true) 
        {
          result = String.fromCharCode(this._getRandomByte());
        
          if(this._pattern.test(result))
          {
            return result;
          }
        }        
      }, this)
      .join('');  
      alert("5")
  };    
    

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert("3")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("4")

}

// Add event listener to generate button
alert("1")
generateBtn.addEventListener("click", writePassword);
alert("2")
