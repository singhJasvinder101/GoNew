const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// ... Rest of your server code

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
