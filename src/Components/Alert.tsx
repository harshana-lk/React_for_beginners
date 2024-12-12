import { ReactNode } from "react";

interface AlertProp {
  children: ReactNode;
  showIt: () => void;
}

function Alert({ children, showIt }: AlertProp) {
  return (
    <div id="liveAlertPlaceholder" className="alert alert-primary">
      {children}
      <button onClick={showIt}>+</button>
    </div>
  );
}

export default Alert;