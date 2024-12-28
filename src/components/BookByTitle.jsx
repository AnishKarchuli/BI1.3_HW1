import useFetch from "../useFetch";

const BookByTitle = ({ title }) => {

    const apiBaseURL = "https://be-4-assignment1-kappa.vercel.app"
    const { data, loading, error } = useFetch(`${apiBaseURL}/books/${title}`)

    return data ? (
        <div>
            <h2>{data.title}</h2>
            <p><strong>Author: </strong>{data.author}</p>
            <p><strong>Release Year: </strong>{data.publishedYear}</p>
            <p><strong>Genre: </strong>{data.genre.join(", ")}</p>
        </div>
    ) : (
        loading && <p>Loading...</p>
    )
}

export default BookByTitle;