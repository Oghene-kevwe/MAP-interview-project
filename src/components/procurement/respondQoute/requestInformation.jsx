import calendarIcon from "../../../assets/qouteCalender.svg";
import grayCancel from "../../../assets/grayCancel.svg";
import dollarIcon from "../../../assets/dollarIcon.svg";
import amountdollarIcon from "../../../assets/amountdollarIcon.svg";
import selectIcon from "../../../assets/formDropDown.svg";
import deleteIcon from "../../../assets/deleteIcon.svg";
import successIcon from "../../../assets/successIcon.svg";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { ResponseStepsHeader } from "./responseSteps";
import Select, { components } from "react-select";
import { ResponseStepsBtns } from "./responseStepsBtns";
import { useGlobalContext } from "../../../utils/context";

export const RequestInformation = () => {
  const { currentStep } = useGlobalContext();
  const navigate = useNavigate();
  const [totals, setTotals] = useState(0);

  const formFields = [
    {
      id: 0,
      name: "rfqNO",
      label: "RFQ No",
      type: "text",
      placeHolder: "RFQ-10234",
    },
    {
      id: 1,
      name: "title",
      label: "Title",
      type: "text",
      placeHolder: "Request for equipment",
    },
    {
      id: 2,
      name: "department",
      label: "Department",
      type: "text",
      placeHolder: "Maternity",
    },
    {
      id: 3,
      name: "deliveryDate",
      label: "Expected delivery date",
      type: "date",
      placeHolder: "2024-12-02",
    },
  ];

  const initialItems = [
    {
      id: 0,
      name: "Oxygen concentrator",
      variant: "Blue",
      quantity: 100,
      price: 12,
      amount: 1200,
      deliveryDate: "2024-12-02",
      variantOptions: ["Blue", "Green", "Red"],
    },
    {
      id: 1,
      name: "Mechanical ventilator",
      variant: "Blue",
      quantity: 100,
      price: 12,
      amount: 1200,
      deliveryDate: "2024-12-05",
      variantOptions: ["Blue", "Green", "Red"],
    },
    {
      id: 2,
      name: "Patient Monitor",
      variant: "Blue",
      quantity: 60,
      price: 12,
      amount: 1200,
      deliveryDate: "2024-12-05",
      variantOptions: ["Blue", "Green", "Red"],
    },
    {
      id: 3,
      name: "Mechanical ventilator",
      variant: "Blue",
      quantity: 2,
      price: 12,
      amount: 1200,
      deliveryDate: "2024-12-05",
      variantOptions: ["Blue", "Green", "Red"],
    },
  ];

  const [rows, setRows] = useState(initialItems);

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);

    // Update localStorage after deleting
    localStorage.setItem("ResponseInfo", JSON.stringify(updatedRows));
  };

  const handleAdd = () => {
    // Check if all the items are already added
    if (rows.length >= initialItems.length) {
      toast.info("All items are already added.", {
        position: "top-center",
        icon: (
          <img src={successIcon} alt="success icon" style={{ width: "30px" }} />
        ),
        progressClassName: "toastinfoBar",
      });
      return;
    }

    // Find the first item in initialItems that is not already in rows
    const newItem = initialItems.find(
      (item) => !rows.some((row) => row.id === item.id)
    );

    if (newItem) {
      setRows((prevRows) => [...prevRows, newItem]);
    } else {
      toast.info("No more items to add.", {
        position: "top-center",
        icon: (
          <img src={successIcon} alt="success icon" style={{ width: "30px" }} />
        ),
        progressClassName: "toastinfoBar",
      });
    }
  };

  const handleChange = (index, key, value) => {
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        // Check if the value is a valid number for the price field
        if (key === "price") {
          const parsedValue = parseFloat(value);
          const formattedValue = isNaN(parsedValue)
            ? "0.00"
            : parsedValue.toFixed(2);
          return { ...row, [key]: formattedValue }; // Format and update price
        }
        return { ...row, [key]: value }; // Leave other fields unchanged
      }
      return row;
    });
    setRows(updatedRows);
  };

  function saveResposeDraft() {
    // Save rows to localStorage
    localStorage.setItem("ResponseInfo", JSON.stringify(rows));
  }

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <img src={selectIcon} alt="dropdown icon" className={"w-5 h-5"} />
        </components.DropdownIndicator>
      )
    );
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      width: "140px",
      backgroundColor: "white",
      borderColor: "#E9E9E9",
      borderRadius: "0.375rem",
    }),
  };

  const itemNameStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#f0f2f5",
      borderColor: "#E9E9E9",
      borderRadius: "0.375rem",
      minWidth: "200px",
      color: "#98A2B3",
    }),
  };

  // Load saved rows from localStorage on mount
  useEffect(() => {
    const savedRows = localStorage.getItem("ResponseInfo");
    if (savedRows) {
      setRows(JSON.parse(savedRows));
    }
  }, [currentStep]);

  useEffect(() => {
    const total = rows
      .reduce((sum, item) => sum + item.quantity * item.price, 0)
      .toFixed(2);
    setTotals(total);
  }, [rows]);

  return (
    <section className="componentBorder flex flex-col gap-8">
      {/* header */}
      <ResponseStepsHeader
        header={"Request for Qoute"}
        subtitle={" Fill out these details to send the RFQ"}
      />
      {/* RFQ details */}
      <div className=" grid gap-6 md:grid-cols-2  border-b border-[#E9E9E9] pb-6">
        {formFields.map(({ id, label, name, type, placeHolder }) => (
          <div key={id} className="  relative flex flex-col text-sm">
            <label className=" font-bold text-sm mb-1 text-[#475367]">
              {label}
            </label>
            <div className=" relative">
              {/* calendar */}
              {id == 3 && (
                <img
                  src={calendarIcon}
                  alt=" calenderIcon"
                  className="absolute top-[50%] -translate-y-[50%] pl-2"
                />
              )}
              <input
                type={type}
                name={name}
                readOnly
                value={placeHolder}
                className={`bg-primaryGray100 border border-primaryGray300 text-[#98A2B3] rounded-md py-2 pl-2 w-full inline-block ${
                  id == 3 ? "pl-8" : null
                }`}
                placeholder={placeHolder}
                required
              />
              {/* cancel icon */}
              {id == 2 && (
                <img
                  src={grayCancel}
                  alt="cancel"
                  className="absolute top-[50%] -translate-y-[50%]  right-3"
                />
              )}
            </div>
            {id == 3 && (
              <span className=" text-sm text-primaryGray500 font-medium mt-2">
                Calculated based on lead time and issue date
              </span>
            )}
          </div>
        ))}
      </div>

      {/* table */}
      <div>
        <div className=" border-b border-[#E9E9E9] pb-4">
          {/* Add Item Button */}
          <button
            className="text-primaryGray800  font-bold hover:text-primaryBlue"
            onClick={handleAdd}
          >
            Add Items
          </button>
          <div className=" overflow-auto lg:overflow-hidden">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#F7F9FC] text-[#667185]">
                  <th className="text-left px-2">Items</th>
                  <th className="text-left px-2">Variants</th>
                  <th className="text-left px-2">Quantity</th>
                  <th className="text-left px-2">Price</th>
                  <th className="text-left px-2">Expected delivery d..</th>
                  <th className="text-left px-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item, index) => (
                  <tr key={item.id}>
                    {/* items select */}
                    <td className="py-3 pr-2">
                      <Select
                        options={rows.map((row) => ({
                          label: row.name,
                          value: row.name,
                        }))}
                        value={{ label: item.name, value: item.name }}
                        isDisabled
                        styles={itemNameStyles}
                        components={{
                          DropdownIndicator,
                          IndicatorSeparator: () => null,
                        }}
                      />
                    </td>

                    {/* variants */}
                    <td className="py-3 px-2">
                      <Select
                        options={item.variantOptions.map((option) => ({
                          label: option,
                          value: option,
                        }))}
                        name={item.name}
                        components={{
                          DropdownIndicator,
                          IndicatorSeparator: () => null,
                        }}
                        placeholder={item.variant}
                        menuPortalTarget={document.body}
                        styles={customStyles}
                        value={item.variant}
                        menuPlacement="top"
                        onChange={(e) =>
                          handleChange(index, "variant", e.value)
                        }
                      />
                    </td>

                    {/* quantity */}
                    <td className="py-3 px-2">
                      <div className=" relative max-w-[140px] min-w-[140px] ">
                        <input
                          value={item.quantity}
                          onChange={(e) =>
                            handleChange(index, "quantity", e.target.value)
                          }
                          type="text"
                          className=" w-full inline-block  bg-white text-primaryGray900 border border-primaryGray300 rounded-md p-2 "
                        />
                        <span className=" text-[#667185] px-2 rounded-[4px] bg-[#F7F9FC] absolute top-[50%] -translate-y-[50%]  right-2">
                          Pack
                        </span>
                      </div>
                    </td>

                    {/* price */}
                    <td className="py-3 px-2">
                      <div className=" relative max-w-[140px] min-w-[140px] ">
                        <input
                          value={(isNaN(parseFloat(item.price))
                            ? 0
                            : parseFloat(item.price)
                          ).toFixed(2)}
                          onChange={(e) =>
                            handleChange(index, "price", e.target.value)
                          }
                          type="text"
                          className=" w-full inline-block  pl-8 bg-white text-primaryGray900 border border-primaryGray300 rounded-md p-2 "
                        />
                        <img
                          src={dollarIcon}
                          alt="cancel"
                          className="absolute top-[50%] -translate-y-[50%]  left-3"
                        />
                      </div>
                    </td>

                    {/* date */}
                    <td className="py-2 px-2">
                      <CustomDatePicker
                        value={item.deliveryDate}
                        onChange={(newDate) =>
                          handleChange(index, "deliveryDate", newDate)
                        }
                      />
                    </td>

                    {/* amount */}
                    <td className="py-3 pl-2">
                      <div className="flex items-center justify-between min-w-[150px]">
                        <p className="flex items-center">
                          <img
                            src={amountdollarIcon}
                            alt="amount"
                            className="w-[8px]"
                          />
                          <span className="text-primaryGray700 font-bold">
                            {(item.quantity * item.price).toFixed(2)}
                          </span>
                        </p>
                        <button onClick={() => handleDelete(item.id)}>
                          <img src={deleteIcon} alt="delete" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className=" mt-4 text-right flex gap-x-16 pr-[9%] justify-end text-[#475367]">
          <span>Sub Total</span>
          <span>${totals}</span>
        </p>
      </div>

      {/* note */}
      <div className="  border-b border-[#E9E9E9] pb-6">
        <h2 className="text-[#475367] text-sm  font-bold mb-1">Note</h2>
        <div className=" max-w-[472px]">
          <textarea
            placeholder="Enter note here"
            className=" placeholder:text-[#98A2B3] pb-8 placeholder:text-sm resize-none border border-primaryGray300 rounded-md p-4 w-full "
          ></textarea>
          <p className=" text-right text-xs text-primaryGray500 font-medium">
            0/200
          </p>
        </div>
      </div>

      {/* buttons */}
      <ResponseStepsBtns
        draftName={"ResponseInfo"}
        saveAsDraftFunction={saveResposeDraft}
      />
    </section>
  );
};

const CustomDatePicker = ({ value, onChange }) => {
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div
      className="flex items-center max-w-[140px] min-w-[140px] gap-x-2 border border-primaryGray300 rounded-md p-2 text-[#101928]"
      onClick={onClick}
      ref={ref}
    >
      <img src={calendarIcon} alt="calendar" className="" />
      <input
        type="text"
        value={value}
        readOnly
        placeholder="Select a date"
        className="w-full inline-block "
      />
    </div>
  ));

  return (
    <DatePicker
      selected={value ? new Date(value) : null}
      onChange={(date) => onChange(date?.toISOString().split("T")[0])}
      customInput={<CustomInput />}
    />
  );
};
