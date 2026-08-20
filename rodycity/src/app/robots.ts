import type { MetadataRoute } from "next";


//em resumo a area que defin quais vao ser os useragents prmitidos e oque eles podem visitar (Googlebot, Bingbot e etc
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rody.city/sitemap.xml",
  };
}