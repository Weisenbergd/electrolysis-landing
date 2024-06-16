export default function Hero() {
  return (
    <div className="grid px-ps md:px-pm md:grid-cols-2 lg:px-pl py-11 bg-black">
      <div className="flex flex-col gap-12">
        <div className="text-7xl flex flex-col">
          <span className="custom-style">Radiate</span>
          <span> Confidence</span>
        </div>
        <div className="relative text-5xl gap-2 flex flex-col mb-10">
          <span>with smooth</span> <span>spotless</span> <span>skin</span>
        </div>
        <p className="text-xl relative after:absolute after:w-[90%] after:border-b-2 after:-bottom-2 after:left-0 ">
          the only fda-approved treatment for permanent hair removal
        </p>
      </div>
      <div className="bg-red-50"></div>
    </div>
  );
}
