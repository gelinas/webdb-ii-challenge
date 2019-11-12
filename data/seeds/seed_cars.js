
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate() // truncate over delete to reset id's
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '1HGBH41', make: 'Honda', model: 'Civic', mileage: 100400.11, transmission: 'automatic', title: 'clean'},
        {vin: '3ADF142', make: 'Nissan', model: 'Xterra', mileage: 290400.11, transmission: 'automatic', title: 'salvage'},
        {vin: 'OIER134', make: 'Volkswagon', model: 'Jetta', mileage: 190400.11, transmission: 'manual', title: 'clean'},
      ]);
    });
};
