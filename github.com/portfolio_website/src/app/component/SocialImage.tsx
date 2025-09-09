import Image from "next/image";
import Link from "next/link";
import { Url } from "url";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SocialImageProps {
    image: string | StaticImport;
    link: string;
    alt: string;
}

export default function SocialImage({ image, link, alt }: SocialImageProps) {
    return (
        <Link href={link} target="_blank">
            <Image
                width="20" height="20"
                src={image} alt={alt} />
        </Link>
    );
}