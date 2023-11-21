import * as React from "react";
import Button from "./Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { PaymentConfirmationProps } from "@/interfaces/App.interface";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PaymentConfirmationBox({
  open,
  onClose,
  details,
}: PaymentConfirmationProps) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Make Payment?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`Your are about to send ${details.price} to ${details.restaurant} restaurant, for ${details.title} delicay of ${details.quantity} qunatity. `}
            <br />
            This operation can't be undone, are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            loading={false}
            onClick={onClose}
            type="secondaryGreen"
            className="ml-2 hover:text-white"
          >
            {"Confirm"}
          </Button>
          <Button
            loading={false}
            onClick={onClose}
            type="secondaryRed"
            className="ml-2 hover:text-white"
          >
            {"Cancel"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
