"use client";
import { useState } from "react";
import Link from "next/link";
// import { ArticleSEO } from "@/components/SEO";
// import siteMetadata from "@/lib/siteMetadata";
import CardBackground from "@/components/cards/Background";
// import CardHorizontal from "@/components/Cards/Horizontal";

import AuthorInfo from "@/components/article-related/author-info";
// import ScrollTopAndComment from "@/components/ArticleRelated/ScrollTopAndComment";
import DateFormat from "@/components/date-format";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Tags from "@/components/tags";
// import ImageGallery from "@/components/ArticleRelated/ImageGallery";

const FullpageLayout = ({ doc, authordetails, next, prev, children }: any) => {
  const { authors, slug, fileName, date, title, tags } = doc;

  const [filter, setFilter] = useState(() =>
    doc.filter ? doc.filter : "filter-black-white"
  );
  const [typography, setTypography] = useState(() =>
    doc.typography ? `${doc.typography}-article` : ""
  );

  const images = [doc.cover || null, doc.imageHeader || null];

  return (
    <>
      {/* <ArticleSEO
        url={`${siteMetadata.siteUrl}${slug}`}
        canonicalUrl={`${siteMetadata.siteUrl}${slug}`}
        authorDetails={authordetails}
        cover={doc.cover ? doc.cover : doc.imageHeader}
        images={images}
        {...doc}
      /> */}
      <section className="two-column-article">
        {/* <ScrollTopAndComment /> */}
        <div className="info-article">
          <div className="sticky-content hover:hover-header">
            <img
              src={doc.cover ? doc.cover : doc.imageHeader}
              className={`info-article-image ${filter}`}
              alt={`${title} image`}
            />
            <div className="info-article-overlay">
              <div className="flex h-full flex-col justify-end">
                <h5 className="article-meta">
                  <span className="bg-dark-500 p-1 rounded-sm text-light-500">
                    <span className="marker-line">
                      <DateFormat date={date} fulltimestamp />
                    </span>
                  </span>
                </h5>
                <h1 className="md:text-5xl text-3xl font-extrabold tracking-wide mb-2">
                  <span className="marker-line bg-dark-500 !py-1 !px-3 rounded-sm text-light-500">
                    {title}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content-article">
          <div
            className={`tc-article-grid prose !pb-8 dark:prose-dark ${typography}-article`}
          >
            {children}
            {doc.gallery && doc.gallery.length > 0 && (
              <>
                <h3 className="rounded-sm mb-4 bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
                  <span className="marker-line !py-2 !px-3">Galeria:</span>
                </h3>
                {/* <ScrollArea className="h-full w-full p-4">
                  <div className="table min-w-full">
                    <div className="flex gap-5 pb-4">
                      {doc.gallery.map((image, index) => (
                        <ImageGallery key={index} image={image} title={title} />
                      ))}
                    </div>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea> */}
              </>
            )}
            {tags && tags.length > 0 && (
              <>
                <h4 className="text-2xl font-bold mb-4">Tags:</h4>
                <div className="flex gap-2">
                  {tags.map((tag: any) => (
                    <Tags key={tag} tag={tag} />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="tc-article-grid mb-4">
            <h3 className="mb-4 bg-dark-500 rounded-sm text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
              <span className="marker-line !py-2 !px-3">Escrito por:</span>
            </h3>
            {authordetails.map((author: any, index: any) => (
              <AuthorInfo
                key={index}
                author={author}
                quote={authors[index].quote}
              />
            ))}
          </div>
        </div>
      </section>
      {/* {(next.document || prev.document) && (
        <div className="py-8">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 gap-5">
              {prev.document && (
                <div className="mb-6">
                  <h4 className="mb-4 text-2xl font-bold tracking-wide">
                    <span className="marker-line rounded-sm bg-dark-500 !p-2 text-light-500 dark:bg-light-500 dark:text-dark-500">
                      Artigo anterior
                    </span>
                  </h4>
                  <CardHorizontal
                    document={prev.document}
                    authors={prev.authordetails}
                  />
                </div>
              )}
              {next.document && (
                <div className="mb-6">
                  <h4 className="mb-4 text-2xl font-bold tracking-wide md:text-right">
                    <span className="marker-line rounded-sm bg-dark-500 !p-2 text-light-500 dark:bg-light-500 dark:text-dark-500">
                      Próximo artigo
                    </span>
                  </h4>
                  <CardHorizontal
                    document={next.document}
                    authors={next.authordetails}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default FullpageLayout;
