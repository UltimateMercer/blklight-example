"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
// import siteMetadata from "@/lib/siteMetadata";
// import ScrollTopAndComment from "@/components/ArticleRelated/ScrollTopAndComment";
import CardBackground from "@/components/cards/Background";
// import CardBasic from "../Cards/Basic";
import AuthorInfo from "@/components/article-related/author-info";
import DateFormat from "@/components/date-format";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Tags from "@/components/tags";
// import ImageGallery from "@/components/ArticleRelated/ImageGallery";

const BasicLayout = ({ doc, authordetails, next, prev, children }: any) => {
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
      <section className="main-article">
        {/* <ScrollTopAndComment /> */}
        <header className="header-basic">
          <div className="header-basic-content">
            <h5 className="article-meta">
              <span className="marker-line rounded-sm bg-dark-500 !py-1 text-light-500 dark:bg-light-500 dark:text-dark-500">
                <DateFormat date={date} fulltimestamp />
              </span>
            </h5>
            <h1 className="md:text-5xl text-3xl font-extrabold tracking-wide mb-4">
              <span className="marker-line rounded-sm bg-dark-500 !py-1 text-light-500 dark:bg-light-500 dark:text-dark-500">
                {title}
              </span>
            </h1>
          </div>
          <div className="header-basic-container hover:hover-card">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={doc.cover ? doc.cover : doc.imageHeader}
              />
              <source
                media="(min-width: 769px)"
                srcSet={doc.cover ? doc.cover : doc.imageHeader}
              />
              <img
                src={doc.cover ? doc.cover : doc.imageHeader}
                className={`header-basic-container-image ${filter}`}
                alt={`${title} Image`}
              />
              {/* <Image
                src={
                  doc.cover
                    ? doc.cover
                    : doc.imageHeader
                }
                className={`header-basic-container-image ${filter}`}
                width={10000}
                height={10000}
                alt={`${title} Image`}
              /> */}
            </picture>
          </div>
        </header>
        <article
          className={`article-grid prose !pb-12 dark:prose-dark ${typography}-article`}
        >
          {children}
          {doc.gallery && doc.gallery.length > 0 && (
            <>
              <h3 className="mb-4 rounded-sm bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
                <span className="marker-line rounded-sm !py-2 !px-3">
                  Galeria:
                </span>
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
              <div className="flex gap-4">
                {tags.map((tag: any) => (
                  <Tags key={tag} tag={tag} />
                ))}
              </div>
            </>
          )}
        </article>

        <div className="article-grid mb-8">
          <h3 className="mb-4 rounded-sm bg-dark-500 text-3xl font-bold text-light-500 dark:bg-light-500 dark:text-dark-500">
            <span className="marker-line  !py-2 !px-3">Escrito por:</span>
          </h3>
          {authordetails.map((author: any, index: any) => (
            <AuthorInfo
              key={index}
              author={author}
              quote={authors[index].quote}
            />
          ))}
        </div>
      </section>
      {/* {(next.document || prev.document) && (
        <div className="py-8">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {prev.document && (
                <div className="mb-6">
                  <h4 className="mb-4 text-2xl font-bold tracking-wide">
                    <span className="marker-line rounded-sm bg-dark-500 !p-2 text-light-500 dark:bg-light-500 dark:text-dark-500">
                      Artigo anterior
                    </span>
                  </h4>
                  <CardBasic
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
                  <CardBasic
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

export default BasicLayout;
