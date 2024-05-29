import React, { FC } from "react";
import { LuArrowLeftFromLine } from "react-icons/lu";

export const FeatureView: FC = ({
  setOpenAirdrop,
  setOpenContact,
  setOpenCreateModal,
  setOpenSendTransaction,
  setOpenTokenMetaData,
}) => {
  const feature = [
    {
      name: "توکن بساز بدون کدنویسی",
      desc: "هدف ارزینو همینه که شما رو سریعتر به آرزو هاتون برسونیم ! 🎯🎁 ",
      function: setOpenCreateModal,
    },
    {
      name: "ایجاد استخر موجودی برای توکن شما",
      desc: "تا انجا اومدی می خوای کلی دردسر بکشی تا توکن رو بفروش برسونی ؟ فکر همه جاشو کردیم ! 😒❤️",
      function: setOpenAirdrop,
    },
    {
      name: "بخر، بفروش و انتقال بده",
      desc: "همین جا میتونی تراکنش هاتو بر بستر امن بلاکچین انجام بدی ! 🥶🤝",
      function: setOpenSendTransaction,
    },
    {
      name: "رهگیری تراکنش در موتور سولانا",
      desc: "تو ارزینو نمیزاریم حقت خورده بشه و بهت کمک می کنم حساب و کتابت راست و ریس کنی ! 😊",
      function: setOpenTokenMetaData,
    },
  ]
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              چرا ارزیــنو ؟!
            </h2>
            <p className="text-default-200 text-sm font-medium">
             دیگه تو باید توکن بسازی و کسب درآمد کنی ! <br />
              با ارزینو بدون دانش فنی به آرزوت برس !
            </p>
          </div>
        </div>
        <div className="bg-default-950/40 flex flex-wrap items-center rounded-3xl backdrop-blur-3xl">
          {feature.map((list, index) => (
            <div
              key={index}
              className={`w-auto grow border-bborder-white/10 md:w-1/2 ${index == 0 ? "md:border-e"
                : index == 1
                  ? ""
                  : index == 2
                    ? "md:border-e md:border-b-0"
                    : ""
                }`}>
              <div className="p-8 sm:p-10">
                <h2 className="mb-4 text-2xl font-medium text-white">
                  {list.name}
                </h2>
                <p className="text-default-200 mb-6 text-base">{list.desc}</p>
                <a onClick={() => list.function()} className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300">
                  شروع کن !
                  <i><LuArrowLeftFromLine/></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};