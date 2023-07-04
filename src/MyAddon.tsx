import React from "react";
import { registerVevComponent } from "@vev/react";

type Props = {
  className: string;
  children: React.ReactNode;
};

const MyAddon = ({ className, children  }: Props) => {
  return (
    <div className={className} style={{filter: 'grayscale(1)'}}>
      {children}
    </div>
  );
};

registerVevComponent(MyAddon, {
  name: "My Addon",
  type: 'action',
});

export default MyAddon;
