import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    const loadNotifications = async () => {
      const response = await api.get('notifications');

      const data = response.data.map(n => ({
        ...n,
        timeDistance: formatDistance(parseISO(n.createdAt), new Date(), {
          addSuffix: true,
          locale: ptBR,
        }),
      }));

      setNotifications(data);
    };

    loadNotifications();
  }, []);

  const handleMarkAsRead = async id => {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(n => (n._id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <Container>
      <Badge onClick={() => setVisible(!visible)} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Mark as read
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
