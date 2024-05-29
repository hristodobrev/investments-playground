import yahooFinance from 'yahoo-finance2'; // NOTE the .default
import express from 'express';

const app = express();
const port = 8080;

app.use(express.static('assets'));

app.get('/data', (req, res) => {
    const stock = req.query.stock || 'SP';
    const period1 = req.query.period || `2014-05-01`;

    try {
        yahooFinance.historical(stock, { period1, interval: '1mo' })
            .then(resp => {
                res.json(resp);
            })
            .catch(e => {
                console.log(e);
                res.status(e.code);
                res.end();
            });
    } catch (e) {
        console.log(e);
        res.status(500);
        res.end();
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});