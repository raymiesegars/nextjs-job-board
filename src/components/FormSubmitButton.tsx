"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";

export default function FormSubmitButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const {pending} = useFormStatus();

  return(
    <LoadingButton {...props} type="submit" loading={pending} />
  )
}