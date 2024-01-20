import Link from "next/link";
import Search from "../components/search/page";

const LayoutHeader = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="lg:w-[1200px] p-2 w-full sm:w-[600px] flex justify-center items-center text-center mt-[80px]">
        <h1 className="font-bold text-3xl lg:text-5xl">MyAnimeList - Sumber Utama untuk Mengetahui dan Mencatat Anime </h1>
      </div>
      <div className=" flex justify-center items-center text-center w-full p-2 sm:w-[600px] lg:w-[1200px] mt-8 text-sm leading-6">
        <p>
        MyAnimeList - Sumber Utama untuk Mengetahui dan Mencatat Anime dan Manga MyAnimeList adalah situs internet atau website yang menyediakan database dengan ribuan judul anime dan manga. MyAnimeList menampilkan informasi lengkap tentang anime dan manga, seperti genre, sinopsis, karakter, staf, rating, ulasan, dan rekomendasi. Di Indonesia, pecinta anime dan manga memiliki keuntungan besar karena mereka bisa menggunakan MyAnimeList untuk mengatur dan menilai anime dan manga yang mereka tonton dan baca. MyAnimeList juga merupakan jejaring sosial yang memungkinkan pengguna untuk berinteraksi dengan sesama penggemar anime dan manga, baik melalui forum, klub, atau pesan pribadi.
        </p>
      </div>
      <div className="mt-6 ">
        <Search />
      </div>
    </div>
  );
};

export default LayoutHeader;
