import { addDays, subDays, subHours } from "date-fns";
import type { Invoice } from "src/types/invoice";

const now = new Date();

export const invoices: Invoice[] = [
  {
    id: "0",
    currency: "$",
    customer: {
      email: "zach@relight.ca",
      name: "Zach Rahimi",
    },
    dueDate: addDays(now, 5).getTime(),
    issueDate: subHours(now, 1).getTime(),
    number: "1",
    status: "paid",
    totalAmount: 2500,
  },
  {
    id: "1",
    currency: "$",
    customer: {
      email: "zach@relight.ca",
      name: "Zach Rahimi",
    },
    dueDate: addDays(now, 5).getTime(),
    issueDate: subHours(now, 1).getTime(),
    number: "1",
    status: "paid",
    totalAmount: 2500,
  },
  {
    id: "2",
    currency: "$",
    customer: {
      email: "taye@relight.ca",
      name: "Taye Farrant",
    },
    dueDate: addDays(now, 17).getTime(),
    issueDate: subDays(subHours(now, 4), 2).getTime(),
    number: "3",
    status: "pending",
    totalAmount: 2500.0,
  },
];

export const invoice: Invoice = {
  id: "5ecb86785312dcc69b5799ad",
  currency: "$",
  customer: {
    address: "Customer Address Here",
    company: "",
    email: "contact@relight.ca",
    name: "Customer Name",
    taxId: "1",
  },
  dueDate: subHours(now, 1).getTime(),
  issueDate: subHours(now, 1).getTime(),
  items: [
    {
      id: "5ecb8694db1760a701dfbf74",
      currency: "$",
      description:
        "5 year warranty & Immediate Professional Installation Service",
      quantity: 1,
      totalAmount: 2500.0,
      unitAmount: 2500.0,
    },
  ],
  number: "INV-0019",
  status: "paid",
  subtotalAmount: 50.0,
  taxAmount: 155.5,
  totalAmount: 2555.5,
};
