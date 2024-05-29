// import React, { FC, useState, useCallback } from "react";
// import { useConnection } from "@solana/wallet-adapter-react";
// import { PublicKey } from "@solana/web3.js";
// import { Metadata, PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
// import { AiOutlineClose } from "react-icons/ai";
// import { ClipLoader } from "react-spinners";
// import { notify } from "../../utils/notifications";
// import { InputView } from "../input"
// import Branding from "components/Branding";
// import { set } from "immer/dist/internal";

// export const TokenMetadata: FC = ({ setOpenTokenMetaData }) => {
//   const { connection } = useConnection();
//   const [tokenAddress, setTokenAddress] = useState("");
//   const [tokenMetadata, setTokenMetadata] = useState(null);
//   const [logo, setLogo] = useState(null);
//   const [loaded, setLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   // Write Func
//   const getMetaData = useCallback(async (form) => {
//     setIsLoading(true);
//     try {
//       const tokenMint = new PublicKey(form);
//       const metadataPDA = PublicKey.findProgramAddressSync(
//         [Buffer.from("metadata"), PROGRAM_ID.toBuffer(), tokenMint.toBuffer()],
//         PROGRAM_ID
//       )[0];
//       const metadataAccount = await connection.getAccountInfo(metadataPDA);
//       const [metadata, _] = await Metadata.deserialize(metadataAccount.data);

//       let logoRes = await fetch(metadata.data.uri);
//       let logoJson = await logoRes.json();
//       let { image } = logoJson;

//       setTokenMetadata({ tokenMetadata, ...metadata.data });
//       setLogo(image);
//       setIsLoading(false);
//       setLoaded(true);
//       setTokenAddress("");
//       notify({
//         type: "success",
//         message: "اطلاعات توکن با موفقیت بازخوانی شد",
//       });
//     } catch (error: any) {
//       notify({
//         type: "error",
//         message: "فراخوانی داده با مشکل مواجه شد لطفا دوباره تلاش کنید.",
//       });
//     }
//   }, [tokenAddress]);

