const SearchBar = ({ search, HandleSearchChange }) => {


    return (
        <div>
            Find countries : <input
                value={search}
                onChange={HandleSearchChange}
            />

        </div>



    )
}
export default SearchBar