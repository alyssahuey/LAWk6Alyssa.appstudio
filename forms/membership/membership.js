
let members = ["Mary", "Sam", "Joey", "Paul", "Mike", "Char", "Jenny", "Kennedy", "Kaden", "Kurt", "Anne"]
let i = 0
//let newMember = inptUsername.value

btnEnter.onclick = function() {
        let newMember = inptUsername.value
        if (members.includes(newMember))
            lblOutput.value = "You are a member." 
        else {
            members.push(newMember)
            lblOutput.value = "You have been added as a member."
            }
}

