const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

app.get('/', (req, res) => res.send('Flexitive-style QA DevOps demo running!'));
app.listen(3000, () => console.log('App running on port 3000'));
