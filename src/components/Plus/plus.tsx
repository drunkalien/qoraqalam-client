import { useState, ReactNode } from "react";

type PlusProps = {
  children: ReactNode;
};

const Plus = ({ children }: PlusProps) => {
  return <div>{children}</div>;
};

export default Plus;
