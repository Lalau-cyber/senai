const routes = require('./routes'); // O Node procura automaticamente pelo index.js dentro da pasta routes
app.use('/api', routes);