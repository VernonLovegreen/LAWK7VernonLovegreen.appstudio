
let req = ""
let query = ""
let results = ""
let netID = "vll74643"
let pw = "Vernon28"
let message = ""




btnShow.onclick = function() {
  let query = "SELECT * from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  results = JSON.parse(req.responseText)

  for (i = 0; i < results.length; i++)

    message = message + "\n" + results[i][1]
  lblShow.value = message

}
