import yahooFinance from 'yahoo-finance2';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors())

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/graph', (req, res) => {
    res.render('graph');
});

app.get('/historical', (req, res) => {
    const stock = req.query.stock || 'SP';
    const period1 = req.query.period || `2014-05-01`;

    try {
        yahooFinance.historical(stock, { period1, interval: '1mo' })
            .then(resp => {
                res.json(resp);
            });
    } catch (e) {
        res.json({});
    }
});

app.get('/quoteSummary', async (req, res) => {
    let search = req.query.search;
    try {
        const result = await yahooFinance.quoteSummary(search, { modules: [ "financialData" ] })
        res.json(result.financialData);
    } catch (e) {
        res.json({});
    }
})

app.get('/search', async (req, res) => {
    let search = req.query.search;
    try {
        await yahooFinance.search(search)
            .then(resp => {
                res.json(resp.quotes);
            });
    } catch (e) {
        res.json([]);
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
    console.log(`URL: http://localhost:${port}`)
});