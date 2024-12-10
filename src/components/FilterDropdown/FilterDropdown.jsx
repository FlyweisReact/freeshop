import { useState } from "react";
import './FilterDropdown.css'

const FilterSidebar = ({ categories, onApplyFilter }) => {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedConditions, setSelectedConditions] = useState([]);

    const conditions = [
        { label: "New", description: "Unused, sealed box, undamaged" },
        { label: "Open box", description: "Unused, undamaged" },
        { label: "Reconditioned", description: "Restored by seller or a third" },
        { label: "Used", description: "Works perfectly, may show signs of wear" },
        { label: "For parts", description: "" },
        { label: "Other", description: "See item details" },
    ];

    const handleConditionChange = (conditionLabel) => {
        if (selectedConditions.includes(conditionLabel)) {
            setSelectedConditions(
                selectedConditions.filter((item) => item !== conditionLabel)
            );
        } else {
            setSelectedConditions([...selectedConditions, conditionLabel]);
        }
    };

    const applyFilters = () => {
        const filters = {
            minPrice,
            maxPrice,
            selectedConditions,
        };
        onApplyFilter(filters);
    };

    return (
        <div className="filter-sidebar">
            {/* Categories Section */}
            <div className="filter-section">
                <p>All Categories</p>
                <h6>Electronics & Media</h6>
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                    <p>+ Show more</p>
                </ul>

            </div>

            {/* Price Range Section */}
            <div className="filter-section-price">
                <h3>Filters</h3>
                <h2>Price range</h2>
                <div className="price-range">
                    <input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <p>to</p>
                    <input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <button onClick={applyFilters}>Go</button>
                </div>
            </div>

            {/* Condition Section */}
            <div className="filter-section-condition">
                <h3>Condition</h3>
                {conditions.map((condition) => (
                    <label className="condition-label" key={condition.label}>
                        <input
                            type="checkbox"
                            checked={selectedConditions.includes(condition.label)}
                            onChange={() => handleConditionChange(condition.label)}
                        />
                        <div className="condition-label-content">
                            <h6>{condition.label}</h6>
                            <p>{condition.description}</p>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterSidebar;
