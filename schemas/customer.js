const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

const Customer = mongoose.model('Customer', customerSchema);

// write a function to create a customer. ex: create(name, age)
const createCustomer = async (name, age) => {

  const newCustomer = {
    name: name,
    age: age,
  };

  try {
    console.log("Database connection successful!");

    const customer = await Customer.create(newCustomer);
    console.log("Customer created: ", `name: ${customer.name}  \n id:${customer.id}`);

    return customer;
  } catch (error) {
    console.log("failed to create customer.")
    console.log(error);
    return error.message;
  }
};

// // write a function to get a customer. ex: get(customerId)
// const getById = async (id){
//   const id = "";
//   const todo = await Todo.findById(id);
// }

// // write a function to update a customer. ex: update(customerId, name, age)
// // queries.js
// const update = async (name, age, id) => {

//   const updateTodo = async () => {
//     const id = '';
//     const updatedTodo = await Todo.findByIdAndUpdate(
//       id,
//       { isComplete: true },
//       { new: true }
//     );
//     console.log("Updated todo:", updatedTodo);
//   };
//   const runQueries = async () => {
//     console.log('Queries running.');
//     await updateTodo();
//   };

// }
// // write a function to delete a customer. ex: delete(customerId, name, age)
// // queries.js

// const deleteTodo = async () => {
//   const id = '6573745144784f6dc034e1df';
//   const removedTodo = await Todo.findByIdAndDelete(id);
//   console.log('Removed todo:', removedTodo)
// }

// // queries.js

// const runQueries = async () => {
//   console.log('Queries running.');
//   await deleteTodo();
// };


// // write a function to get all customers. ex: getAll()
// // queries.js

// const findTodos = async () => {
//   const todos = await Todo.find({});
//   console.log("All todos:", todos);
// };

// // queries.js

// const runQueries = async () => {
//   console.log("Queries running.");
//   await findTodos();
// };
//----
const customerActions = {
  CustomerSchema: Customer,
  createCustomer,

};

module.exports = customerActions;
