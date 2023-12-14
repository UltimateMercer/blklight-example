import { compareDesc } from "date-fns";

import { allArticles } from "contentlayer/generated";
import { allAuthors } from "contentlayer/generated";

export const DOCS_PER_PAGE = 18;
export const pathName = "articles";

export const rawDocuments = allArticles
  .filter((obj: any) => obj.draft === false)
  .sort((a: any, b: any) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

export const getAuthors = () => {
  return allAuthors;
};

export const frontmatter = (doc: any) => {
  return {
    title: doc.title,
    description: doc.description,
    imageHeader: doc.imageHeader,
    cover: doc.cover,
    date: doc.date,
    modifiedDate: doc.modifiedDate,
    channel: doc.channel,
    category: doc.category,
    tags: doc.tags,
    layout: doc.layout,
    filter: doc.filter,
    typography: doc.typography,
    draft: doc.draft,
    authors: doc.authors,
    gallery: doc.gallery,
    slug: doc.slug,
  };
};

export const fetchDocuments = (docs: any) => {
  return docs.map(async (doc: any) => {
    const document = frontmatter(doc);
    const authorList = doc.authors;
    const authorPromise = authorList.map(async (author: any) => {
      const authorResults = await allAuthors.filter(
        (obj: any) => obj.name === author.name
      );
      return authorResults;
    });
    let authordetails = await Promise.all(authorPromise);
    authordetails = authordetails.flat();
    return { document, authordetails };
  });
};

export const initialDisplayDocs = (docs: any, pageNumber: any) => {
  let initialDisplayDocuments;
  if (pageNumber) {
    initialDisplayDocuments = docs.slice(
      DOCS_PER_PAGE * (pageNumber - 1),
      DOCS_PER_PAGE * pageNumber
    );
  } else {
    initialDisplayDocuments = docs.slice(0, DOCS_PER_PAGE);
  }

  return initialDisplayDocuments;
};

export const paginationDocs = (docs: any, pageNumber: any) => {
  return {
    currentPage: pageNumber ? pageNumber : 1,
    totalPages: Math.ceil(docs.length / DOCS_PER_PAGE),
    totalDocs: docs.length,
  };
};

export const getDocuments = async (pageNumber: any) => {
  const documents = await Promise.all(fetchDocuments(rawDocuments));
  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);
  const pagination = paginationDocs(documents, pageNumber);

  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const getDocument = async (params: any) => {
  const allDocuments = await Promise.all(fetchDocuments(rawDocuments));

  const formattedRoute = `/${pathName}/${params.slug.join("/")}`;
  const documentIndex = allDocuments.findIndex(
    (data) => data.document.slug === formattedRoute
  );

  const prev = {
    document: allDocuments[documentIndex + 1]
      ? allDocuments[documentIndex + 1].document
      : null,
    authordetails: allDocuments[documentIndex + 1]
      ? allDocuments[documentIndex + 1].authordetails
      : null,
  };

  const next = {
    document: allDocuments[documentIndex - 1]
      ? allDocuments[documentIndex - 1].document
      : null,
    authordetails: allDocuments[documentIndex - 1]
      ? allDocuments[documentIndex - 1].authordetails
      : null,
  };

  // console.log("Line 111:", prev, next);
  const doc = await rawDocuments.find(
    (obj: any) => obj.slug === formattedRoute
  );

  const authorList = doc?.authors;

  const authorPromise = authorList?.map((author: any) =>
    allAuthors.filter((obj: any) => obj.name === author.name)
  );
  let authordetails = await Promise.all(authorPromise);
  authordetails = authordetails.flat();
  return { props: { doc, authordetails, prev, next } };
};

export const getDocumentsByChannel = async (channel: any, pageNumber: any) => {
  const filteredDocuments = channel
    ? rawDocuments.filter((doc: any) => doc.channel === channel)
    : rawDocuments;

  const documents = await Promise.all(fetchDocuments(filteredDocuments));

  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);

  const pagination = paginationDocs(documents, pageNumber);
  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const getDocumentsByCategory = async (
  category: any,
  pageNumber: any
) => {
  const filteredDocuments = category
    ? rawDocuments.filter((doc: any) => doc.category === category)
    : rawDocuments;

  const documents = await Promise.all(fetchDocuments(filteredDocuments));

  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);

  const pagination = paginationDocs(documents, pageNumber);
  return { props: { documents, initialDisplayDocuments, pagination } };
};

export const getDocumentsByTag = async (tag: any, pageNumber: any) => {
  const filteredDocuments = tag
    ? rawDocuments.filter((doc: any) => doc.tags.includes(tag))
    : rawDocuments;

  const documents = await Promise.all(fetchDocuments(filteredDocuments));

  const initialDisplayDocuments = initialDisplayDocs(documents, pageNumber);

  const pagination = paginationDocs(documents, pageNumber);
  return { props: { documents, initialDisplayDocuments, pagination } };
};
