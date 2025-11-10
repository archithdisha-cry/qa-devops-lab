const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Flexitive-style QA DevOps demo running!'));
app.listen(3000, () => console.log('App running on port 3000'));
