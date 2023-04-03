interface ProductsProduts {
  params: {
    slug: string;
  };
}

export default function Product({ params }: ProductsProduts) {
  return <h1>Product: {params.slug}</h1>;
}
