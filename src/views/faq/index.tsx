import React, { FC } from "react";

export const FaqView: FC = ({ }) => {
  const question = [
    {
      question: "ما کی هستیم ؟",
      answer:"ما یک تیم دو نفره هستیم که ایده ارزینو به فکرمون رسید و در حال حاضر مشغول به توسعه آن هستیم و فعلا قصد توقف نداریم و روز به روز ارزینو رو ارتقاء میدیم !",
      id: "faq-1",
    },
    {
      question: "هدف ارزینو دقیقا چیه ؟",
      answer:"هدف ساخت این پروژه که به نام ارزینو معرفی می شود این است تا با ایجاد یک پلتفرم  بومی بر بستر بالکچین و وب ۳ امکان ورود و ساخت ارز و توکن های بومی یا به اختصار (کریپتو) را به بازار پررونق و جهانی این عرصه فراهم کرد.",
      id: "faq-2",
    },
    {
      question: "آیا ارزینو قوی تر می شود ؟",
      answer:"قطعا !! میتونید اهداف توسعه پیش رو ارزینو رو برای توسعه در صفحه درباره ما مشاهده کنید .",
      id: "faq-3",
    },
    {
      question: "در اتصال به کیف پولم مشکل دارم ؟",
      answer:"میتونید به قسمت مستندات - راهنمای استفاده مراجعه کنید و یا خطای اتصال رو به پشیبانس گزارش کنید .",
      id: "faq-4",
    },
    {
      question: "چطوری برای توکن خودم استخر موجودی بسازم ؟",
      answer:"این قابلین بصورت بتا قابل انجام است اما بزودی نسخه کامل آن ارائه می گردد",
      id: "faq-5",
    },
    {
      question: "توکن خودم رو چطوری مشاهده کنم ؟",
      answer:"شما می تونید تمام گزراشات رد خود را در قسمت اطلاعات توکن یا متادیتا تون مشاهده کنید.",
      id: "faq-6",
    },
  ];
  return (
    <section id="faq" className="py-20">
      < div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              شاید بپرسید ...
            </h2>
            <p className="text-default-200 text-sm font-medium">
              راحت باشید  و هر سوالی در ذهن تون هست رو بپرسید و اگر پاسخ سوال تون رو پیدا نکردید
              در پشتیبانی منتظر صدای گرم شما هستیم !
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="hs-accordion-group space-y-4">
            {
              question.map((question, index) => (
                <div key={index}
                  className={`hs-accordion bg-default-950/40 overflow-hidden rounded-lg border Dborder-white/10 backdrop-blur-3xl`}
                  id={question.id}>
                  <button
                    className="hs-accordion-toggle inline-flex items-center justify-between gap-x-3 px-6 py-4 text-left capitalize transition-all"
                    aria-controls={`faq-accordion-${index + 10}`}
                  >
                    <h5 className="flex text-base font-semibold">
                      <i className="me-3 h-5 w-5 stroke-white align-middle"></i>
                      {question.question}
                    </h5>
                  </button>
                  <div id={`faq-accordion-${index + 1}`} className="hs-accordion-content w-full overflow-hidden transition- [height] duration-300" aria-labelledby={question.id}>
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-default-300 mb-2 text-lg font-medium">
                        {question.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section >
  );
}