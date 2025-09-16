interface SocialImageProps {
    image: string;
    link: string;
    alt: string;
}

export default function SocialImage({ image, link, alt }: SocialImageProps) {
    return (
        <a href={link} target="_blank">
            <img
                className="size-8"
                src={image} alt={alt} />
        </a>
    );
}