import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity";
import { PageInfo } from "../../typings";

const query = groq`
*[_type == "pageInfo"]`


type Data = {
    pageInfos: PageInfo[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const pageInfos: PageInfo[] = await sanityClient.fetch(query);
    res.status(200).json({ pageInfos });
}