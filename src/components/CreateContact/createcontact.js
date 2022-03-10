const CreateContact = function(props)
{

    const submitted = (ev) => {
        ev.preventDefault();
        const fd = new FormData(document.getElementById('createForm'));

        fetch('http://localhost:8000/contact',
        {
            method: 'POST',
            body: fd
        })
    }

    return(
        <form id = 'createForm' style={{display: "flex", flexDirection: 'column'}}>
            <label htmlFor="img" style={{alignSelf:"start"}}>Select a contact image: </label>
            <input id = "img" name = "img" type = "file" accept="image/*" required></input>
            <label htmlFor="fName" style={{alignSelf:"start"}}>Please fill out the following </label>
            <input id = "fName" name = "fName" type = "text" placeholder="First Name" required></input>
            <input id = "lName" name = "lName" type = "text" placeholder="Last Name" required></input>
            <input id = "email" name = "email" type = "email" placeholder="Email" required></input>
            <input id = "phone" name = "phone" type = "tel" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
            <button type="submit">Create</button>
        </form>
    )

}

export default CreateContact;