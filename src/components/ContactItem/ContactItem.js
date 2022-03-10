const ContactItem = function(props)
{
    return(
        <div>
            <img src = {props.img}></img>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.phoneNum}</p>
        </div>
    )
}

export default ContactItem