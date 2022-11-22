// Add your code here
function submitData(name, email) {

const yellowdata = {
  name,
  email
}

console.log(yellowdata)

  const configurationObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(yellowdata),
  };
  
  return fetch("http://localhost:3000/users", configurationObj)
    .then((response) => response.json())
  
  .then((obj) => {
   document.body.append(obj.id)
  }) 


  
  .catch(function (error) {
    const fail = document.createElement("p")
    fail.textContent = error.message
    document.body.append(fail)
  })
  
}
const symbol = document.createElement("p")
    fail.textContent = "☺☺"
    document.body.append(symbol)



