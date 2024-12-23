import clientIcon from "../../../assets/clientIcon.svg";

export const QouteInformation = () => {
  const qouteInfo = [
    {
      id: 0,
      title: "Title",
      detail: "Request for equipment",
    },
    {
      id: 1,
      title: "RFQ No",
      detail: "RQ#01234",
    },
    {
      id: 2,
      title: "Requestor",
      detail: "Jane Doe",
      postHeld: "Head Nurse, Paediatrics",
    },
    {
      id: 3,
      title: "Status",
      detail: "Awaiting",
    },
    {
      id: 4,
      title: "Department",
      detail: "Marternity",
    },
    {
      id: 5,
      title: "Client",
      detail: "Westend Hospital",
      address: "Clear street",
    },
  ];
  return (
    <article className="border border-borderGray rounded-lg p-4">
      {/* header */}
      <div className=" flex justify-between items-center mb-8">
        <h2 className="font-bold text-lg md:text-xl ">Quote Information</h2>
        <p className=" text-sm text-[#667185] ">
          Expected delivery date : 2024-12-02
        </p>
      </div>
      {/* info */}
      <div className=" lg:flex gap-x-3 items-start justify-between">
        {/* details */}
        <div className=" flex flex-col gap-y-4  ">
          {qouteInfo.slice(0, 5).map(({ title, detail, id, postHeld }) => (
            <div className=" grid grid-cols-2 font-medium  pr-12">
              <p className="text-[#555E68]  w-[50%]  ">{title}</p>
              <p className="text-[#344054] shrink-0 flex gap-x-2 items-center">
                {/* initials */}{" "}
                {id == 2 && (
                  <span className=" shrink-0 bg-primaryOrange rounded-full w-[32px] h-[32px] grid place-items-center font-bold text-sm">
                    {detail
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </span>
                )}{" "}
                <span className=" md:shrink-0">{detail}</span>
                {/* post */}
                {id == 2 && (
                  <p className=" flex items-center gap-x-2">
                    <span className=" inline-block bg-[#D9D9D9] w-[6px] h-[6px] rounded-full shrink-0 "></span>
                    <span className="text-[#98A2B3] md:shrink-0">
                      {postHeld}
                    </span>
                  </p>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* client */}
        <div className=" border w-fit border-borderGray rounded-lg p-4 flex flex-col gap-y-2  mt-8 lg:mt-0 md:w-[30%]">
          <p className=" flex items-center gap-x-2">
            <img src={clientIcon} alt="" />
            <span className=" text-sm text-primaryGray600">Client</span>
          </p>
          <div className=" flex items-center gap-x-4">
            <span className=" text-[#101928] shrink-0 bg-primaryOrange rounded-full w-[32px] h-[32px] grid place-items-center font-bold text-sm">
              W
            </span>
            <p className=" flex flex-col gap-x-2">
              <span className=" text-primaryGray900 text-sm">
                {qouteInfo[5].detail}
              </span>
              <span className=" text-primaryGray600 text-xs">
                {qouteInfo[5].address}
              </span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
