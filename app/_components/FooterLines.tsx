
const FooterLines = () => {
  return (
    <div className="absolute inset-0 z-[0]">
      <div className="flex items-center  justify-between h-full">
        {Array.from({ length: 22 }).map((_, index) => (
          <div key={index} className=" w-[0.5px] h-full bg-[#00000033] dark:bg-white/15"></div>
        ))}
      </div>
    </div>
  );
}

export default FooterLines