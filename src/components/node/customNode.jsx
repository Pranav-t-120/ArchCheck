const CustomNode = ({ data, id, selected }) => {
  return (
    <div
      className={`bg-[#F8F4EC] border border-[#D8CAB8] rounded-lg p-4 shadow-lg w-52 ${selected ? 'ring-2 ring-[#E4D8B4]' : ''}`}
    >
      {/* Header with SVG Icon and Label */}
      <div className="flex items-center gap-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#F9E1D4]"
        >
          <path d="M12 2L2 7l2 1 8-5 8 5 2-1zM4 10v12h16V10l-8 5-8-5z" />
        </svg>
        <span className="text-[#3C3C3C] font-semibold text-sm">{data.label}</span>
        <div className="ml-auto cursor-pointer text-[#F9E1D4] text-xl">+</div>
      </div>

      {/* Node Content */}
      <div className="mt-3 text-[#D2C6B3] text-xs">
        <p>{data.description}</p>
      </div>

      {/* Config Options */}
      {data.configs && (
        <div className="mt-3 text-[#E4D8B4] text-xs">
          <ul className="list-none pl-0">
            {data.configs.map((config, index) => (
              <li key={index} className="mb-1">
                <span>{config.key}: {config.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
