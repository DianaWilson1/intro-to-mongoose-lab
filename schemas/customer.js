// const mongoose = require('mongoose');

// const customerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true }
// });

// const Customer = mongoose.model('Customer', customerSchema);

// // write a function to create a customer. ex: create(name, age)
// const createCustomer = async (name, age) => {

//   const newCustomer = {
//     name: name,
//     age: age,
//   };

//   try {
//     console.log("Database connection successful!");

//     const customer = await Customer.create(newCustomer);
//     console.log("Customer created: ", `name: ${customer.name}  \n id:${customer.id}`);

//     return customer;
//   } catch (error) {
//     console.log("failed to create customer.")
//     console.log(error);
//     return error.message;
//   }
// };

// // write a function to get a customer. ex: get(customerId)
// // const getById = async (id) => {
// //   const id = `${customer.id}`;
// //   const todo = await Todo.findById(id);
// //   return todo;
// // }

// // const getById = async (id) => {
// //   try {
// //     const todo = await Todo.findById(id);
// //     return todo;
// //   } catch (error) {
// //     console.error("Error fetching todo:", error);
// //   }
// // };

// // write a function to update a customer.ex: update(customerId, name, age)

// // const update = async (name, age, id) => {

// //   const updateTodo = async () => {
// //     const id = '';
// //     const updatedTodo = await Todo.findByIdAndUpdate(
// //       id,
// //       { isComplete: true },
// //       { new: true }
// //     );
// //     console.log("Updated todo:", updatedTodo);
// //   };
// //   const runQueries = async () => {
// //     console.log('Queries running.');
// //     await updateTodo();
// //   };

// // }
// // write a function to delete a customer. ex: delete(customerId, name, age)


// // const deleteTodo = async () => {
// //   try {
// //     const id = '6573745144784f6dc034e1df';
// //     const removedTodo = await Todo.findByIdAndDelete(id);
// //     console.log('Removed todo:', removedTodo)
// //   }
// // } catch (error) {
// //   console.error('Mistake in deliting todo:', error);
// // };

// // const deleteTodo = async () => {
// //   try {
// //     const id = '6573745144784f6dc034e1df';
// //     const removedTodo = await Todo.findByIdAndDelete(id);

// //     if (!removedTodo) {
// //       console.log('Todo не найдено');
// //       return;
// //     }

// //     console.log('Удалённый todo:', removedTodo);
// //   } catch (error) {
// //     console.error('Ошибка при удалении todo:', error);
// //   }
// // };
// // // queries.js

// // const runQueries = async () => {
// //   console.log('Queries running.');
// //   await deleteTodo();
// // };


// // write a function to get all customers. ex: getAll()
// // queries.js

// // const findTodos = async () => {
// //   try {
// //     const todos = await Todo.find({});
// //     console.log("All todos:", todos);
// //   } catch (error) {
// //     console.error("Mistake in getting todos:", error);
// //   }
// // };

// // // queries.js

// // const runQueries = async () => {
// //   console.log("Queries running.");
// //   await findTodos();
// // };
// //----
// // const customerActions = {
// //   try {
// //     CustomerSchema: Customer,
// //     createCustomer,
// //   }
// //   catch(error) {
// //     console.error('Mistake in creting costomer:', error);
// //   }
// // };

// // const customerActions = {
// //   CustomerSchema: Customer,
// //   createCustomer: async (...args) => {
// //     try {
// //       return await createCustomer(...args);
// //     } catch (error) {
// //       console.error('Ошибка при создании клиента:', error);
// //       throw error;
// //     }
// //   }
// // };
// module.exports = customerActions;
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

const Customer = mongoose.model('Customer', customerSchema);

// Function to create a customer
const createCustomer = async (name, age) => {
  try {
    const customer = await Customer.create({ name, age });
    console.log("Customer created:", customer);
    return customer;
  } catch (error) {
    console.error("Failed to create customer:", error);
    return error.message;
  }
};

// Function to get a customer by ID
const getCustomerById = async (id) => {
  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      console.log("Customer not found");
      return null;
    }
    return customer;
  } catch (error) {
    console.error("Error fetching customer:", error);
    return error.message;
  }
};

// Function to update a customer by ID
const updateCustomer = async (id, name, age) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { name, age },
      { new: true, runValidators: true }
    );
    if (!updatedCustomer) {
      console.log("Customer not found");
      return null;
    }
    console.log("Updated customer:", updatedCustomer);
    return updatedCustomer;
  } catch (error) {
    console.error("Error updating customer:", error);
    return error.message;
  }
};

// Function to delete a customer by ID
const deleteCustomer = async (id) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer) {
      console.log("Customer not found");
      return null;
    }
    console.log("Deleted customer:", deletedCustomer);
    return deletedCustomer;
  } catch (error) {
    console.error("Error deleting customer:", error);
    return error.message;
  }
};

// Function to get all customers
const getAllCustomers = async () => {
  try {
    const customers = await Customer.find({});
    console.log("All customers:", customers);
    return customers;
  } catch (error) {
    console.error("Error fetching customers:", error);
    return error.message;
  }
};

// Exporting the functions
const customerActions = {
  CustomerSchema: Customer,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getAllCustomers
};


module.exports = customerActions;
