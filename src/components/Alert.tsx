import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Alert = ({ onClick }: Props) => {
  const [show, setShow] = useState(true);

  return ( 
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Nice job! You clicked the button</strong> Click X to close me :)
      <button
        type="button"
        className="close d-inline p-2 bg-dark text-white"
        data-dismiss="alert"
        aria-label="Close"
        aria-describedby="https://getbootstrap.com/docs/4.1/components/alerts/"
        onClick={onClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
