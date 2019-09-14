/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result=input;
    for(var i=0;i<=input.length -1;i++){
      if(!Boolean(parseInt(input[i])) && (input[i] != '/' && input[i] != '.')){
        result = input.substring(0,i);
        break;
      }
    }
    var firstDivision = result.indexOf('/');
    var secondDivision = result.substring(firstDivision + 1);
    secondDivision = secondDivision.indexOf('/');
    if(!Boolean(parseInt(result)) && result == ''){
      result = 1;
    }else if(Boolean(parseInt(result)) && firstDivision != -1 && secondDivision == -1){
      
    }else if(Boolean(parseInt(result)) && firstDivision == -1 && secondDivision == -1){
      
    }else{
      result = 'invalid number';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var units = ['mi','km','gal','l','lbs','kg'];
    for(var i=0;i<=input.length -1;i++){
      if(!Boolean(parseInt(input[i])) && (input[i] != '/' && input[i] != '.')){
        result = input.substring(i);
        break;
      }
    }
    if(units.indexOf(result) == -1){
      result = 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result='invalid unit';
    switch(initUnit){
      case 'gal':
        result = 'l';
        break;
      case'l' || 'L':
        result = 'gal';
        break;
      case'lbs':
        result = 'kg';
        break;
      case 'kg':
        result= 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
    }
   return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result= (initNum=='invalid number'?'invalid number':'invalid unit');
    if(initNum != 'invalid number' && initUnit != 'invalid unit'){
      initNum = eval(initNum);
      switch(initUnit){
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum * (1/galToL);
        break;
      case 'kg':
        result = initNum * lbsToKg;
        break;
      case 'lbs':
        result = initNum * (1/lbsToKg);
        break;
      case 'km': 
        result = initNum * (1/miToKm);
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      }
      result = result.toFixed(5);
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if(initNum != 'invalid number' && initUnit != 'invalid unit'){
      result = initNum + ' ' + initUnit +' converts to ' + returnNum +' '+ returnUnit;
    }else{
      result = 'cannot convert';
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
