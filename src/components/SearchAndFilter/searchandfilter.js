const SearchAndFilter = function(props)
{
    return(
        <form>
            <input type="text" placeholder="Search"></input>
            <label htmlFor="list">Filter:</label>
            <select id = "list">
                <option value="fName">First Name</option>
                <option value="fName">Last Name</option>
            </select>
            <button type = "submit">Find</button>
        </form>
    )
}

export default SearchAndFilter;