const customer = require('./controller');
module.exports = app => {
    //Create new customer (SQL-Insert)
    app.post("/customer", customer.create);

    //Retrieve all customers (SQL-SELECT)
    app.get('/customers', customer.findAll);

    //Retrieve one customers (SQL-SELECT)
    app.get('/customer/:id', customer.findOne);

    //Delete all customers (SQL-SELECT)
    app.delete('/customers', customer.deleteAll);

    //Update customer with customerId (SQL-UPDATE)
    app.put('/customer/:id', customer.update);

    //Delete customer with customerId (SQL-UPDATE)
    app.delete('/customer/:id', customer.deleteById);
};
