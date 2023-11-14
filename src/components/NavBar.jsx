
const NavBar = () => {
    return (
        <>
            <div className="nav-wrapper">
                <div className="search-wrapper">
                    <input className="seachbar"
                        type="text"
                        placeholder="search for jobs"
                        name="search"
                    //value
                    //onchange
                    />
                    <button className="search-btn"
                        type="submit"
                    //handlechange
                    />
                </div>
                <div className="location-wrapper">
                    <input className="seachbar"
                        type="text"
                        placeholder="location"
                        name="search"
                    //value
                    //onchange
                    />
                    <button className="search-btn"
                        type="submit"
                    //handlechange
                    />
                </div>
            </div>
        </>
    )
}

export default NavBar