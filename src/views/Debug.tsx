<div className="lg:ps-0 flex h-full flex-col p-10">
<div className="pb-10">
  <a className="flex">
    <img src="assets/images/logo1.png" alt="لوگو ارزینو" className="h-10 " />
  </a>
</div>
<div className="my-auto pb-6 text-center">
  <h4 className="mb-4 text-2xl font-bold text-white">
    تست
  </h4>
  <p className="text-default-300 mx-auto mb-5 max-w-sm">
    توکن شما بر بتر بلاکچین قدرتمند سولانا با موفقیت ساخته شد. در اکسپلور سولانا تون رو ببینید
  </p>
  <div className="flex items-start justify-center">
    <img
      src={"assets/images/logout.svg"}
      alt=""
      className="h-40"
    />
  </div>
  <div className="mt-5 w-full text-center ">
    <InputView
      name={"کانترکت توکن"}
      placeholder={"آدرس کانترکت"}
      clickhandle={(e) => setTokenAddress(e.target.value)} />
    <div className="mb-6 text-center">
      <button
        onClick={() => getMetaData(tokenAddress)}
        className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex w-full items-center justify-center rounded-lg
        px-6 py-2 text-white backdrop-blur-2xl transition-all duration-500"
      >
        <span className="fw-bold">دریافت متادیتا توکن</span>
      </button>
    </div>
    {closeModal()}
  </div>
</div>
</div>
  //               <div className="pb-10">
  //                 <a className="flex">
  //                   <img src="assets/images/logo1.png" alt="لوگو ارزینو" className="h-10 " />
  //                 </a>
  //               </div>
  //               <div className="my-auto pb-6 text-center">
  //                 <h4 className="mb-4 text-2xl font-bold text-white">
  //                   تست
  //                 </h4>
  //                 <p className="text-default-300 mx-auto mb-5 max-w-sm">
  //                   توکن شما بر بتر بلاکچین قدرتمند سولانا با موفقیت ساخته شد. در اکسپلور سولانا تون رو ببینید
  //                 </p>
  //                 <div className="flex items-start justify-center">
  //                   <img
  //                     src={"assets/images/logout.svg"}
  //                     alt=""
  //                     className="h-40"
  //                   />
  //                 </div>
  //                 <div className="mt-5 w-full text-center ">
  //                   <InputView
  //                     name={"کانترکت توکن"}
  //                     placeholder={"آدرس کانترکت"}
  //                     clickhandle{(e) => setTokenAddress(e.target.value)} />
  //                   <div className="mb-6 text-center">
  //                     <button
  //                       onClick={() => getMetaData(tokenAddress)}
  //                       className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex w-full items-center justify-center rounded-lg
  //                       px-6 py-2 text-white backdrop-blur-2xl transition-all duration-500">
  //                       <span className="fw-bold">دریافت متادیتا توکن</span>
  //                     </button>
  //                   </div>
  //                   <closeModal />
  //                 </div>
  //               </div>
  //             </div>