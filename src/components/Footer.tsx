import React, { FC, useEffect } from "react";
import { useForm } from "@formspree/react";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
} from "react-icons/ti";
import {notify} from "../utils/notifications";
import NotificationList from "./Notification";

export const Footer: FC = () => {
    const [state, handleSubmit] = useForm("mbjnzqoe");
        if (state.succeeded) {
            notify({
                type: "success",
                message: "ازت ممنونیم که عضو خبرنامه شدی !",
            });
        }
    const menuOne = [
        "مرکز پشتیبانی",
        "مستندات",
        "قوانین و مقررات",
        "درباره ما",
        "تماس باما"
    ]
    const menuTwo = [
        "سوشیال مـدیا",
        "تعـرفـه هـا",
        "ســـاخت توکن",
        "خــدمـات",
        "ویــژگی ها"
    ]

    return (
        <footer className="bg-default-950/40 backdrop-blur-3xl">
            <div className="container py-20 lg:px-20">
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-12 lg:gap-16">
                    <div className="col-span-2 sm:col-span-1 lg:col-span-3">
                        <ul className="flex flex-col gap-3">
                            <h5 className="text-default-200 mb-2 font-medium lg:text-lg xl:text-xl">
                                لینک های مفید
                            </h5>
                            {
                                menuOne.map((item, index) => (
                                    <li>
                                        <a href="#" className="text-default-300 hover:text-white text-base transition-all">
                                            <i data-lucide='gauge-circle' className="me-4 inline h-4 w-4">
                                                {item}
                                            </i>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-span-2 sm:col-span-1 lg:col-span-3">
                        <ul className="flex flex-col gap-3">
                            <h5 className="text-default-200 mb-2 font-medium lg:text-lg xl:text-xl">
                                بیشتر مارو بشناسید
                            </h5>
                            {
                                menuTwo.map((item, index) => (
                                    <li>
                                        <a href="#" className="text-default-300 hover:text-white text-base transition-all">
                                            <i data-lucide='gauge-circle' className="me-4 inline h-4 w-4">
                                                {item}
                                            </i>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-span-2 lg:col-span-6">
                        <div className="bg-primary/20 rounded-xl">
                            <div className="p-10">
                                <h6 className="mb-4 text-xl text-white">خـبـرنـامـه</h6>
                                <p className="text-default-200 mb-6 text-base font-medium">
                                    از طریق ایـمـیـل در خـبـرنـامـه برای اطلاع از جدیدترین آپدیت ها اقدام کنید
                                </p>
                                <form onSubmit={handleSubmit}
                                    className="mb-6 space-y-2">
                                    <label htmlFor="email" className="text-base text-white">
                                        ایـمـیـل
                                    </label>
                                    <div className="relative">
                                        <input type="email" id="email" name="email" placeholder="ایمیل خود را وارد کنید" className="bg-defalut-950/60 pe-40 ps-4 h-12 w-full rounded-lg border-white/10 backdrop-blur-3xl focus:border-white/10 focus:ring-0" />
                                        <button type="submit" disabled={state.submitting} className=" bg-purple-700 end-[6px] absolute top-[6px] inline-flex h-9 items-center justify-center gap-2 rounded-md px-6 text-white transition-all">
                                            ارسال ایمیل
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <h6 className="mb-4 text-base text-white">ارزینو رو دنیال کنید !</h6>
                                    <ul className="flex flex-wrap items-center gap-1">
                                        {[
                                            <TiSocialFacebook />,
                                            <TiSocialLinkedin />,
                                            <TiSocialTwitter />,
                                            <TiSocialYoutube />,
                                        ].map((socail, index) => (
                                            <li key={index}>
                                                <a
                                                    href="#"
                                                    className="hover:bg-primary group inline-flex h-10 w-10 items-center justify-center rounded-lg border Oborder-white/10 transition-all duration-500">
                                                        <i data-lucide="facebook" className="text-default-300 group-hover:text-white">
                                                            {socail}
                                                        </i>
                                                    </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copy Right Arzino  */}
            <div className="border-white/10 border-t py-6 ">
            <div className="md:text-start container flex h-full flex-wrap items-center justify-center gap-4 text-center md:justify-between lg:px-20">
                <p className="text-default-400 text-base font-medium">
                    ©️ تمامی حقوق برای ارزینو محفوظ است.
                </p>
            </div>
            </div>
        </footer>
    )
}