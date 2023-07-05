import Bookcover from './Bookcover';

export default function BookcoverList({ bookcovers }, {chooseCover}) {
    function handleChooseCover(bookcover) {
        chooseCover(bookcover)
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bookcovers.map((bookcover) => (
            <Bookcover onClick={handleChooseCover} key={bookcover.id} bookcover={bookcover} />
        ))}
        </div>
    )
}
