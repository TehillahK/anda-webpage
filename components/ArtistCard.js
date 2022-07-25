import Image from "next/image";
import Link from "next/link";

const ArtistCard = (props) => {
    const photoUrl = props.photoUrl;
    const artistName = props.name;
    const artistType = props.type;
    const country = props.country;
    const city = props.city;
    const nextRoute = `/artists/${props.id}`
  return(
      <div className=" flex  flex-col justify-center  text-center">
          <Image src={photoUrl}
                 width={700} height={700}
                 objectFit={"cover"}
          />
          <h3>{artistName}</h3>
          <p>{artistType}</p>
          <p>{city},{country}</p>
          <Link href={nextRoute}>
             <a className="btn btn-sm">See profile</a>
          </Link>
      </div>
  )
}

export default ArtistCard;
