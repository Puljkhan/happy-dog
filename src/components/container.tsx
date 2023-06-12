import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size: "md" | "sm";
};

const Container = ({ children }: ContainerProps) => {
  return <div className={`container`}>{children}</div>;
};

export default Container;
