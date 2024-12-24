import leadTimeDropDown from "../../../assets/leadTimeDropDown.svg";
import selectIcon from "../../../assets/formDropDown.svg";
import uploadIcon from "../../../assets/uploadIcon.svg";
import { ResponseStepsHeader } from "./responseSteps";
import Select, { components } from "react-select";
import { useState, useEffect } from "react";
import { ResponseStepsBtns } from "./responseStepsBtns";
import { useGlobalContext } from "../../../utils/context";

export const TermsAttachment = () => {
  const { currentStep } = useGlobalContext();
  const formFields = [
    {
      id: 0,
      name: "paymentTerms",
      label: "Payment Terms",
      type: "select",
      placeHolder: "Net 30",
      options: ["Net 30", "Net 60", "Net 90"],
    },
    {
      id: 1,
      name: "deliverySchedule",
      label: "Delivery Schedule",
      type: "select",
      placeHolder: "Immediate delivery",
      options: [
        "Immediate delivery",
        "Scheduled delivery",
        "Flexible delivery",
      ],
    },
    {
      id: 2,
      name: "shippingMethod",
      label: "Shipping Method",
      type: "select",
      placeHolder: "Courier Services",
      options: ["Courier Services", "Freight", "Air Shipping"],
    },
    {
      id: 3,
      name: "leadTime",
      label: "Lead time",
      type: "select",
      placeHolder: "10",
      options: ["5", "10", "15"],
    },
  ];

  const DropdownIndicator = (props) => {
    const { name } = props.selectProps;
    const icon = name === "leadTime" ? leadTimeDropDown : selectIcon;

    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <img
            src={icon}
            alt="dropdown icon"
            className={name === "leadTime" ? "w-16 h-[24px]" : "w-5 h-5"}
          />
        </components.DropdownIndicator>
      )
    );
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      color: "#101928",
    }),
  };

  const [formData, setFormData] = useState({
    paymentTerms: "",
    deliverySchedule: "",
    shippingMethod: "",
    leadTime: "",
  });
  const [files, setFiles] = useState([]);

  // Load stored form data from localStorage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("termsAttachmentForm"));
    if (storedData) {
      setFormData(storedData.formData);
      setFiles(storedData.files || []);
    }
  }, [currentStep]);

  function saveTermsDraft() {
    localStorage.setItem(
      "termsAttachmentForm",
      JSON.stringify({ formData, files })
    );
  }

  const handleFiles = (newFiles) => {
    const fileArray = Array.from(newFiles);
    setFiles((prevFiles) => [...prevFiles, ...fileArray]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleFileInputChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedOption ? selectedOption.value : "",
    }));
  };

  return (
    <section className="componentBorder flex flex-col gap-8">
      {/* header */}
      <ResponseStepsHeader
        header="Terms and Attachments"
        subtitle="Provide detailed information on payment and delivery terms"
      />

      {/* form */}
      <div className="grid gap-6 md:grid-cols-2 ">
        {formFields.map(({ id, label, name, type, placeHolder, options }) => (
          <div key={id} className="relative flex flex-col text-sm">
            <label className="font-bold text-sm mb-1 text-[#475367]">
              {label}
            </label>
            <div className="relative">
              {/* Select Input */}
              <Select
                options={options.map((option) => ({
                  label: option,
                  value: option,
                }))}
                name={name}
                value={
                  formData[name]
                    ? { label: formData[name], value: formData[name] }
                    : null
                }
                onChange={(selectedOption) =>
                  handleSelectChange(name, selectedOption)
                }
                components={{
                  DropdownIndicator,
                  IndicatorSeparator: () => null,
                }}
                placeholder={placeHolder}
                styles={customStyles}
              />
            </div>
          </div>
        ))}
        {/* border */}
        <p className="border border-[#E9E9E9] "></p>
      </div>

      {/* Attachments */}
      <article className="border-b border-[#E9E9E9] pb-6">
        <ResponseStepsHeader
          header={"Attachments"}
          subtitle={"Attach all necessary files or documents"}
        />
        {/* upload */}
        <div
          className="border-2 rounded-2xl border-dashed border-primaryGray300 p-6 text-center grid place-items-center gap-4 max-w-[515px] text-sm"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {/* upload icon */}
          <img src={uploadIcon} alt="upload icon" />

          <div>
            <p className="font-medium text-primaryBlue ">
              Click to upload{" "}
              <span className=" text-primaryGray600">or drag and drop</span>
            </p>
            <p className="text-primaryGray400">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>

          {/* divider */}
          <div className="flex items-center gap-x-2 justify-center">
            <p className="border-t border-primaryGray100 min-w-[90px] max-w-[122px]"></p>
            <p className="text-primaryGray400 font-bold">OR</p>
            <p className="border-t border-primaryGray100 min-w-[90px] max-w-[122px]"></p>
          </div>

          {/* input */}
          <label className="cursor-pointer font-bold inline-block text-primaryBlue max-w-[113px] w-[113px] border border-primaryBlue rounded-[8px] py-2 h-fit ">
            Browse Files
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFileInputChange}
            />
          </label>

          {files.length > 0 && (
            <div className="mt-4 text-left">
              <strong className="text-sm text-gray-700">Selected Files:</strong>
              <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      {/* buttons */}
      <ResponseStepsBtns
        draftName={"termsAttachmentForm"}
        saveAsDraftFunction={saveTermsDraft}
      />
    </section>
  );
};
