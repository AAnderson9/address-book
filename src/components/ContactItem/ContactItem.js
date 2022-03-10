const ContactItem = function(props)
{

    const deleted = (ev) => {
        const id = ev.target.value;

        fetch(`http://localhost:8000/contacts/${id}`, 
        {
            method: 'DELETE'
        })
    }

    const updated = (ev) => {
        const id = ev.target.value;

        const obj = {
            fName: document.getElementById('firstName').innerText,
            lName: document.getElementById('lastName').innerText,
            email: document.getElementById('myEmail').innerText,
            phone: document.getElementById('phoneNum').innerText
        }

        fetch(`http://localhost:8000/contacts/${id}`, 
        {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
            
        })
    }

    return(
        <div style={{border: "1px solid black"}}>
            <img src = {props.img} style = {{width: "30%", height: "250px"}}></img>
            <p contentEditable = {true} id = "firstName">{props.fname}</p>
            <p contentEditable = {true} id = "lastName">{props.lname}</p>
            <p contentEditable = {true} id = "myEmail">{props.email}</p>
            <p contentEditable = {true} id = "phoneNum">{props.phoneNum}</p>
            <button value = {props.id} onClick = {updated}>Update</button>
            <button value = {props.id} onClick = {deleted}>Delete</button>
        </div>
    )
}

export default ContactItem