export default function StockData ({stockData}) {
    if (stockData) {
        return (
            <section>
                <table className="table-auto w-full">
                    <tbody>
                        <tr>
                            <td>Gross Profit Margin</td>
                            <td className="text-right">{stockData.grossMargins.toFixed(4)}</td>
                        </tr>
                        <tr>
                            <td>Net Profit Margin</td>
                            <td className="text-right">{stockData.profitMargins.toFixed(4)}</td>
                        </tr>
                        <tr>
                            <td>Debt to Equity Ratio</td>
                            <td className="text-right">{stockData.debtToEquity}</td>
                        </tr>
                        <tr>
                            <td>Current Ratio</td>
                            <td className="text-right">{stockData.currentRatio}</td>
                        </tr>
                        <tr>
                            <td>Quick Ratio</td>
                            <td className="text-right">{stockData.quickRatio}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        )
    }
}