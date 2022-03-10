const ContactItem = function(props)
{
    return(
        <div style={{border: "1px solid black"}}>
            <img src = {props.img} style = {{width: "50%"}}></img>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.phoneNum}</p>
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
}

export default ContactItem