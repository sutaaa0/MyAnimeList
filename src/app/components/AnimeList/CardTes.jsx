import Image from "next/image" 
import Link from "next/link"

const Cardtes = ({title, images, id, type, episodes}) => {
    return (
            <Link href={`/detailsAnime/${id}`} className="cursor-pointer relative flex flex-col items-center text-center justify-center">
                <div className="relative w-full h-auto">
                <Image src={images} alt="..." width={350} height={350} className="w-full max-h-64 object-cover rounded-lg "/>
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black font-bold w-auto h-auto p-2 flex justify-center items-center text-center rounded-md text-white absolute top-0 left-0"><p className="gradasi">Eps. {episodes}</p></div>
                <div className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 font-bold w-auto h-auto p-2 flex justify-center items-center text-center rounded-md text-black absolute bottom-1  right-1"><p>{type}</p></div>
                </div>
                <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
            </Link>
    )
}

export default Cardtes