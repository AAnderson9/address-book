const CreateContact = function(props)
{

    const submitted = (ev) => {
        ev.preventDefault();

        const obj = {
            image: document.getElementById('image').value,
            fName: document.getElementById('fName').value,
            lName: document.getElementById('lName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        }

        fetch('http://localhost:8000/contact',
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
            
        })
    }

    return(
        <form id = 'createForm' style={{display: "flex", flexDirection: 'column', paddingBottom: "30px",justifyContent: "center",width:"60%", marginLeft:"auto",marginRight:"auto"}} onSubmit = {submitted}>
            <label htmlFor="img" >Select a contact image: </label>
            <input id = "image" name = "image" type = "file" accept="image/*" style={{alignSelf:"center"}} required></input>
            <label htmlFor="fName" >Please fill out the following </label>
            <input id = "fName" name = "fName" type = "text" placeholder="First Name" required></input>
            <input id = "lName" name = "lName" type = "text" placeholder="Last Name" required></input>
            <input id = "email" name = "email" type = "email" placeholder="Email" required></input>
            <input id = "phone" name = "phone" type = "tel" placeholder="Phone Number (XXX-XXX-XXXX)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
            <button type="submit">Create</button>
        </form>
    )

}

export default CreateContact;