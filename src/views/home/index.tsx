import { FC } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

//INTERNAL IMPORT
import pkg from "../../../package.json";

export const HomeView: FC = ({ setOpenCreateModal }) => {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-[72px]">
      <div className="px-6 py-4">
        <div className="bg-default-950/40 rounded-2xl">
          <div className="container">
            <div className="p-6">
              <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                < div>
                  <span className="text-primary bg-primary/20 rounded-md px-3 py-1 text-sm font-medium uppercase tracking-wider">
                    اسکریپت ارزیـــنو {pkg.version}
                  </span>
                  <h1 className="md:text-5xl/tight my-4 max-w-lg text-3xl font-medium text-white">
                    به ارزیـــنو خوش آمدید !
                  </h1>
                  <p className="text-default-300 md:text-lg">
                    همین حالا توکن خودت رو در بلاکچین سولانا بدون نیاز به کد نویسی بساز و ازش کسب درآمد کن !
                  </p>
                  <div className="new_add_css">
                    <a
                      onClick={() => setOpenCreateModal(true)}
                      className="hover:bg-primary-hover group mt-10 inline-flex items-center justify-center gap-0 rounded-full border border-white/10 px-1 py-1 text-white transition-all duration-300">
                      <span className="bg-primary/20 text-primary me-2 flex h-11 w-11 items-center justify-center rounded-full group-hover:bg-white/10 group-hover: text-white">
                        <i data-lucide="image">
                          <MdGeneratingTokens />
                        </i>
                      </span>
                      شروع کنید !
                    </a>
                    <a className="mt-8">
                      <WalletMultiButton />
                    </a>
                  </div>
                </div>
                <div className="mx-auto h-[595px] overflow-hidden">
                  <div className="marquee grid grid-cols-2 gap-6">
                    <div className="relative m-auto flex flex-col gap-6 overflow-hidden">
                      <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-9", "img-14",
                          "img-21", "img-22",
                          "img-10"].map((image, index) => (
                            <img
                              key={index}
                              src={`assets/images/ai/${image}.jpg`}
                              alt=""
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                            />
                          ))
                        }
                      </div>
                      <div
                        aria-hidden="true"
                        className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-9", "img-14",
                          "img-21", "img-22",
                          "img-10"].map((image, index) => (
                            <img
                              key={index}
                              src={`assets/images/ai/${image}.jpg`}
                              alt=""
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                            />
                          ))
                        }
                      </div>
                    </div>
                    <div className="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden">
                      <div className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-6", "img-10",
                          "img-11", "img-12",
                          "img-13"].map((image, index) => (
                            <img
                              key={index}
                              src={`assets/images/ai/${image}.jpg`}
                              alt=""
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                            />
                          ))
                        }
                      </div>
                      <div
                        aria-hidden="true"
                        className="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-6", "img-10",
                          "img-11", "img-12",
                          "img-13"].map((image, index) => (
                            <img
                              key={index}
                              src={`assets/images/ai/${image}.jpg`}
                              alt=""
                              className="aspect-1 h-full w-60 rounded-xl object-cover"
                            />
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}