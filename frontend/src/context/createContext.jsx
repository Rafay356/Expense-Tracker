import { createContext } from "react";
import * as yup from "yup";

const AddExpenseSchema = yup.object().shape({
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

export const AddExpenseSchemaContext = createContext(AddExpenseSchema);

export const ThemeContext = createContext("bg-yellow-500");
