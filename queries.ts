import { groq } from "next-sanity";

export const allProducts = groq ` *[_type == "product"]`;
export const four  = groq ` *[_type == "product" ][0..3]`;
export const productById = `*[_type == "product" && _id == $id][0]`;
