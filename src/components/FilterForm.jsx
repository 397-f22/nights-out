const FilterForm = ({range, setRange}) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="dateRange">Select Date Range</label>
                <select className="form-select" aria-label="Default select example" onChange={e =>setRange(e.target.value)}>
                    <option value="pastOneMonth">Past One Month</option>
                    <option value="pastThreeMonth">Past Three Months</option>
                    <option value="pastSixMonth">Past Six Months</option>
                    <option selected>All</option>
                </select>
            </div>
        </form>
    )
};

export default FilterForm;
