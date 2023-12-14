"use client";

import dynamic from "next/dynamic";

import { useMDXComponent } from "next-contentlayer/hooks";
import TOCInline from "./article-related/toc-inline";
import Pre from "./article-related/pre";
import Tags from "@/components/tags";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs-for-articles";

const components = {
  TOCInline,
  pre: Pre,
  Tags,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  wrapper: ({ components, layout, ...rest }: any) => {
    const Layout = dynamic(
      () => import(`@/components/article-layouts/${layout}`)
    );
    return <Layout {...rest} />;
  },
};

export const MDXComponents = ({ layout, code, ...rest }: any) => {
  const Component = useMDXComponent(code);
  return <Component layout={layout} components={components} {...rest} />;
};
