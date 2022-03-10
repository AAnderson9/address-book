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
            fName: document.getElementById('fName').textContent,
            lName: document.getElementById('lName').textContent,
            email: document.getElementById('email').textContent,
            phone: document.getElementById('phone').textContent
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
            <p contentEditable = {true}>{props.fname}</p>
            <p contentEditable = {true}>{props.lname}</p>
            <p contentEditable = {true}>{props.email}</p>
            <p contentEditable = {true}>{props.phoneNum}</p>
            <button value = {props.id} onClick = {updated}>Update</button>
            <button value = {props.id} onClick = {deleted}>Delete</button>
        </div>
    )
}

export default ContactItem