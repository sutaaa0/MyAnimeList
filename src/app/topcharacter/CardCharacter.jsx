import Image from "next/image" 
import Link from "next/link"

const AnimeList = ({title, images, id}) => {
    return (
            <Link href={`/detailscaracter/${id}`} className="cursor-pointer flex flex-col items-center text-center justify-center">
                <Image src={images} alt="..." width={350} height={350} className="w-full max-h-64 object-cover rounded-lg "/>
                <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
            </Link>
    )
}

export default AnimeList