import { Image } from "next-sanity/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/utils";

interface CoverImageProps {
  image: any;
  priority?: boolean;
  link: string;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <Image
      className="mb-6 shadow-md rounded-lg bg-slate-50 md:w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
      width={2000}
      height={1000}
      alt={source?.alt || ""}
      src={urlForImage(source)?.url() as string}
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "50%" }} />
  );

  return (
    <div className="sm:mx-0 w-full">
      <Link href={props.link}>
        {image}
      </Link>
    </div>
  );
}
