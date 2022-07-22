import Image from 'next/image'
const HeroAd = () => {
  return(
      <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row">
              <Image src="/family-photo.png" className="max-w-sm rounded-lg shadow-2xl" height={500} width={500} objectFit={"cover"}/>
              <div>
                  <h1 className="text-5xl font-bold">Dae the video drops new song</h1>
                  <p className="py-6">Dae the video and Parker drop new song</p>
                  <button className="btn btn-primary">Download</button>
              </div>
          </div>
      </div>
  )
}

export default HeroAd;
