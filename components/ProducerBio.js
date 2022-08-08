import Image from "next/image";

const ProducerBio = (props) => {
    const name = props.name;
    const photoUrl = props.photoUrl;
    const bio = props.bio;
    const daws = props.daws;
    const instruments = props.instruments;
    const credits = props.credits
  return(
      <div className="hero min-h-screen min-w-fit bg-base-100">
          <div className="hero-content flex-col lg:flex-row">
              <Image src={photoUrl} objectFit={"cover"} height={800} width={600} />
              <div>
                  <h1 className="text-5xl font-bold ">{name}</h1>

                  <p className="py-2 ml-3">{bio}</p>
                  <h2 className="text-2xl font-bold">Genres</h2>
                  <ul className="py-2 ml-3">
                      <li>rap</li>
                  </ul>
                  <h2 className="text-2xl font-bold">Instruments</h2>
                  <ul className="py-2 ml-3">
                      {
                          instruments.map(
                              (instrument,key)=>{
                                  return(
                                      <li key={instrument}>{instrument}</li>
                                  )
                              }
                          )
                      }
                  </ul>
                  <h2 className="text-2xl font-bold">DAWS</h2>
                  <ul className="py-2 ml-3 flex flex-row">

                      {
                          daws.map(
                              (daw)=>{
                                  return(
                                      <li className={"mr-0.5"} key={daw}> {daw}</li>
                                  )
                              }
                          )
                      }
                  </ul>
                  <h2 className="text-2xl font-bold">Credits</h2>
                  <ul className="py-1 ml-3 flex flex-col ">
                      {
                          credits.map(
                              (credit)=>{
                                  return(
                                      <li key={credit.title} className={"my-1"}>{credit.title}</li>
                                  )
                              }
                          )
                      }

                  </ul>
                  <div className={"flex flex-row "} >
                      <button className={"btn btn-sm mr-1"}>Instagram</button>
                      <button className={"btn btn-sm mr-1"}>Youtube</button>
                      <button className={"btn btn-sm mr-1"}>Beatstars</button>
                  </div>

              </div>
          </div>
      </div>
  )
}

export default ProducerBio;
