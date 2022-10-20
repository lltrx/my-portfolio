import { SocialMedia } from "../typings";

export const fetchSocials = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`);

    const data = await res.json()
    const socialMedias: SocialMedia[] = data.socialMedias;


    return socialMedias;

};
