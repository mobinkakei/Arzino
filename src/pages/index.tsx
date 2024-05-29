import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  HomeView, ToolView, FeatureView, OfferView, FaqView, CreateView, TokenMetadata,
  ContactView, AirdropView, DonateView
} from "../views";

const Home: NextPage = (props) => {
  //STATE VARIABLE
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetaData, setOpenTokenMetaData] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);
  return (
    <>
      <Head>
        <title>ارزیـــنو | اسکریپت ساخت توکن بر بستر بلاکچین</title>
        <meta name="description" content="ارزیـــنو ارائه‌دهنده‌ی اسکریپتی قدرتمند برای ساخت توکن‌های بر بستر بلاکچین است. با استفاده از این اسکریپت، قادر خواهید بود توکن‌های دیجیتالی خود را بر اساس بلاکچین ایجاد کرده و مدیریت کنید. بلاکچین، امنیت، شفافیت و عدم تغییرپذیری را به توکن‌های شما اضافه می‌کند. برای جزئیات بیشتر و استفاده از این ابزار قدرتمند، ارزیـــنو را امتحان کنید." />
      </Head>
      <HomeView setOpenCreateModal=
        {setOpenCreateModal} />
      <ToolView
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction=
        {setOpenSendTransaction}
        setOpenTokenMetaData=
        {setOpenTokenMetaData}
      />
      <FeatureView
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction=
        {setOpenSendTransaction}
        setOpenTokenMetaData=
        {setOpenTokenMetaData}
      />
      <OfferView />
      <FaqView />
      {openCreateModal && (
        <div className="new_loader relative  h-full [bg-slate-900">
          <CreateView setOpenCreateModal={setOpenCreateModal} />
        </div>
      )}
      {openTokenMetaData && (
        <div className="new_loader relative  h-full bg-slate-900">
          <TokenMetadata setOpenTokenMetaData={setOpenTokenMetaData} />
        </div>
      )}
      {openContact && (
          <div className="new_loader relative  h-full bg-slate-900">
            <ContactView setOpenContact={setOpenContact} />
          </div>
        )}
       {openAirdrop && (
          <div className="new_loader relative  h-full bg-slate-900">
            <AirdropView setOpenAirdrop={setOpenAirdrop} />
          </div>
        )}
        {openSendTransaction && (
          <div className="new_loader relative  h-full bg-slate-900">
            <DonateView setOpenSendTransaction={setOpenSendTransaction} />
          </div>
        )} 
    </>
  )

};

export default Home;