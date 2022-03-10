const ContactItem = function(props)
{
    return(
        <div style={{border: "1px solid black"}}>
            <img src = {props.img} style = {{width: "50%"}}></img>
            <span><p>{`${props.fname} `}</p><p>{props.lname}</p></span>
            <p>{props.email}</p>
            <p>{props.phoneNum}</p>
            <button>Update</button>
            <button value = {props.id}>Delete</button>
        </div>
    )
}

export default ContactItem