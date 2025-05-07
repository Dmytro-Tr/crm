import React from 'react';
import s from './pending-label.module.css';

export interface PendingLabelProps {
  children: React.ReactNode;
}

export default function PendingLabel({ children }: PendingLabelProps) {
  return <span className={s.label}>{children}</span>;
}
