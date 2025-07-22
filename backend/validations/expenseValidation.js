const yup = require("yup");
const expenseSchema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters long"),
  amount: yup
    .number()
    .required("Amount is required")
    .positive("Amount must be a positive number"),
  date: yup.date().default(() => new Date()),
});

const expenseUpdateOneFieldSchema = yup.object({
  title: yup.string().min(3, "Title must be at least 3 characters long"),
  amount: yup.number(),
  date: yup.date().default(() => new Date()),
});

module.exports = { expenseSchema, expenseUpdateOneFieldSchema };
