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

const DoubleParallaxLayout = ({
  doc,
  authordetails,
  next,
  prev,
  children,
}: any) => {
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

        <header className="header-parallax hover:hover-header">
          <div
            className={`header-parallax-image ${filter}`}
            style={{
              backgroundImage: `url(${
                doc.imageHeader ? doc.imageHeader : doc.cover
              })`,
            }}
          ></div>
          <div className="header-overlay !px-0">
            <div className="h-full flex flex-col justify-center">
              <div className="bg-light-500 dark:bg-dark-500 background-texture py-4 px-3">
                <h5 className="md:text-2xl text-xl font-medium tracking-wide mb-4">
                  <span className="marker-line rounded-sm !py-1 bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500">
                    <DateFormat date={date} fulltimestamp />
                  </span>
                </h5>
                <h1 className="md:text-5xl text-4xl font-extrabold tracking-wide">
                  <span className="marker-line rounded-sm !py-1 bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500">
                    {title}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </header>

        <article
          className={`article-grid prose dark:prose-dark !pb-12 ${typography}-article`}
        >
          {children}
          {doc.gallery && doc.gallery.length > 0 && (
            <>
              <h3 className="text-3xl font-bold rounded-sm bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 mb-4">
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
              <div className="flex gap-4">
                {tags.map((tag: any) => (
                  <Tags key={tag} tag={tag} />
                ))}
              </div>
            </>
          )}
        </article>

        <div className="article-grid">
          <h3 className="text-3xl font-bold rounded-sm bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 mb-4">
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
      </section>
      {(next.document || prev.document) && (
        <div className="main-article">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              {prev.document && (
                <div className="mb-6">
                  <h4 className="text-2xl font-bold tracking-wide mb-4">
                    <span className="marker-line rounded-sm !p-2 bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500">
                      Artigo anterior
                    </span>
                  </h4>
                  <CardBackground
                    document={prev.document}
                    authors={prev.authordetails}
                    isFeatured={false}
                  />
                </div>
              )}
              {next.document && (
                <div className="mb-6">
                  <h4 className="text-2xl font-bold tracking-wide md:text-right mb-4">
                    <span className="marker-line rounded-sm !p-2 bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500">
                      Próximo artigo
                    </span>
                  </h4>
                  <CardBackground
                    document={next.document}
                    authors={next.authordetails}
                    isFeatured={false}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoubleParallaxLayout;
