function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-dvh w-screen flex-col items-center justify-center">
        <div className="h-24 w-24 rounded-full shadow-[0_0_70px_15px_rgba(255,87,0,0.5)]">
          <img
            className="h-24 w-24 rounded-full text-center"
            src="../../public/communityIcon_tqrzte0yaa3c1.png"
            alt="Reddit Image"
          />
        </div>
        <h1 className="mt-10 text-center text-4xl font-semibold">
          Reddit Client
        </h1>
        <div className="lds-ring mt-5 text-[#ff5700]">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
