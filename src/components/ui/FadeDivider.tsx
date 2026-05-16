import React from 'react';

export const FadeDivider = ({ from = "bg-void", to = "bg-surface" }: { from?: string, to?: string }) => (
  <div className={`h-20 w-full bg-gradient-to-b ${from} ${to} pointer-events-none`} />
);
