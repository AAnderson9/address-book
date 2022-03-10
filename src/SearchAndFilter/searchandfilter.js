const SearchAndFilter = function(props)
{
    return(
        <form>
            <input type="text" placeholder="Search"></input>
            <select>
                <option value="fName">First Name</option>
                <option value="fName">Last Name</option>
            </select>
            <button type = "submit">Find</button>
        </form>
    )
}

export default SearchAndFilter;