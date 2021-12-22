import { useContext } from "react";

import { ExpenceTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";
import { hydrate } from "react-dom";

const useTransactions = (title) => {
  resetCategories();
  const { transcation } = useContext(ExpenceTrackerContext);

  const transcationPerType = transcation.filter((i) => i.type == title);

  const total = transcationPerType.reduce(
    (acc, curntVal) => (acc += curntVal.amount),
    0
  );

  const categories = title == "Income" ? incomeCategories : expenseCategories;
  console.log({ transcationPerType, total, categories });
  transcationPerType.forEach((item) => {
    const category = categories.find((c) => c.type === item.category);
    if (category) category.amount += item.amount;
  });
  const filterdCategories = categories.filter((c) => c.amount > 0);
  //   console.log(filterdCategories);

  const chartData = {
    datasets: [
      {
        data: filterdCategories.map((c) => c.amount),
        backgroundColor: filterdCategories.map((c) => c.color),
      },
    ],
    labels: filterdCategories.map((c) => c.type),
  };

  return { filterdCategories, total, chartData };
};

export default useTransactions;
