import Image from "next/image";

import CardBackground from "@/components/cards/Background";

import { getDocuments } from "@/services";

async function getData() {
  const docs = await getDocuments(1);
  return docs.props.documents;
}

export default async function Home() {
  const documents = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container-fluid">
        <h1 className="font-bold text-5xl">All New Ultimates</h1>
        <div className="grid grid-cols-2 gap-4">
          {documents.map((frontmatter) => (
            <CardBackground
              key={frontmatter.document.slug}
              document={frontmatter.document}
              authors={frontmatter.authordetails}
              isFeatured={false}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Image
          src="https://i.imgur.com/LLMGR2k.jpg"
          className="filter-cyberpunk-ix w-full h-auto object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          src="https://i.imgur.com/LLMGR2k.jpg"
          className="filter-cyberpunk-v w-full h-auto object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          src="https://i.imgur.com/LLMGR2k.jpg"
          className="filter-cyberpunk-vi w-full h-auto object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          src="https://i.imgur.com/LLMGR2k.jpg"
          className="filter-cyberpunk-vii w-full h-auto object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          src="https://i.imgur.com/LLMGR2k.jpg"
          className="filter-cyberpunk-viii w-full h-auto object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          src="https://i.imgur.com/LLMGR2k.jpg"
          className="filter-dark-red w-full h-auto object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          src="https://i.imgur.com/LLMGR2k.jpg"
          className="filter-purple-red-orange w-full h-auto object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        <Image
          src="https://i.imgur.com/LLMGR2k.jpg"
          className="filter-blue-red-golden w-full h-auto object-cover"
          width={1000}
          height={1000}
          alt=""
        />
        {/* <img
        src="https://i.imgur.com/LLMGR2k.jpg"
        className="filter-cyberpunk-2077 w-full h-auto object-cover"
        alt=""
      /> */}
      </div>
    </main>
  );
}
