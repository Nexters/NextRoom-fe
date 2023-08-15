import React from "react";
import SnackBarView from "./SnackBarView";

interface Props {
  open: boolean;
  ment: string;
  handleClose: () => void;
}
export default function SnackBar(props: Props) {


  return <SnackBarView {...props} />;
}
