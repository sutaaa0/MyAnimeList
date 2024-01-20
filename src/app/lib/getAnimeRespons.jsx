
export const getAnimeRespons = async (resource, queri) => {
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${queri}`)
        const anime = await response.json()
        return anime
}
