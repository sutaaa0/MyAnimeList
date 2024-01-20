/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                hostname : "cdn.myanimelist.net"
            },
            {
                hostname : "images8.alphacoders.com"
            },
            {
                hostname : "www.viu.com"
            },
            {
                hostname : "api.duniagames.co.id"
            },
            {
                hostname :  "avatars.githubusercontent.com" 
            }


        ]
    }
}

module.exports = nextConfig
