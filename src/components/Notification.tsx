import React, { useEffect, useState } from 'react';
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import useNotificationStore from 'stores/useNotificationStore';
import { useConnection } from '@solana/wallet-adapter-react';
import { useNetworkConfiguration } from 'contexts/NetworkConfigurationProvider';
import NotificationSVG from "./SVG/NotificationSVG";

const NotificationList = () => {
  const { notifications, set: setNotificationStore } = useNotificationStore((s) => s);
  const reversedNotifications = [...notifications].reverse();
  return (
    <div className={`pointer-events-none fixed inset-1 z-20 flex items-end px-4 py-6 sm:p-6`}>
      <div className={`flex flex-col w-full`}>
        {reversedNotifications.map((n, idx) => (
          <Notifications
            key={`${n.message}${idx}`}
            type={n.type}
            message={n.message}
            description={n.description}
            txid={n.txid}
            onHide={() => {
              setNotificationStore((state: any) => {
                const reversedIndex = reversedNotifications.length - 1 - idx;
                state.notifications = [
                  ...notifications.slice(0, reversedIndex),
                  ...notifications.slice(reversedIndex + 1),
                ]
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Notifications = ({ type, message, description, txid, onHide }: any) => {
  const { connection } = useConnection();
  const { networkConfiguration } = useNetworkConfiguration();
  useEffect(() => {
    const id = setTimeout(() => {
      onHide();
    }, 8000);
    return () => {
      clearInterval(id);
    }
  }, [onHide]);
  return (
    <div className='bg-bkg-1 pointer-events-auto z-50 mx-4 mt-2 mb-12 w-full overflow-hidden rounded-md bg-[#0a1023] shadow-lg right-1'>
      <div className='p-4'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            {type === 'success' ? (
              <CheckCircleIcon className='text-success mr-1 h-8 w-8' />
            ) : null}
            {type === 'info' ? (
              <InformationCircleIcon className='text-info mr-1 h-8 w-8' />
            ) : null}
            {type === 'error' ? (
              <XCircleIcon className='error-info mr-1 h-8 w-8' />
            ) : null}
          </div>
          <div className='ml-2 w-0 flex-1 '>
            <div className='font-bold text-fgd-1'>{message}</div>
            {description ? (
              <p className='text-fg-2 mt-0.5 text-sm'>{description}</p>
            ) : null}
            {txid ? (
              <div className='flex flex-row'>
                <a href={`https://explorer.solana.com/tx/` + txid + `?cluster=${networkConfiguration}`} target='_blank' rel='noreferrer' className='link-accent link flex flex-row'>
                  <NotificationSVG />
                  <div className='mx-4 flex'>
                    {txid.slice(0, 8)}....
                    {txid.slice(txid.length - 8)}
                  </div>
                </a>
              </div>
            ) : null}
          </div>
          <div className='ml-4 flex-shrink-0 flex self-start'>
            <button onClick={() => onHide()} className='bg-bkg-2 default-transition text-fgd-3 hover:text-fgd-4 inline-flex rounded-md focus:outline-none'>
              <span className='sr-only'>Close</span>
              <XIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default NotificationList;