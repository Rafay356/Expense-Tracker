import { Formik, Form, Field, ErrorMessage } from "formik";
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

export const ExpenseForm = ({ initialValues, onSubmit, submitError }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddExpenseSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          {submitError && (
            <p className="text-red-500 text-center">{submitError}</p>
          )}
          <div>
            <div className="flex gap-3 justify-center items-center">
              <label htmlFor="title" className="text-lg font-medium ">
                Title
              </label>
              <Field
                type="text"
                name="title"
                className="input border border-amber-400 rounded w-full focus:border-amber-500 hover:border-amber-500 focus:outline-none p-2"
              />
            </div>
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 mx-auto w-full text-center text-sm"
            />
          </div>
          <div>
            <div className="flex gap-3 justify-center items-center">
              <label htmlFor="amount" className="text-lg font-medium ">
                Amount
              </label>
              <Field
                type="number"
                name="amount"
                className="input border border-amber-400 rounded w-full focus:border-amber-500 hover:border-amber-500 focus:outline-none p-2"
              />
            </div>
            <ErrorMessage
              name="amount"
              component="div"
              className="text-red-500 mx-auto w-full text-center text-sm"
            />
          </div>
          <div>
            <div className="flex gap-3 justify-center items-center">
              <label htmlFor="date" className="text-lg font-medium ">
                Date
              </label>
              <Field
                type="date"
                name="date"
                className="input border border-amber-400 rounded w-full focus:border-amber-500 hover:border-amber-500 focus:outline-none p-2"
              />
            </div>
            <ErrorMessage
              name="date"
              component="div"
              className="text-red-500 mx-auto w-full text-center text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
          >
            {isSubmitting ? "Submitting..." : "Add Expense"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
