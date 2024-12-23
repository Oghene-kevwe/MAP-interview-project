import tableImg from "../../../assets/tableImage.svg";

export const QouteItems = () => {
  const data = [
    {
      id: 0,
      item: "Oxygen concentrator",
      variants: "Blue",
      quantity: "100 pieces",
      price: "$200.00",
      amount: "$2,000.0",
      delivery: "2024-08-07",
    },
    {
      id: 1,
      item: "Mechanical ventilator",
      variants: "Nil",
      quantity: "45kg",
      price: "$350.00",
      amount: "$3,500.0",
      delivery: "2024-08-07",
    },
    {
      id: 0,
      item: "Patient Monitor",
      variants: "Blue",
      quantity: "30 Units",
      price: "$200.00",
      amount: "$2,000.0",
      delivery: "2024-08-07",
    },
    {
      id: 0,
      item: "Mechanical ventilator",
      variants: "Blue",
      quantity: "35 Units",
      price: "$300.00",
      amount: "$1,000.0",
      delivery: "2024-08-07",
    },
  ];

  return (
    <article className=" border border-borderGray rounded-lg p-4">
      {/* header */}
      <div className=" flex justify-between items-center mb-8">
        <h2 className="font-bold text-lg md:text-xl ">Items(s)</h2>
      </div>
      {/* table */}
      <div className=" overflow-auto">
        <table className="w-full border-separate border-spacing-0  rounded-md">
          <thead>
            <tr className=" bg-primaryGray50  text-xs text-primaryGray700">
              <th className="px-4  py-2 text-left">
                <p className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    className="inline-block w-[20px] h-[20px] "
                  />
                  <span>Items</span>
                </p>
              </th>
              <th className=" px-4 py-4  text-left">Variants</th>
              <th className=" px-4 py-4  text-left">Quantity</th>
              <th className=" px-4 py-4  text-left">Price</th>
              <th className=" px-4 py-4  text-left">Amount</th>
              <th className=" px-4 py-4  text-left">Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className=" text-sm">
                <td className=" px-4 py-2 text-primaryGray900 font-medium ">
                  {/* detail */}
                  <div className=" flex items-center gap-x-2">
                    {/* checkbox */}
                    <input
                      type="checkbox"
                      className="inline-block w-[20px] h-[20px] "
                    />
                    <img src={tableImg} alt="monitor" />
                    <p className="flex flex-col">
                      <span>{row.item.slice(0, 16)}...</span>
                      <span className=" text-primaryGray600">#28373</span>
                    </p>
                  </div>
                </td>
                <td className=" px-4 ">{row.variants}</td>
                <td className=" px-4 ">{row.quantity}</td>
                <td className=" px-4 ">{row.price}</td>
                <td className=" px-4 ">{row.amount}</td>
                <td className=" px-4 ">{row.delivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4 text-[#475367] ">
          <div className=" w-[27%] lg:pr-16">
            <div className="flex gap-4 justify-between py-2 ">
              <span>Subtotal:</span>
              <span className="font-medium">$8,000.00</span>
            </div>
            <div className="flex  gap-4 justify-between py-2">
              <span>Total:</span>
              <span className=" font-bold">$8,750.00</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
