import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
  Select,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import { ExpenceTrackerContext } from "../../../../context/context";
import { v4 as uuidv4 } from "uuid";
import {
  incomeCategories,
  expenseCategories,
} from "../../../../constants/categories";
import formatDate from "../../../../utlis/formatDate";

const intialState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date()),
};
const Form = () => {
  const [formData, setformData] = useState(intialState);
  const { addTranscation } = useContext(ExpenceTrackerContext);

  const createTranscation = () => {
    const transcation = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4,
    };
    addTranscation(transcation);
    setformData(intialState);
  };
  const selectedCategories =
    formData.type == "Income" ? incomeCategories : expenseCategories;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2">
          ....
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setformData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expence">Expence</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setformData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setformData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Calander"
          fullWidth
          value={formData.date}
          onChange={(e) =>
            setformData({ ...formData, date: formatDate(e.target.value) })
          }
        />
      </Grid>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTranscation}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
