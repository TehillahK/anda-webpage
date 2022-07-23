import Image from "next/image";
import {Container} from "postcss";


const Card = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-5 ">
            <div className="card-body">

                    <h2 className="card-title">Mixing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum viverra nibh, ac bibendum nibh dictum eu. Nam vel nulla.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">purchase $60</button>
                    </div>

            </div>
            <figure><img style={{width:"100%"}} src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
        </div>
    )
}

const MixingService = () => {
    return (
        <div className="hero min-h-screen  bg-base-100">
            <div className="hero-content ">
                <div className="w-screen h-96">
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default MixingService;
