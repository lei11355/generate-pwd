
var _getRandomByte = function generate() {
  // if(_pattern===_pattern1) alert("same");else alert("not same")

  if (window.crypto && window.crypto.getRandomValues) {
    var result = new Uint8Array(1);

    window.crypto.getRandomValues(result);
    return result[0];
  }
  else if (window.msCrypto && window.msCrypto.getRandomValues) {
    var result = new Uint8Array(1);
    window.msCrypto.getRandomValues(result);
    return result[0];
  }
  else {
    return Math.floor(Math.random() * 256);
  }
  // return result[0];
};

var generatePassword = function () {
  var length = localStorage.getItem("name");
  _pattern = getpt();
  console.log(_pattern);
  return Array.apply(null, { 'length': length })
    .map(function () {
      var result;
      while (true) {
        result = String.fromCharCode(this._getRandomByte());
        if (this._pattern.test(result))
        
        {
          return result;
        }
      }
    }, this)
    .join('');

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var playerInfo = {
    name: getPlayerName(),
    lc: getlowercase(),
    num: getnum(),
    spec: getspec(),
    pt: getpt()
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var getPlayerName = function () {
  var name = "";
  leng = prompt("Enter length of character? Not more than 128 characters");
   while (isNaN(leng))
   leng = prompt("Enter length of character? Not more than 128 characters");
   while(leng>128)
   leng = prompt("Enter length of character? Not more than 128 characters");
   localStorage.setItem("name", leng);
       return name;
};

var getlowercase = function () {
  var lc = "";
  lc = prompt("Do you like to have lower case? Enter yes or no");
 
  while(lc.toLowerCase() !="yes" && lc.toLowerCase()!="no"  ){
    
  lc = prompt("Do you like to have lower case? Enter yes or no");
  }
 
 
  localStorage.setItem("lc", lc);
  
  return lc;
};

var getnum = function () {
  var num = "";
  num = prompt("Do you like to have numeric? Enter yes or no");
  while(num.toLowerCase() !="yes" && num.toLowerCase()!="no"  ){
   num = prompt("Do you like to have numeric? Enter yes or no");
  }
 
   localStorage.setItem("num", num);
 
  return num;
};
var getspec = function () {
  var spec = "";
  spec = prompt("Do you like to have special character? Enter yes or no");
  while(spec.toLowerCase() !="yes" && spec.toLowerCase()!="no"  ){
    
    spec = prompt("Do you like to have special character? Enter yes or no");
   }

 
  localStorage.setItem("spec", spec);
 
  return spec;
};
var getpt = function () {
  var num = localStorage.getItem("num");
  var spec = localStorage.getItem("spec");
  var lc = localStorage.getItem("lc")

  var _pattern = /[a-zA-Z0-9_\-\+\.]/;
 

  if (lc === "yes") {
    _pattern = /[a-zA-Z0-9_\-\+\.]/;
    if (num === "no")
      _pattern = /[a-zA-Z_\-\+\.]/;
    if (spec === "no")
      _pattern = /[a-zA-Z]/;

  
  }
  if (lc === "no") {

    _pattern = /[A-Z0-9_\-\+\.]/;
    if (num === "no")
      _pattern = /[A-Z_\-\+\.]/;

    if (spec === "no")
      _pattern = /[A-Z]/;

  }
return _pattern;
}
generateBtn.addEventListener("click", writePassword);

