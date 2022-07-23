const ArtistsHeader = () => {
  return(
      <div className="hero h-96  bg-transparent  md:min-h-screen" >
          <div className="hero-content flex-col content-start">
              <span ><span /></span>
              <div >
                  <h1 className="text-5xl font-bold">Artists</h1>
                  <p className="text-2xl py-6 "> ANDA focuses on applying commercially
                      viable lenses in:</p>
                  <ul>
                      <li className={"text-2xl"}>Hip Hop/rap</li>
                      <li className={"text-2xl"}>R&B</li>
                      <li className={"text-2xl"}>Drill</li>
                      <li className={"text-2xl"}>Hardcore trap-metal</li>
                      <li className={"text-2xl"}>Crate-digger jazz-rap</li>
                  </ul>

              </div>
          </div>
      </div>
  )
}

export default ArtistsHeader;
