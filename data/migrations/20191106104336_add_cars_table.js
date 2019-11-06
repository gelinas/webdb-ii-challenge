
exports.up = function(knex) { // why not function(knex, Promise) like in other projects
    return knex.schema.createTable('cars', function(table) {
        // COLUMNS
        // adds a primary key, called 'id' as autoincrement integer, not nullable, unique
        table.increments();
        // reference DBdesigner schema and README.md
        // table.string('vin', 128).unique().notNullable(); // incorrectly used unique
        table.string('vin', 128)
            .notNullable();
        table.string('make', 128)
            .notNullable();
        table.string('model', 128)
            .notNullable();
        table.decimal('mileage', 10, 2)
            .notNullable();
        table.string('transmission', 255)
            .nullable(); // made field optional / nullable
        table.string('title', 128)
            .nullable(); // made field optional / nullable

        // CONSTRAINTS
        table.unique('vin'); // still not displaying in SQLite, revisit
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
