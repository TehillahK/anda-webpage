import Image from "next/image";
import Link from "next/link";

const ArtistCard = () => {
  return(
      <div className=" flex  flex-col justify-center w-fit  text-center">
          <Image src={"/artist-image.png"}
                 width={500} height={500}
                 objectFit={"cover"}
          />
          <h3>Tom Talon</h3>
          <p>Rapper/Producer</p>
          <p>Holland,NLD</p>
          <Link href={"/"}>
             <a className="btn btn-sm">See profile</a>
          </Link>
      </div>
  )
}

export default ArtistCard;
