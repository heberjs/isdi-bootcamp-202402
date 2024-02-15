delete String.prototype.endsWith

function endsWith(string, searchString) {
    debugger
    var newString = "";
    for(let i = string.length - searchString.length; i < string.length; i ++){
        newString = newString + string[i];
    }
    if(newString === searchString){
        return true;
    }else {
        return false;
    }
}


endsWith("hola mundo", "no")
