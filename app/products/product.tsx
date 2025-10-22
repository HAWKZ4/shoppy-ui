import { Card, Stack, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { API_URL } from "../common/constants/api";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <Card className="p-4">
      <Stack gap={3}>
        <Typography variant="h4">{product.name}</Typography>
        {product.imageExists && (
          <Image
            src={`${API_URL}/products/${product.id}.jpg`}
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
  );
}
