type Props = {
  id: string;
  img_url: string;
  name: string;
  categories: any;
  description: string;
  stacks: any;
  status: any;
};

function getBgColor(value: any) {
  if (value === "green") {
    return "bg-green";
  } else if (value === "yellow") {
    return "bg-yellow";
  } else if (value === "blue") {
    return "bg-blue";
  }
}

function getTextColor(value: any) {
  if (value === "green") {
    return "text-green";
  } else if (value === "yellow") {
    return "text-yellow";
  } else if (value === "blue") {
    return "text-blue";
  }
}

export const PortfolioBox = ({
  id,
  img_url,
  name,
  categories,
  description,
  stacks,
  status,
}: Props) => {
  return (
    <div className="p-5 rounded-[10px] bg-white w-full relative flex flex-col justify-between max-h-full gap-y-1">
      <img
        className="w-full object-cover h-44 rounded-[10px] mb-5"
        src={img_url}
        alt="Hyfen Play"
      />
      <p className="font-bold text-black text-[20px] mb-2">{name}</p>
      <div className="flex gap-x-2 mb-2">
        {categories.map((categoryData: any, idx: any) => (
          <div
            key={idx}
            className={`rounded-[10px] ${getBgColor(
              categoryData.color
            )} p-2 w-fit`}
          >
            <p className={getTextColor(categoryData.color)}>
              {categoryData.name}
            </p>
          </div>
        ))}
      </div>
      <p className="text-black mb-2 text-base mb-2 min-h-[14vh]">
        {description}
      </p>
      <p className="text-gray mb-2 underline">Stack:</p>
      <div className="flex flex-wrap items-end w-fit mb-5 gap-3">
        {stacks.map((stackData: any, idx: any) => (
          <div
            key={idx}
            className="bg-lightGray border border-darkGray rounded-[10px] p-2 w-fit"
          >
            <p className="text-black text-xs text-center">{stackData}</p>
          </div>
        ))}
      </div>
      <a
        href={status.link}
        target="_blank"
        className={`rounded-[10px] ${
          status.status === "restricted" ? "bg-secondaryGray" : "bg-black"
        } w-full p-3 block ${
          status.status === "restricted"
            ? "cursor-not-allowed"
            : "cursor-pointer"
        }`}
      >
        <p className="text-center">{status.name}</p>
      </a>
    </div>
  );
};
