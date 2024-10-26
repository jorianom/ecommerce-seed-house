import { Products } from "@/src/components/ads/Products";
import { CardCategorie } from "../components/products/CardCategorie";
import { products } from "./products/page";



const categories = [{
  "title": "Semillas",
  "id": "68819290-d4b6-4a29-ba1f-7505065e0664",
  "image": "https://picsum.photos/200/200?random",
  "alt": "Bacitracin Zinc",
  "slug": "semillas"
}, {
  "title": "Fertiliazantes",
  "id": "1675f317-c9f8-431b-8de0-90f43c3fa521",
  "image": "https://picsum.photos/200/200?random",
  "alt": "Lidocaine Hydrochloride",
  "slug": "fertilizantes"
}, {
  "title": "Macetas",
  "id": "fa8fd79c-484e-4099-8965-0939966336f7",
  "image": "https://picsum.photos/200/200?random",
  "alt": "VALACYCLOVIR HYDROCHLORIDE",
  "slug": "macetas"
}, {
  "title": "Importado",
  "id": "58dc17b8-3633-4284-84ca-a00297b3e0dd",
  "image": "https://picsum.photos/200/200?random",
  "alt": "Nitrous Oxide",
  "slug": "importado"
}, {
  "title": "Semillas",
  "id": "ce64c699-dbb2-4388-953f-d54443874abe",
  "image": "https://picsum.photos/200/200?random",
  "alt": "Jute",
  "slug": "semillas"
}, {
  "title": "frutas",
  "id": "e539021d-5b9b-46c5-9026-72d789ed29b0",
  "image": "https://picsum.photos/200/200?random",
  "alt": "H-E-B Skin Corrective Innovative Skin Perfector BB Broad Spectrum SPF15 Sunscreen Medium/Deep",
  "slug": "frutas"
}, {
  "title": "cereales",
  "id": "7b5ad58f-f148-451f-9cfc-4f9b5a68776c",
  "image": "https://picsum.photos/200/200?random",
  "alt": "CARDIGAN",
  "slug": "cereales"
}, {
  "title": "verduras",
  "id": "a98bb773-d58b-4d65-b8df-32556a7b228d",
  "image": "https://picsum.photos/200/200?random",
  "alt": "Oratox",
  "slug": "verduras"
}, {
  "title": "legumbres",
  "id": "162f5723-319e-4bb8-b68a-59a47d5c6f76",
  "image": "https://picsum.photos/200/200?random",
  "alt": "Magnesium Sulfate",
  "slug": "legumbres"
}]

export default function Home() {
  return (
    <main className="">
      {/* <AdsCarousel /> */}
      <CardCategorie item={categories} />
      {/* <ImageCarousel /> */}
      <Products label="Productos Populares" list={products} />
    </main>
  );
}
