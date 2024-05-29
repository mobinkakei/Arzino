import React, { FC } from "react";
import { MdGeneratingTokens, MdContactSupport, MdInfoOutline, MdMoney } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuArrowLeftFromLine } from "react-icons/lu";

export const ToolView: FC = ({
  setOpenAirdrop,
  setOpenContact,
  setOpenCreateModal,
  setOpenSendTransaction,
  setOpenTokenMetaData,
}) => {
  const tools = [
    {
      name: "سـاخــت توکن",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
    {
      name: "متادیتا توکن",
      icon: <MdInfoOutline />,
      function: setOpenTokenMetaData,
    },
    {
      name: "پشتیبانی",
      icon: <MdContactSupport />,
      function: setOpenContact,
    },
    {
      name: "ایردراپ",
      icon: <MdMoney />,
      function: setOpenAirdrop,
    },
    {
      name: "تراکنش ها",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
    {
      name: "رهگیری عملیات",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
    {
      name: "برترین توکن ها",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
    {
      name: "کاوش در شبکه سولانا",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
  ]
  return (
    <section  id="tools" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              ابـزار های قدرتمند ارزیــنو
            </h2>
            <p className="text-default-200 text-sm font-medium">
              خوش اومدید به بخش ابزار های ارزینو ! اینجا شما می‌تونید به راحتی و بدون هیچ دردسری، توکن‌های رمزارزی خودتون رو بر روی بلاکچین سولانا ایجاد کنید و ازشون سود ببرید. این پلتفرم همه‌چیزی که نیاز دارید رو فراهم کرده؛ از ساخت توکن و ایجاد ایردراپ تا انجام تراکنش‌ها و حتی کاوش در شبه بلاکچین! همین الان متصل شوید و به دنیای هیجان‌انگیز ارزهای دیجیتال خوش بیاید! 🚀
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <div className="bg-default/950/40 rounded-xl backdrop-blur-3xl"
              onClick={() => tool.function(true)}>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20${index == 0 ? "text-red-500" : index == 1 ? "text-sky-500" : index == 2 ? "text-indigo-500" : index == 3 ? "text-yellow-500" : "text-teal-500"}`}>
                    <i data-lucide="dribble" className="">{tool.icon}</i>
                  </div>
                  <h3 className="text-default-200 text-xl font-medium">{tool.name}</h3>
                </div>
                <a className="text-primary group relative inline-flex items-center gap-2">
                  <span className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full">
                  </span>
                  شروع کنید
                  <i data-lucide={"move-right"}>
                    <LuArrowLeftFromLine />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a className="hover:bg-primary-hover bg-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 text-white transition-all duration-500">
            بیشتر 
            <i>
              <LuArrowLeftFromLine/>
            </i>
          </a>
        </div>
      </div>
    </section>
  );
}

