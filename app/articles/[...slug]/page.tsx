import { Metadata } from "next";
import { notFound } from "next/navigation";

import { MDXComponents } from "@/components/mdx";
import { getDocument, rawDocuments } from "@/services/index";
import { any } from "zod";
import Image from "next/image";

const DEFAULT_LAYOUT = "fullpage-layout";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface DocProps {
  params: {
    slug: string[];
  };
}

async function getArticleFromParams(params: DocProps["params"]) {
  const slug = params?.slug?.join("/");

  const document = rawDocuments.find((doc) => doc.slugAsParams === slug);

  if (!document) {
    null;
  }

  return document;
}

export async function generateMetadata({
  params,
}: DocProps): Promise<Metadata> {
  const document = await getArticleFromParams(params);

  if (!document) {
    return {};
  }

  // return {
  //   title: document.props.doc?.title,
  //   description: document.props.doc?.description,
  // };
  return {};
}

export async function generateStaticParams(): Promise<DocProps["params"][]> {
  return rawDocuments.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function Article({ params }: any) {
  const data = await getArticleFromParams(params);
  const document = await getDocument(params);
  // const document = data.props.doc;

  if (!data) {
    notFound();
  }

  return (
    <>
      <MDXComponents
        layout={
          document.props.doc?.layout
            ? document.props.doc.layout
            : DEFAULT_LAYOUT
        }
        doc={document.props.doc}
        code={document.props.doc?.body.code}
        authordetails={document.props.authordetails}
        prev={document.props.prev}
        next={document.props.next}
      />
      {/* <div className="container mx-auto">
        <h1 className="text-5xl font-bold">{data.title}</h1>
        <p className="text-lg"> {data.description}</p>
        <img
          src={data.cover ? data.cover : data.imageHeader}
          className="w-full h-80 object-cover mx-auto mt-4"
          alt={`${data.title} image`}
        />
      </div> */}
    </>
  );
}
