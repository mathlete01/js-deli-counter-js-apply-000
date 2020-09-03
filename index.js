//const deliLine = ["Steven", "Blake", "Avi"]

function takeANumber(line, name){
  line.push(name)
  return(`Welcome, ${name}. You are number ${line.length} in line.`)
}

//takeANumber(deliLine, "Ada");

function nowServing(line){
  if(line.length > 0){
    /*
    var announcement = `Currently serving ${line[0]}.`
    line.shift()
    return(announcement)
    */
    return(`Currently serving ${line.shift()}.`)
  }else{
    return("There is nobody waiting to be served!")
  }
}

//nowServing(deliLine);

function currentLine(line){
  if(line.length > 0){
    var newArr = new Array();
    newArr[0] = `1. ${line[0]}`
    for(var i = 1; i < line.length; i ++){
      newArr = newArr + `, ${i+1}. ${line[i]}`
    }
    return(`The line is currently: ${newArr}`)
  }else{
    return("The line is currently empty.")
  }
}
