import useFetch from "../useFetch";

const BookByAuthor = ({ author }) => {
    const { data, loading, error } = useFetch(`https://be-4-assignment1-kappa.vercel.app/books/author/${author}`)

    const books = Array.isArray(data) ? data : [data]

    return data ? (
        <div>
            <h2>Books by {author}</h2>
            <ul>
                {books.map((book) => (
                    <li key={book._id}>{book.title}</li>
                ))}
            </ul>
        </div>
    ) : (
        loading && <p>Loading...</p>
    )
}

export default BookByAuthor;