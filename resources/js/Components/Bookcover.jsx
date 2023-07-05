

export default function Bookcover({ bookcover }) {

    return (
        <img src={bookcover.volumeInfo?.imageLinks?.thumbnail} alt={bookcover.title} className="object-cover object-center hover:translate-x-1" />
    )
}
