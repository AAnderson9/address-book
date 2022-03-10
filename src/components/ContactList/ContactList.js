import ContactItem from "../ContactItem/contactitem"

const ContactList = function(props)
{
    return(
        <>
            <form>
                <input id = 'search' type="text" placeholder="Search"></input>
                <label htmlFor="list">Sort:</label>
                <select id = "list">
                    <option value="fNameA">First Name(ASC)</option>
                    <option value="fNameD">First Name(DESC)</option>
                    <option value="lNameA">Last Name(ASC)</option>
                    <option value="lNameD">Last Name(DESC)</option>
                </select>
                <button type = "submit">Find</button>
            </form>
            <div>
                {
                    props.contactData.map(contact => {
                        return <ContactItem fname = {contact.fName} lname = {contact.lName} img = {contact.img} email = {contact.email} phoneNum = {contact.phoneNum} id = {contact.id}/>
                    })
                }
            </div>
        </>
        
    )
}

export default ContactList;