import Image from "next/image";
const ArtistHeader = (props) => {
    const photoUrl = props.photoUrl;
    const name = props.name;
    const type = props.type;
    const description = props.description;
    return(
        <div className="hero bg-base-100 md:min-h-screen">
        <div className="hero-content flex-col ">

            <div className={" flex flex-col text-center"}>
                <h1 className="text-5xl font-bold mb-3">{name}</h1>
                <p className={"mb-3"}>{description}  </p>
                <Image src={photoUrl} width={400} height={400} objectFit={"cover"}
                       alt={`Photo of the musician ${name}`} objectPosition={"80% 0"}
                       priority
                />
                <div className={"mt-3 flex flex-row justify-between"}>
                    <button className="btn btn-primary">Instgram</button>
                    <button className="btn btn-primary">Twitter</button>
                    <button className="btn btn-primary">Facebook</button>
                </div>

            </div>
        </div>
        </div>
    )
}

export default ArtistHeader;