//   //Component
//   const closeModal = () => <a onClick={() => setOpenTokenMetaData(false)}
//     className="group mt-4 inline-flex h-10 w-10 items-center justify-center 
//   rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-blue-600/60">
//     <i className="text-2xl text-white group-hover:text-white">
//       <AiOutlineClose />
//     </i>
//   </a>
//   return (
//     <>
//       {isLoading && (
//         <div className="absolute top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/[.3] backdrop-blur-[10px]">
//           <ClipLoader />
//         </div>
//       )
//       }
//       <section className="flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
//         <div className="container">
//           <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
//             <div className="grid gap-10 lg:grid-cols-2">
//               <Branding image="auth-img" title="تست" message="تست" />
//                   <div className="lg:ps-0 flex h-full flex-col p-10">
//                     <div className="pb-10">
//                       <a className="flex">
//                         <img src="assets/images/logo1.png" alt="لوگو ارزینو" className="h-10 " />
//                       </a>
//                     </div>
//                     <div className="my-auto pb-6 text-center">
//                       <h4 className="mb-4 text-2xl font-bold text-white">
//                         تست
//                       </h4>
//                       <p className="text-default-300 mx-auto mb-5 max-w-sm">
//                         توکن شما بر بتر بلاکچین قدرتمند سولانا با موفقیت ساخته شد. در اکسپلور سولانا تون رو ببینید
//                       </p>
//                       <div className="flex items-start justify-center">
//                         <img
//                           src={"assets/images/logout.svg"}
//                           alt=""
//                           className="h-40"
//                         />
//                       </div>
//                       <div className="mt-5 w-full text-center ">
//                         <InputView
//                           name={"کانترکت توکن"}
//                           placeholder={"آدرس کانترکت"}
//                           clickhandle{(e) => setTokenAddress(e.target.value)} />
//                         <div className="mb-6 text-center">
//                           <button
//                             onClick={() => getMetaData(tokenAddress)}
//                             className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex w-full items-center justify-center rounded-lg
//                             px-6 py-2 text-white backdrop-blur-2xl transition-all duration-500"
//                           >
//                             <span className="fw-bold">دریافت متادیتا توکن</span>
//                           </button>
//                         </div>
//                         <closeModal/>
//                       </div>
//                     </div>
//                   </div>
//             </div>
//           </div>
//         </div>
//       </section >
//     </>
//   )
// }
import React, { FC, useState, useCallback } from "react";
import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { Metadata, PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import { AiOutlineClose } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import { notify } from "../../utils/notifications";
import { InputView } from "../input";
import Branding from "components/Branding";
import { set } from "immer/dist/internal";

export const TokenMetadata: FC = ({ setOpenTokenMetaData }) => {
  const { connection } = useConnection();
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenMetadata, setTokenMetadata] = useState(null);
  const [logo, setLogo] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getMetaData = useCallback(async (form) => {
    setIsLoading(true);
    try {
      const tokenMint = new PublicKey(form);
      const metadataPDA = PublicKey.findProgramAddressSync(
        [Buffer.from("metadata"), PROGRAM_ID.toBuffer(), tokenMint.toBuffer()],
        PROGRAM_ID
      )[0];
      const metadataAccount = await connection.getAccountInfo(metadataPDA);
      const [metadata, _] = await Metadata.deserialize(metadataAccount.data);

      let logoRes = await fetch(metadata.data.uri);
      let logoJson = await logoRes.json();
      let { image } = logoJson;

      setTokenMetadata({ tokenMetadata, ...metadata.data });
      setLogo(image);
      setIsLoading(false);
      setLoaded(true);
      setTokenAddress("");
      notify({
        type: "success",
        message: "اطلاعات توکن با موفقیت بازخوانی شد",
      });
    } catch (error: any) {
      notify({
        type: "error",
        message: "فراخوانی داده با مشکل مواجه شد لطفا دوباره تلاش کنید.",
      });
    }
  }, [tokenAddress]);

  const closeModal = () => (
    <a
      onClick={() => setOpenTokenMetaData(false)}
      className="group mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-blue-600/60"
    >
      <i className="text-2xl text-white group-hover:text-white">
        <AiOutlineClose />
      </i>
    </a>
  );

  // return (
  //   <>
  //     {isLoading && (
  //       <div className="absolute top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/[.3] backdrop-blur-[10px]">
  //         <ClipLoader />
  //       </div>
  //     )}
  //     <section className="flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
  //       <div className="container">
  //         <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
  //           <div className="grid gap-10 lg:grid-cols-2">
  //             <Branding image="auth-img" title="تست" message="تست" />
  //             <div className="lg:ps-0 flex h-full flex-col p-10">
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
  //             ) : (
  //             <div className="lg:ps-0 flex h-full flex-col p-10">
  //               <div className="pb-10">
  //                 <a className="flex">
  //                   <img src="assets/images/logo1.png" alt="لوگو ارزینو" className="h-10 " />
  //                 </a>
  //               </div>
  //               <div className="my-auto pb-6 text-center">
  //                 <div className="flex items-start justify-center">
  //                   <img
  //                     src={logo}
  //                     alt=""
  //                     className="h-40"
  //                   />
  //                 </div>
  //                 <div className="mt-5 w-full text-center">
  //                   <p className="text-default-300 text-base font-medium leading-6"></p>
  //                   <InputView
  //                     name={"کانترکت توکن"}
  //                     placeholder={tokenMetadata?.name}
  //                   />
  //                   <InputView
  //                     name={"نماد"}
  //                     placeholder={tokenMetadata?.symbol || "یافت نشد"}
  //                   />
  //                   <InputView
  //                     name={"پیوست"}
  //                     placeholder={tokenMetadata?.uri}
  //                   />
  //                   <div className="mb-6 text-center">
  //                     <a
  //                       href={tokenMetadata?.uri}
  //                       target="_blank"
  //                       rel="noreferrer"
  //                       className="bg-primary-600/90 hover:bg-primary-600 group mt-5
  //                       inline-flex w-full items-center justify-center rounded-lg
  //                       x-6 py-2 text-white backdrop-blur-2xl transition-all
  //                       duration-500">
  //                       <span className="fw-bold">رفتن به لینک توکن من</span>
  //                     </a>
  //                   </div>
  //                   <closeModal />
  //                 </div>
  //               </div>
  //             </div>
  //             )};
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
  return (
    <>
      {isLoading && (
        <div className="absolute top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/[.3] backdrop-blur-[10px]">
          <ClipLoader />
        </div>
      )}
      <section className="flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
        <div className="container">
          <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <Branding image="auth-img" title="تست" message="تست" />
              {isLoading ? (
                <div className="lg:ps-0 flex h-full flex-col p-10">
                  <div className="pb-10">
                    <a className="flex">
                      <img src="assets/images/logo1.png" alt="لوگو ارزینو" className="h-10 " />
                    </a>
                  </div>
                  <div className="my-auto pb-6 text-center">
                    <div className="flex items-start justify-center">
                      <img
                        src={logo}
                        alt=""
                        className="h-40"
                      />
                    </div>
                    <div className="mt-5 w-full text-center">
                      <p className="text-default-300 text-base font-medium leading-6"></p>
                      <InputView
                        name={"کانترکت توکن"}
                        placeholder={tokenMetadata?.name}
                      />
                      <InputView
                        name={"نماد"}
                        placeholder={tokenMetadata?.symbol || "یافت نشد"}
                      />
                      <InputView
                        name={"پیوست"}
                        placeholder={tokenMetadata?.uri}
                      />
                      <div className="mb-6 text-center">
                        <a
                          href={tokenMetadata?.uri}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-primary-600/90 hover:bg-primary-600 group mt-5
                                        inline-flex w-full items-center justify-center rounded-lg
                                        x-6 py-2 text-white backdrop-blur-2xl transition-all
                                        duration-500">
                          <span className="fw-bold">رفتن به لینک توکن من</span>
                        </a>
                      </div>
                      {closeModal()} {/* Called the function */}
                    </div>
                  </div>
                </div>
              ) : (
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
                          px-6 py-2 text-white backdrop-blur-2xl transition-all duration-500">
                          <span className="fw-bold">دریافت متادیتا توکن</span>
                        </button>
                      </div>
                      {closeModal()} {/* Called the function */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );


};

