
let req = ""
let query = ""
let results = ""
let netID = "vll74643"
let pw = "Vernon28"
let message = ""


btnDelete.onclick=function(){
  
  let query = "SELECT * from customer"
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)

  for (i = 0; i < results.length; i++)

    message = message + "<br />" + results[i][1]
  lblDelete.value = message
}



btnDel.onclick=function(){
  let input = inptDelete.value
  query = "DELETE from CUSTOMER WHERE name = '" + input + "'"
  alert(query)
req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  
}

