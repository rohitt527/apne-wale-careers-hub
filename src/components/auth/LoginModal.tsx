
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PhoneLoginForm } from "./PhoneLoginForm";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
};

export const LoginModal = ({ 
  isOpen, 
  onClose,
  title = "Login to Continue",
  description = "Enter your phone number to receive a one-time password",
}: LoginModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <PhoneLoginForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
