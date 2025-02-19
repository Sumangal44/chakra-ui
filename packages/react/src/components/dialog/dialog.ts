"use client"

import { Dialog as ArkDialog } from "@ark-ui/react/dialog"
import {
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withRootProvider,
  withContext,
  useStyles: useDialogStyles,
} = createSlotRecipeContext("dialog")

export { useDialogStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface DialogRootProps
  extends ArkDialog.RootProps,
    SlotRecipeProps<"dialog">,
    UnstyledProp {
  children: React.ReactNode
}

export const DialogRoot = withRootProvider<DialogRootProps>(ArkDialog.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true },
})

////////////////////////////////////////////////////////////////////////////////////

export interface DialogTriggerProps
  extends HTMLChakraProps<"button", ArkDialog.TriggerBaseProps> {}

export const DialogTrigger = withContext<HTMLButtonElement, DialogTriggerProps>(
  ArkDialog.Trigger,
  "trigger",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogPositionerProps
  extends HTMLChakraProps<"div", ArkDialog.PositionerBaseProps> {}

export const DialogPositioner = withContext<
  HTMLDivElement,
  DialogPositionerProps
>(ArkDialog.Positioner, "positioner", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface DialogContentProps
  extends HTMLChakraProps<"section", ArkDialog.ContentBaseProps> {}

export const DialogContent = withContext<HTMLDivElement, DialogContentProps>(
  ArkDialog.Content,
  "content",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogDescriptionProps
  extends HTMLChakraProps<"p", ArkDialog.DescriptionBaseProps> {}

export const DialogDescription = withContext<
  HTMLDivElement,
  DialogDescriptionProps
>(ArkDialog.Description, "description", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface DialogTitleProps
  extends HTMLChakraProps<"h2", ArkDialog.TitleBaseProps> {}

export const DialogTitle = withContext<HTMLDivElement, DialogTitleProps>(
  ArkDialog.Title,
  "title",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogCloseTriggerProps
  extends HTMLChakraProps<"button", ArkDialog.CloseTriggerBaseProps> {}

export const DialogCloseTrigger = withContext<
  HTMLButtonElement,
  DialogCloseTriggerProps
>(ArkDialog.CloseTrigger, "closeTrigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface DialogBackdropProps
  extends HTMLChakraProps<"div", ArkDialog.BackdropBaseProps> {}

export const DialogBackdrop = withContext<HTMLDivElement, DialogBackdropProps>(
  ArkDialog.Backdrop,
  "backdrop",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogBodyProps extends HTMLChakraProps<"div"> {}

export const DialogBody = withContext<HTMLDivElement, DialogBodyProps>(
  "div",
  "body",
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogFooterProps extends HTMLChakraProps<"footer"> {}

export const DialogFooter = withContext<HTMLDivElement, DialogFooterProps>(
  "div",
  "footer",
)

////////////////////////////////////////////////////////////////////////////////////

export interface DialogHeaderProps extends HTMLChakraProps<"div"> {}

export const DialogHeader = withContext<HTMLDivElement, DialogHeaderProps>(
  "div",
  "header",
)
