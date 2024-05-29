import React, { FC } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AiOutlineClose } from "react-icons/ai";
import { notify } from "../../utils/notifications";
import Branding from "../../components/Branding";

export const ContactView: FC = ({ setOpenContact }) => {
//Form
const [state, handleSubmit] = useForm("mbjnzqoe");
if (state.succeeded) {
    setOpenContact(false);
    notify({
        type: "success",
        message: "خیلی ممنونیم که ما رو از مشکلت با خبر کردی، سه سوته باهات تماس میگیریم !"
    });
}
//Component
const closeModal = () => <a onClick={() => setOpenContact(false)}
    className="group mt-4 inline-flex h-10 w-10 items-center justify-center 
rounded-lg bg-white/20 backdrop-blur-2xl transition-all 
duration-500 hover:bg-blue-600/60">
    <i className="text-2xl text-white group-hover:text-white">
        <AiOutlineClose />
    </i>
</a>
return (
<>
    <section className="flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
        <div className="container">
            <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* First */}
                    <Branding image="auth-img" title="تست" message="تست" />
                    {/* Second */}
                    <div className="lg:ps-0 flex h-full flex-col p-10">
                        <div className="pb-10">
                            <a className="flex">
                                <img src="assets/images/logo1.png" alt="لوگو ارزینو" className="h-10 " />
                            </a>
                        </div>
                        <div className="my-auto pb-6 text-center">
                            <h4 className="mb-4 text-2xl font-bold text-white">
                                منتظر پیام شما ارزینویی عزیز هستیم ... 
                            </h4>
                            <p className="text-default-300 mx-auto mb-5 max-w-sm">
                                از طریق ایمیل هر پیامی دارید با ما در میان بگذارید تا سه سوته پاسخ بدیم ... 
                            </p>
                            <div className="text-start">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="text-base/normal text-default-200 mb-2 block font-semibold">
                                        ایمیل
                                    </label>
                                    <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border-default-200 block w-full rounded
                                    Iborder-white/10 bg-transparent py-1.5 px-3 text-white/80
                                    Ofocus : border-white/25 focus: ring-transparent"
                                    placeholder="ایمیل"
                                    />
                                </div>
                                <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.error}
                                />
                                <textarea 
                                name="message"
                                id="message"  
                                rows="6"                                    
                                className="border-default-200 relative block w-full rounded
                                Iborder-white/10 bg-transparent py-1.5 px-3 text-white/80
                                Ofocus : border-white/25 focus: ring-transparent"
                                placeholder="پیغام شما ... ">
                                <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.error}
                                />
                                </textarea>
                                <div className="mb-6 text-center">
                                    <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex w-full items-center justify-center rounded-lg
                                    px-6 py-2 text-white backdrop-blur-2xl transition-all duration-500">
                                        <span className="fw-bold">ارســـال</span>
                                    </button>
                                    {closeModal()} {/* Called the function */}
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
</>
);
} 