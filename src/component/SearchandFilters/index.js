import React, { useEffect, useState } from "react";
import '../SearchandFilters/SearchandFilters.scss'

function SearchAndFilters({ weather, handleKeyPress }) {
    const [search, setSearch] = useState("");
    const [showCountryMenu, setShowCountryMenu] = useState(false);
    const [showColdestMenu, setShowColdestMenu] = useState(false); // Menu cho nút Coldest thứ hai
    const [showRainyMenu, setShowRainyMenu] = useState(false);

    const toggleCountryMenu = () => {
        setShowCountryMenu(prevState => !prevState);
    };
    const toggleColdestMenu = () => {
        setShowColdestMenu((prev) => !prev);
    };

    const toggleRainyMenu = () => {
        setShowRainyMenu((prev) => !prev);
    };

    useEffect(() => {
        document.title = `Weather in  ${search}`;
    }, [search]);

    return (
        <div className="sf">
            
                <input
                    className="sf_input"
                    value={search}
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleKeyPress(search)}
                />
            
            <div className="sf_filter">Filter
                <div className="dropdown">
                    <button onClick={() => setShowCountryMenu(!showCountryMenu)}>Country</button>
                    {showCountryMenu && (
                        <ul className="dropdown__menu">
                            <li><a href="#">Vietnam</a></li>
                            <li><a href="#">England</a></li>
                        </ul>
                    )}
                </div>
                <div className="dropdown">
                    <button onClick={() => setShowColdestMenu(!showColdestMenu)}>Coldest</button>
                    {showColdestMenu && (
                        <ul className="dropdown__menu">
                            <li><a href="#">Coldest1</a></li>
                            <li><a href="#">Coldest2</a></li>
                        </ul>
                    )}
                </div>
                <div className="dropdown">
                    <button onClick={() => setShowRainyMenu(!showRainyMenu)}>Rainy</button>
                    {showRainyMenu && (
                        <ul className="dropdown__menu">
                            <li><a href="#">Rainy 1</a></li>
                            <li><a href="#">Rainy 1</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchAndFilters;