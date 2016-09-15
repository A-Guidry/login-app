
// array of objects to store existing user data
var existingUsers = [
	{
		user: "chrisbrody",
		pass: "password1"
	},
	{
		user: "mattbrody",
		pass: "password2"
	},
	{
		user: "sambrody",
		pass: "password3"
	}
]

// function to determine if the user exists and the password matchs that user, function fires on user clicking button line 28 index.html
function login() {
	// store the tag with id="sign" in var username
	var username = document.getElementById("username")
	// store the tag with id="sign" in var password
	var password = document.getElementById("password")
	// store the tag with id="results" in var results
	var results = document.getElementById('results')

	// confirm the element exists and then what value the user submits
	console.log(username, password, results)
	console.log("username value is: " + username.value)
	console.log("password value is: " + password.value)
	
	// loop through existing users array one item at a time 
	for(i = 0; i < existingUsers.length; i = i + 1) {
		// check each user as you loop through the array of objects
		console.log(existingUsers[i])
		if(username.value === existingUsers[i].user && password.value === existingUsers[i].pass) {
			// check to see if the IF statement code block executed
			console.log("if statement ran, so we have a match!")
			// change class of results to let the user know it worked 
			results.className = 'success'
			// update the text of the results element to display a success message
			results.textContent = "Welcome to Codify Academy " + username.value + "!"
			// stop the function from running any further cause we got a match!!!
			return

		} 
	}
	// run failure if username and password didn't match
	console.log("no match was found :/")
	// change class of results to let the user know it failed
	results.className = 'failure'
	// update the text of the results element to display a failure message
	results.textContent = "!! username or password don't match"
	$('#results').addClass('animated tada')
}
	// function to gather new user data and them to the exisiting user list
	function signUp(){
		// store the tag with id="newUser" in var username
		var newUser = document.getElementById("newUser").value
		// store the tag with id="newPassword" in var username
		var newPassword = document.getElementById("newPassword").value
		// store the tag with id="signUpResults" in var results
		var results = document.getElementById('signUpResults')
		// display data in the console
		console.log(newUser)
		// display data in the console
		console.log(newPassword)
		// loop through existing users array one item at a time
		for (var i = 0; i < existingUsers.length; i++) {
			// determine if the newUser name already exisits
			if(newUser == existingUsers[i].user){
				// change class of results to let the user know it failed
				results.className = "signUpFailure"
				// alert if username already exisits
				results.textContent = "Username is already taken"
				$('#signUpResults').addClass('animated tada')
				return
			}
		}
		// if username does not exisit, add new user data to exisiting user list and allow user to login
		existingUsers.push({user: newUser, pass: newPassword})
		// change class of results to let the user know sign up was successful
		results.className = "signUpSuccess"
		// promts user to login with their credentials
		results.textContent = "You're all set, please login"
	}



