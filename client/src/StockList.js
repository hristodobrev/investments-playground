export default function StockList ({stocks, quote}) {
    if (stocks?.length) {
        return (
            <ul>
                {stocks.map(s => {
                return <li key={s.id} className="hover:bg-gray-100 p-1 rounded-sm cursor-pointer" onClick={() => quote(s)}>
                    {s.symbol ? <strong>({s.symbol}) </strong> : ''}
                    {s.shortname ?? s.name}
                </li>
                })}
            </ul>
        )
    }
}