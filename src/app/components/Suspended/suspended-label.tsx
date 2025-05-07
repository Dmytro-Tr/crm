import React from 'react';
import s from './suspended-label.module.css';

export interface SuspendedLabelProps {
  children: React.ReactNode;
}

export default function SuspendedLabel({ children }: SuspendedLabelProps) {
  return <span className={s.label}>{children}</span>;
}
