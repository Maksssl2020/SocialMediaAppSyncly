import React, { ReactNode } from "react";

type SidebarProps = {
  className?: string;
  children: ReactNode;
};

const Sidebar = ({ className, children }: SidebarProps) => {
  return (
    <aside
      className={`flex h-[calc(100vh-100px)] flex-col px-4 py-8 ${className}`}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
