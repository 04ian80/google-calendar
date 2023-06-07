import { EventHandler, MouseEvent } from 'react';

export type MouseEventType<T = Element> = EventHandler<MouseEvent<T>>;
