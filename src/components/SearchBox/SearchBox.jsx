export default function SearchBox({value, onFilter}) {
    return (
        <form>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
        </form>
    );
}