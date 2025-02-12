import { memo, useCallback } from "react";

interface AlertProps {
  onClose: () => void;
  message?: string;
}

const Alert = memo(
  ({ onClose, message = "Nice job! You clicked the button" }: AlertProps) => {
    const handleClose = useCallback(() => {
      onClose();
    }, [onClose]);

    return (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
        aria-live="polite"
      >
        <strong>{message}</strong> Click X to close me :)
        <button
          type="button"
          className="btn-close btn-close-white"
          data-dismiss="alert"
          aria-label="Close"
          onClick={handleClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export default Alert;
