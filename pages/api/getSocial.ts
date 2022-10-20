import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";
import { SocialMedia } from "../../typings";

const query = groq`
*[_type == "socialMedia"]`


type Data = {
    socialMedias: SocialMedia[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const socialMedias: SocialMedia[] = await sanityClient.fetch(query);
    res.status(200).json({ socialMedias });
}