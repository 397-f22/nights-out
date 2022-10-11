const FilterForm = ({range, setRange}) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="dateRange">Select Date Range</label>
                <select class="form-select" aria-label="Default select example" onChange={()=>setRange(e.target.value)}>
                    <option value="Past One Month">Past One Month</option>
                    <option value="Past Three Months">Past Three Months</option>
                    <option value="Past Six Months">Past Six Months</option>
                    <option selected>All</option>
                </select>
            </div>
        </form>
    )
};

export default FilterForm;
