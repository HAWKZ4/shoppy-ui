"use client";

import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { getProductImage } from "./product-image";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();
  return (
    <CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
      <Card className="p-4">
        <Stack gap={3}>
          <Typography variant="h4">{product.name}</Typography>
          {product.imageExists && (
            <Image
              src={getProductImage(product.id)}
              alt={product.name}
              // This combination gives a responsive image that scales perfectly across breakpoints
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          )}
          <Typography>{product.description}</Typography>
          <Typography>${product.price}</Typography>
        </Stack>
      </Card>
    </CardActionArea>
  );
}
