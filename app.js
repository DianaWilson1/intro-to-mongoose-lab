const { createCustomer } = require('./schemas/customer');
const { dbConnect, dbDisconnect } = require('./config/db-connection');

async function run() {
  console.log("Welcome to the CRM");
  try {
    dbConnect();
    // const customer = await createCustomer("diana", 6);
    // console.log('customer ', customer)
    // write the logic for the questions.

    //   What would you like to do?

    // 1. Create a customer
    // 2. View all customers
    // 3. Update a customer
    // 4. Delete a customer
    // 5. quit

  } catch (error) {
    console.log(error.message);
  } finally {
    dbDisconnect();
  }
}
run().catch(console.dir);
