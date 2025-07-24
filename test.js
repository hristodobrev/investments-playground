import yahooFinance from 'yahoo-finance2';


// const result = await yahooFinance.quote('aapl')
// try {
//     const result = await yahooFinance.search('p')
// } catch (e) {
//     console.log('Error Log:');
//     console.log(e)
// }


const result = await yahooFinance.quoteSummary('TSLA', { modules: [ "financialData" ] });
console.log(result);