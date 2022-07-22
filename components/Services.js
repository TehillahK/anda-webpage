const Services = ()=>{
    return(
        <div className={"my-20 flex w-full flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"}>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Production</h2>
                    <p className={"text-start"}>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More info</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Mixing/Mastering</h2>
                    <p className={"text-start"}>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More info</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Promotional</h2>
                    <p className={"text-start"}>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default Services;
