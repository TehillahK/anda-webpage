function UpcomingShows(){
    return(
        <div className="">
            <table className="table min-w-fit">
                <thead>
                <tr>

                    <th>Date</th>
                    <th>Venue</th>
                    <th>time</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>Aug 1</td>
                    <td>Apollo Theatre,NY,USA</td>
                    <td>02:00pm</td>
                </tr>

                <tr>

                    <td>Aug 1</td>
                    <td>Apollo Theatre,NY,USA</td>
                    <td>02:00pm</td>
                </tr>

                <tr>

                    <td>Aug 1</td>
                    <td>Apollo Theatre,NY,USA</td>
                    <td>02:00pm</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const ArtistShows = () => {
    return (
        <div className="hero min-h-screen bg-blue-50">
            <div className="hero-content text-center">
                <div className="max-h-min">
                    <h2 className="text-5xl font-bold mb-3">Shows</h2>
                    <UpcomingShows />
                    <button className="btn btn-lg mt-3">Book Now</button>

                </div>
            </div>
        </div>
    )
}

export default ArtistShows;
