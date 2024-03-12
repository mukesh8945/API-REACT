const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log('Server running on port ${port}');
// });

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


app.get('/api/products', (req, res) => {

    const products = [{
                id: 1,
                name: 'table wooden',
                price: 200,
                image: 'https://img.freepik.com/free-psd/metal-coffee-table-isolated-transparent-background_191095-20252.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais'
            },
            {
                id: 2,
                name: 'table glas',
                price: 400,
                image: 'https://img.freepik.com/free-psd/metal-coffee-table-isolated-transparent-background_191095-20252.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais'
            },
            {
                id: 3,
                name: 'table plastic',
                price: 150,
                image: 'https://img.freepik.com/free-psd/metal-coffee-table-isolated-transparent-background_191095-20252.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais'

            },
            {
                id: 4,
                name: 'table metal',
                price: 600,
                image: 'https://img.freepik.com/free-psd/metal-coffee-table-isolated-transparent-background_191095-20252.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais'
            },
            {
                id: 5,
                name: 'table polyester',
                price: 450,
                image: 'https://img.freepik.com/free-psd/metal-coffee-table-isolated-transparent-background_191095-20252.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais'
            }

        ]
        // http://localhost:5000/api/products?search=metal

    if (req.query.search) {
        const filterProducts =
            products.filter(products => products.name.includes(req.query.search))
        res.send(filterProducts);
        return;

    }
    setTimeout(() => {
        res.send(products);

    }, 5000);






})