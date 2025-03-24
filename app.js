// const { createCustomer } = require('./schemas/customer');
// const { dbConnect, dbDisconnect } = require('./config/db-connection');

// async function run() {
//   console.log("Welcome to the CRM");
//   try {
//     dbConnect();
//     // const customer = await createCustomer("diana", 6);
//     // console.log('customer ', customer)
//     // write the logic for the questions.

//     //   What would you like to do?

//     // 1. Create a customer
//     // 2. View all customers
//     // 3. Update a customer
//     // 4. Delete a customer
//     // 5. quit

//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     dbDisconnect();
//   }
// }
// run().catch(console.dir);

// // Starting the application
// // Copy
// // Welcome to the CRM

// // What would you like to do?

// //   1. Create a customer
// // 2. View all customers
// // 3. Update a customer
// // 4. Delete a customer
// // 5. quit

// // Number of action to run:
// // # user inputs 3

const { createCustomer, getAllCustomers, updateCustomer, deleteCustomer } = require('./schemas/customer');
const { dbConnect, dbDisconnect } = require('./config/db-connection');
const prompt = require('prompt-sync')();

async function run() {
  console.log("Welcome to the CRM");

  try {
    // Connect to the database
    dbConnect();

    let quit = false;
    while (!quit) {
      // Display the menu
      console.log("\nWhat would you like to do?");
      console.log("1. Create a customer");
      console.log("2. View all customers");
      console.log("3. Update a customer");
      console.log("4. Delete a customer");
      console.log("5. Quit");

      // Get the user's choice
      const choice = prompt("Enter the number of your action: ");

      switch (choice) {
        case '1':
          // Create a customer
          const name = prompt("Enter the customer's name: ");
          const age = prompt("Enter the customer's age: ");
          await createCustomer(name, age);
          console.log(`Customer ${name} created successfully.`);
          break;

        case '2':
          // View all customers
          const customers = await getAllCustomers();
          if (customers.length > 0) {
            console.log("\nAll Customers:");
            customers.forEach((customer) => {
              console.log(`ID: ${customer._id}, Name: ${customer.name}, Age: ${customer.age}`);
            });
          } else {
            console.log("No customers found.");
          }
          break;

        case '3':
          // Update a customer
          const customerIdToUpdate = prompt("Enter the customer ID to update: ");
          const newName = prompt("Enter the new name: ");
          const newAge = prompt("Enter the new age: ");
          await updateCustomer(customerIdToUpdate, newName, newAge);
          console.log(`Customer with ID ${customerIdToUpdate} updated.`);
          break;

        case '4':
          // Delete a customer
          const customerIdToDelete = prompt("Enter the customer ID to delete: ");
          await deleteCustomer(customerIdToDelete);
          console.log(`Customer with ID ${customerIdToDelete} deleted.`);
          break;

        case '5':
          // Quit the application
          console.log("Goodbye!");
          quit = true;
          break;

        default:
          console.log("Invalid choice, please try again.");
      }
    }
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    dbDisconnect();
  }
}

run().catch(console.dir);
