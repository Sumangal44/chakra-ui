"use client"

import {
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useCardStyles,
} = createSlotRecipeContext("card")

export { useCardStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface CardRootProps
  extends HTMLChakraProps<"div">,
    SlotRecipeProps<"card">,
    UnstyledProp {}

export const CardRoot = withProvider<HTMLDivElement, CardRootProps>(
  "div",
  "root",
)

////////////////////////////////////////////////////////////////////////////////////

export interface CardBodyProps extends HTMLChakraProps<"div"> {}

export const CardBody = withContext<HTMLDivElement, CardBodyProps>(
  "div",
  "body",
)

////////////////////////////////////////////////////////////////////////////////////

export interface CardHeaderProps extends HTMLChakraProps<"div"> {}

export const CardHeader = withContext<HTMLDivElement, CardHeaderProps>(
  "div",
  "header",
)

////////////////////////////////////////////////////////////////////////////////////

export interface CardFooterProps extends HTMLChakraProps<"div"> {}

export const CardFooter = withContext<HTMLDivElement, CardFooterProps>(
  "div",
  "footer",
)

////////////////////////////////////////////////////////////////////////////////////

export interface CardTitleProps extends HTMLChakraProps<"h2"> {}

export const CardTitle = withContext<HTMLHeadingElement, CardTitleProps>(
  "h3",
  "title",
)

////////////////////////////////////////////////////////////////////////////////////

export interface CardDescriptionProps extends HTMLChakraProps<"p"> {}

export const CardDescription = withContext<
  HTMLParagraphElement,
  CardDescriptionProps
>("p", "description")
