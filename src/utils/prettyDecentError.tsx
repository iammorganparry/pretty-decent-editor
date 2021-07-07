import React from 'react';
import { toast } from 'react-hot-toast';
import { BiError } from 'react-icons/bi';

type PrettyDecentErrorNotificationProps = {
    message: string;
};

export const prettyDecentErrorNotification = ({
    message,
}: PrettyDecentErrorNotificationProps): ReturnType<typeof toast> => {
    return toast.error(message, {
        position: 'top-center',
        icon: <BiError />,
        duration: 5000,
    });
};
