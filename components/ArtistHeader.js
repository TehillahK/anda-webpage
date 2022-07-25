import Image from "next/image";
const ArtistHeader = (props) => {
    const photoUrl = props.photoUrl;
    const name = props.name;
    return(
        <div className="hero-content flex-col ">

            <div className={" flex flex-col text-center"}>
                <h1 className="text-5xl font-bold mb-3">{name}</h1>
                <p className={"mb-3"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                <Image src={photoUrl} width={400} height={400} objectFit={"cover"}
                       alt={`Photo of the musician ${name}`} objectPosition={"80% 0"}/>
                <div className={"mt-3 flex flex-row justify-between"}>
                    <button className="btn btn-primary">Instgram</button>
                    <button className="btn btn-primary">Twitter</button>
                    <button className="btn btn-primary">Facebook</button>
                </div>

            </div>
        </div>
    )
}

export default ArtistHeader;
