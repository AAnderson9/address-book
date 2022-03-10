import ContactItem from "../ContactItem/contactitem"

const ContactList = function(props)
{
    return(
        <div>
            {
                props.contactData.map(contact => {
                    return <ContactItem name = {`${contact.fname} ${contact.lname}`} img = {contact.img} email = {contact.email} phoneNum = {contact.phone}/>
                })
            }
        </div>
    )
}

export default ContactList;