'use strict';

module.exports = (server, container) => {
  const customersController = container.resolve('customersController');

  server.route({
    method: 'GET',
    path: '/customers/filter',
    handler: customersController.filter
  });

  server.route({
    method: 'GET',
    path: '/customers/show/{customerId}',
    handler: customersController.show
  });

  server.route({
    method: 'DELETE',
    path: '/customers/show/{customerId}',
    handler: customersController.delete
  });

};
