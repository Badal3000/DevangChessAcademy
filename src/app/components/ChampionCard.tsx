import Image from "next/image";

export const ChampionCard = ({
    name,
    image,
    description,
}: {
    name: string;
    image: string;
    description: string;
}) => {
    return (
        <div className="card w-70 sm:w-[320px] md:w-72  shadow-md">
            <figure className="h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={360}
                    height={260}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-lg md:text-xl text-black">{name}</h2>
                <p className="text-gray-600 text-sm md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};
