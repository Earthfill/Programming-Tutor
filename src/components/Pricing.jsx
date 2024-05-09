const Pricing = ({ toggle, setToggle }) => {
  return (
    <div className="pt-28 md:pt-28 2xl:pt-80 bg-base-100">
      <div className="grid gap-5 md:place-items-center text-center align-element py-5">
        <div className="text-3xl font-semibold items-center">Pricing</div>
        <div>No hirirng fees. One flat monthly/yearly cost.</div>
        <div className="flex items-center gap-3 font-semibold">
          <div>Monthly Billing</div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <input 
                type="checkbox" 
                className="toggle toggle-primary" 
                checked={toggle}
                onClick={() => setToggle(!toggle)}
              />
            </label>
          </div>
          <div>Yearly Billing</div>
          <div className="bg-primary text-base-100 rounded-md px-2 w-fit">SAVE UP TO 40%</div>
        </div>
      </div>
    </div>
  )
}

export default Pricing