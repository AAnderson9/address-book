import ContactItem from "../ContactItem/contactitem"

const ContactList = function(props)
{
    return(
        <div>
            {
                props.contactData.map(contact => {
                    return <ContactItem fname = {contact.fName} lname = {contact.lName} img = {contact.img} email = {contact.email} phoneNum = {contact.phoneNum} id = {contact.id}/>
                })
            }
        </div>
    )
}

export default ContactList;