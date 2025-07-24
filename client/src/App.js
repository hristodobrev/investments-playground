import axios from 'axios';
import { useState } from 'react';
import StockData from './StockData';
import StockList from './StockList';

export default function App() {
  let [stocks, setStocks] = useState([]);
  let [stockData, setStockData] = useState();
  let [loading, setLoading] = useState(false);
  let timer;

  function search(e) {
    clearInterval(timer);
    timer = setTimeout(() => {
      axios.get('http://localhost:8080/search?search=' + e.target.value)
        .then(response => {
          let data = response.data.map(stock => ({ ...stock, id: crypto.randomUUID()}));
          setStocks(data);
        });
    }, 300);
  }

  function quote({ symbol }) {
    if(symbol && !loading) {
      setLoading(() => true);
      setStocks([]);
      axios.get('http://localhost:8080/quoteSummary?search=' + symbol)
        .then(response => {
          setStockData(response.data);
          setLoading(() => false);
        });
    }
  }

  return (
    <main className='bg-blue-50 fixed inset-0'>
      <section className='mx-auto max-w-md mt-10 p-10 bg-white rounded-lg'>
        <input type="text" onChange={search} placeholder='Search' className='rounded-full bg-indigo-50 px-2 py-1' />
        <StockList stocks={stocks} quote={quote} />
        { loading ? <span>loading</span> : <StockData stockData={stockData} /> }
      </section>
    </main>
  );
}
