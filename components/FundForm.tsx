import { yupResolver } from "@hookform/resolvers/yup";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  bank: yup.string().required("Bank is required"),
  branch: yup.string().required("Branch is required"),
  accountNumber: yup
    .number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  accountName: yup.string().required("Account Name is required"),
});

type FormData = yup.InferType<typeof schema>;

const FundWithdrawalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {};

  return (
    <div className="flex flex-col gap-4">
      <form
        className="flex flex-col gap-4 bg-white border rounded-md p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="bank" className="text-sm font-bold text-gray-500">
              Banck
            </label>
            <select
              {...register("bank")}
              id="bank"
              className="w-full p-2 border rounded-md"
            >
              <option value="1">Bank 1</option>
              <option value="2">Bank 2</option>
            </select>
            {errors.bank && (
              <p className="text-red-500 text-sm">{errors.bank.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="brnach" className="text-sm font-bold text-gray-500">
              Select Branch
            </label>
            <select
              {...register("branch")}
              id="brnach"
              className="w-full p-2 border rounded-md"
            >
              <option value="1">Branch 1</option>
              <option value="2">Branch 2</option>
              <option value="3">Branch 3</option>
              <option value="4">Branch 4</option>
              <option value="5">Branch 5</option>
            </select>
            {errors.branch && (
              <p className="text-red-500 text-sm">{errors.branch.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="accountName"
              className="text-sm font-bold text-gray-500"
            >
              Account Name
            </label>
            <input
              {...register("accountName")}
              type="number"
              id="amount"
              name="amount"
              className="w-full p-2 border rounded-md"
            />
            {errors.accountName && (
              <p className="text-red-500 text-sm">
                {errors.accountName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="accountNumber"
              className="text-sm font-bold text-gray-500"
            >
              Account Number
            </label>
            <input
              type="number"
              id="accountNumber"
              name="accountNumber"
              className="w-full p-2 border rounded-md"
            />
            {errors.accountNumber && (
              <p className="text-red-500 text-sm">
                {errors.accountNumber.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="file" className="text-sm font-bold text-gray-500">
              Proof Bank Account
            </label>
            <input
              type="file"
              name="file"
              id="file"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Back
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FundWithdrawalForm;
