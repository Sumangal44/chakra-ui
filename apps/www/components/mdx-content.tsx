/* eslint-disable jsx-a11y/alt-text */
import {
  Absolute,
  Alert,
  Badge,
  Blockquote,
  Box,
  HStack,
  Kbd,
  Table,
  Tabs,
  Text,
  Timeline,
} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { Children } from "react"
import { LuArrowUpRight } from "react-icons/lu"
import * as runtime from "react/jsx-runtime"
import { Card, CardGroup } from "./card"
import { ComponentGrid } from "./component-grid"
import { Example, ExampleTabs } from "./example"
import { LangIcon } from "./lang-icon"
import { PropTable } from "./prop-table"
import { ResourceIcon } from "./resource-icon"

const sharedComponents = {
  a(props: any) {
    return (
      <Box
        asChild
        css={{
          color: "fg",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          textDecorationThickness: "2px",
          textDecorationColor: "border.muted",
          fontWeight: "500",
        }}
      >
        <Link {...props} />
      </Box>
    )
  },
  blockquote(props: any) {
    return (
      <Blockquote.Root
        {...props}
        css={{
          marginTop: "1.285em",
          marginBottom: "1.285em",
        }}
      />
    )
  },
  img(props: any) {
    return (
      <Box
        asChild
        css={{
          marginTop: "1.7em",
          marginBottom: "1.7em",
          borderRadius: "lg",
          boxShadow: "inset",
        }}
      >
        <Image {...props} />
      </Box>
    )
  },
  p(props: any) {
    return (
      <Box
        as="p"
        color="fg.muted"
        {...props}
        css={{
          marginTop: "1em",
          marginBottom: "1em",
          _first: { marginTop: "0" },
          _last: { marginBottom: "0" },
          "& + .example-tabs": { marginTop: "2em" },
        }}
      />
    )
  },
  h1(props: any) {
    return (
      <Box
        as="h1"
        css={{
          color: "fg",
          fontSize: "2.15em",
          letterSpacing: "-0.02em",
          marginTop: "0",
          marginBottom: "0.8em",
          lineHeight: "1.2em",
          fontWeight: "medium",
          scrollMarginTop: "calc(var(--header-height) + 1.5em)",
        }}
        {...props}
      />
    )
  },
  h2(props: any) {
    return (
      <Box
        as="h2"
        css={{
          color: "fg",
          fontSize: "1.4em",
          letterSpacing: "-0.02em",
          marginTop: "1.6em",
          marginBottom: "0.8em",
          lineHeight: "1.4em",
          fontWeight: "semibold",
          scrollMarginTop: "calc(var(--header-height) + 1.5em)",
          "& code": { fontSize: "0.9em" },
          "& + *": { marginTop: "0" },
          "& a": { font: "inherit!" },
        }}
        {...props}
      />
    )
  },
  h3(props: any) {
    return (
      <Box
        as="h3"
        css={{
          color: "fg",
          fontSize: "1.2em",
          letterSpacing: "-0.01em",
          marginTop: "1.5em",
          marginBottom: "0.4em",
          fontWeight: "semibold",
          lineHeight: "1.5em",
          scrollMarginTop: "calc(var(--header-height) + 1.5em)",
          "& code": { fontSize: "0.9em" },
          "& + *": { marginTop: "0" },
          "& a": { font: "inherit!" },
        }}
        {...props}
      />
    )
  },
  h4(props: any) {
    return (
      <Box
        as="h4"
        css={{
          color: "fg",
          marginTop: "1.4em",
          marginBottom: "0.5em",
          letterSpacing: "-0.01em",
          fontWeight: "semibold",
          lineHeight: "1.5em",
          scrollMarginTop: "calc(var(--header-height) + 1.5em)",
          "& + *": { marginTop: "0" },
          "& a": { font: "inherit!" },
        }}
        {...props}
      />
    )
  },
  kbd(props: any) {
    return <Kbd {...props} />
  },
  pre(props: any) {
    return (
      <Box
        as="pre"
        css={{
          backgroundColor: "bg.muted",
          shadow: "inset",
          marginTop: "1.6em",
          marginBottom: "1.6em",
          borderRadius: "md",
          fontSize: "0.9em",
          paddingBlock: "2em",
          paddingInline: "2em",
          overflowX: "auto",
          fontWeight: "400",
          "& code": {
            bg: "transparent",
            fontSize: "inherit",
            letterSpacing: "inherit",
            borderWidth: "inherit",
            padding: "0",
          },
        }}
        {...props}
      />
    )
  },
  code(props: any) {
    return (
      <Box
        as="code"
        {...props}
        css={{
          fontSize: "0.925em",
          letterSpacing: "-0.01em",
          borderRadius: "md",
          borderWidth: "1px",
          bg: "bg",
          color: "fg",
          whiteSpace: "pre",
          padding: "0.2em 0.4em",
        }}
      />
    )
  },
  ol(props: any) {
    return (
      <Box
        as="ol"
        css={{
          marginTop: "1em",
          marginBottom: "1em",
          paddingInlineStart: "1.5em",
          "& > li": {
            paddingInlineStart: "0.4em",
            listStyleType: "decimal",
            "&::marker": {
              color: "fg.muted",
            },
          },
          "& ol, & ul": {
            marginTop: "0.5em",
            marginBottom: "0.5em",
          },
        }}
        {...props}
      />
    )
  },
  ul(props: any) {
    return (
      <Box
        as="ul"
        css={{
          marginTop: "1em",
          marginBottom: "1em",
          paddingInlineStart: "1.5em",
          "& > li": {
            paddingInlineStart: "0.4em",
            listStyleType: "disc",
            "&::marker": {
              color: "fg.muted",
            },
          },
          "& ol, & ul": {
            marginTop: "0.5em",
            marginBottom: "0.5em",
          },
        }}
        {...props}
      />
    )
  },
  li(props: any) {
    return (
      <Box
        as="li"
        css={{
          marginTop: "0.285em",
          marginBottom: "0.285em",
        }}
        {...props}
      />
    )
  },
  table(props: any) {
    return (
      <Table.Root
        native
        size="sm"
        variant="outline"
        {...props}
        css={{
          marginTop: "2em",
          marginBottom: "2em",
        }}
      />
    )
  },
  steps(props: any) {
    return (
      <Timeline.Root mt="10" mb="6">
        {Children.map(props.children, (child, index) => {
          return (
            <Timeline.Item>
              <Timeline.Separator />
              <Timeline.Indicator rounded="md">{index + 1}</Timeline.Indicator>
              <Timeline.Content
                ps="2"
                pb="10"
                width="full"
                css={{ "& > :is(h3, h4, h5)": { marginTop: "0" } }}
              >
                {child.props.children}
              </Timeline.Content>
            </Timeline.Item>
          )
        })}
      </Timeline.Root>
    )
  },
  callout(props: any) {
    const status = props["data-type"]
    return (
      <Alert.Root variant="outline" status="neutral" ps="6" mt="6" mb="4">
        <Box
          position="absolute"
          h="100%"
          w="2px"
          top="8px"
          maxHeight="calc(100% - 16px)"
          insetStart="2"
          bg={{ base: "gray.500", _dark: "gray.600" }}
        />
        <Alert.Description color="fg">
          <Absolute top="-2" insetStart="2">
            <Badge variant="solid" rounded="0">
              <Alert.Indicator fontSize="xs" color="inherit" />
              {status}
            </Badge>
          </Absolute>
          {props.children.props.children}
        </Alert.Description>
      </Alert.Root>
    )
  },
  "code-group"(props: any) {
    const titles: any[] = []
    const contents: any[] = []
    let firstTitle = ""

    Children.forEach(props.children, (child, index) => {
      const title = child.props["data-title"]
      if (index === 0) firstTitle = title
      titles.push(<Tabs.Trigger value={title}>{title}</Tabs.Trigger>)
      contents.push(
        <Tabs.Content
          value={title}
          mt="-2"
          css={{
            "& pre": { mb: "0" },
          }}
        >
          {child.props.children}
        </Tabs.Content>,
      )
    })

    return (
      <Tabs.Root my="6" size="sm" defaultValue={firstTitle}>
        <Tabs.List>{titles}</Tabs.List>
        {contents}
      </Tabs.Root>
    )
  },
  Example,
  ExampleTabs,
  card(props: any) {
    return (
      <Card title={props.title} href={props.href} icon={props.icon}>
        {props.children}
      </Card>
    )
  },
  "card-group"(props: any) {
    return <CardGroup {...props} />
  },
  Card,
  PropTable,
  ComponentGrid,
  ResourceCard(props: any) {
    const { type, title, url, ...rest } = props
    return (
      <HStack borderWidth="1px" padding="3" borderRadius="md" asChild {...rest}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ResourceIcon type={type} />
          <Text fontWeight="medium" flex="1" color="fg">
            {title}
          </Text>
          <LuArrowUpRight />
        </a>
      </HStack>
    )
  },
  "code-block"(props: any) {
    const { title, lang, children, ...rest } = props
    return (
      <Box
        {...rest}
        data-lang={lang}
        spaceY="0!"
        marginY="1.6em"
        borderWidth="1px"
        rounded="10px"
        borderColor="gray.800"
        css={{
          "& pre.shiki": {
            roundedTop: "0!",
            roundedBottom: "lg!",
            shadow: "none!",
          },
        }}
      >
        <HStack
          bg="#1E1E1E"
          px="4"
          py="3"
          color="gray.300"
          roundedTop="lg"
          borderBottomWidth="1px"
          borderBottomColor="gray.800"
        >
          <LangIcon type={lang} />
          <Text fontSize="xs" fontFamily="mono" fontWeight="semibold">
            {title}
          </Text>
        </HStack>
        {children}
      </Box>
    )
  },
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = (props: MDXProps) => {
  const { code, components = {} } = props
  const Component = useMDXComponent(code)
  return (
    <Box
      css={{
        fontSize: "sm",
        lineHeight: "1.75",
      }}
    >
      <Component components={{ ...sharedComponents, ...components }} />
    </Box>
  )
}
