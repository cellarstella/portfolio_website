import Image from "next/image";

interface SocialImageProps {
    image: string;
    link: string;
    alt: string;
}

export default function SocialImage({ image, link, alt }: SocialImageProps) {
    return (
        <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-700/50 hover:bg-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 group"
        >
            <Image
                className="size-6 group-hover:scale-110 transition-transform duration-300"
                src={image} 
                alt={alt}
                width={24}
                height={24}
            />
        </a>
    );
}