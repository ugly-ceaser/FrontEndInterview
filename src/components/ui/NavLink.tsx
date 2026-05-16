import React from 'react';

export const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={href} className="nav-link text-sm font-medium" onClick={onClick}>
    {children}
  </a>
);
