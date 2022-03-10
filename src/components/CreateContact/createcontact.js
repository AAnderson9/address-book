const CreateContact = function(props)
{
    return(
        <form>
            <label htmlFor="img">Select an image: </label>
            <input id = "img" name = "img" type = "file" accept="image/*" required></input>
            <input id = "fName" name = "fName" type = "text" placeholder="First Name" required></input>
            <input id = "lName" name = "lName" type = "text" placeholder="Last Name" required></input>
            <input id = "email" name = "email" type = "email" placeholder="Email" required></input>
            <input id = "phone" name = "phone" type = "tel" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
        </form>
    )
}