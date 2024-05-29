import useNotificationStore from "../stores/useNotificationStore";

export function notify(newNotification: {
type ?: string;
message: string;
description ?: string;
txid ?: string;
}){
  const {notifications, set: setNotificationStore} = useNotificationStore.getState();
  setNotificationStore((state: {notificatons: any[]}) => {
    state.notificatons = [
      ...notifications,
      { type: "success", ...newNotification },
    ];
  });
}
