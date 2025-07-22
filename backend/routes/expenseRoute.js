const express = require("express");
const {
  expenseSchema,
  expenseUpdateOneFieldSchema,
} = require("../validations/expenseValidation");
const Expense = require("../models/Expense");
const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const { title, amount, date } = req.body;
  try {
    const validatedData = await expenseSchema.validate(
      { title, amount, date },
      {
        abortEarly: false,
      }
    );
    const expense = new Expense(validatedData);
    const saved = await expense.save();
    res.status(201).json({ save: saved });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        errors: err.inner.map((e) => ({
          path: e.path,
          message: e.message,
        })),
      });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
});

//Read
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();

    if (expenses.length === 0) {
      return res.status(404).json({ message: "No expenses found" });
    }
    res.status(200).json({ Expenses: expenses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Get by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findById(id);
    if (!expense) {
      res.status(404).json({ message: "Expense not FOund" });
    }
    res.status(200).json({ Expense: expense });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Update
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, amount, date } = req.body;
  try {
    const validatedData = await expenseSchema.validate(
      { title, amount, date },
      {
        abortEarly: false,
      }
    );
    const updated = await Expense.findByIdAndUpdate(id, validatedData, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: updated });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        errors: err.inner.map((e) => ({
          path: e.path,
          message: e.message,
        })),
      });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
});

//Update Patch
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, amount, date } = req.body;
  try {
    const validatedData = await expenseUpdateOneFieldSchema.validate(
      { title, amount, date },
      {
        abortEarly: false,
      }
    );
    const oldExpense = await Expense.findById(id);
    if (!oldExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    const updatedFeilds = [];
    if (title && title !== oldExpense.title) updatedFeilds.push("title");
    if (amount && amount !== oldExpense.amount) updatedFeilds.push("amount");
    if (date && new Date(date).toISOString() !== oldExpense.date.toISOString())
      updatedFeilds.push("date");

    const expense = await Expense.findByIdAndUpdate(id, validatedData);
    if (!expense) {
      res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json({
      message:
        updatedFeilds.length > 0
          ? `Expense update successfully with fields:${updatedFeilds.join(
              ", "
            )}`
          : "No Feild changed",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        errors: err.inner.map((e) => ({
          path: e.path,
          message: e.message,
        })),
      });
    }
    res.status(500).json({ error: err.message });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: "Expense deleted sucessfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
