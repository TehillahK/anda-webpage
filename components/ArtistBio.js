const ArtistBio = (props) => {
    const bio = props.bio;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-xs">
                    <h1 className="text-5xl font-bold">Biography</h1>
                    <p className="py-6">
                        {bio}.
                    </p>

                </div>
            </div>
        </div>
    )
}
export default ArtistBio;
