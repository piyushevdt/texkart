// CustomFabricCard.tsx
import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Chip,
  Box,
  Rating,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Tag {
  id: string;
  label: string;
}

interface CustomFabricCardProps {
  title: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: string;
  tags: Tag[];
  imageUrl: string;
  unit?: string;
  className?: string;
}

const CustomFabricCard: React.FC<CustomFabricCardProps> = ({
  title,
  rating,
  price,
  originalPrice,
  discount,
  tags,
  imageUrl,
  unit = "yarn",
  className = "",
}) => {
  const router = useRouter();
  return (
    <Card
      className={`shadow-md overflow-hidden  ${className}`}
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 15px 25px -3px rgba(0, 0, 0, 0.15)",
        },
        border: "1px solid #D9D9D9",
        borderRadius: "12px",
        width: "100%",
      }}
    >
      <Box className="relative">
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </Box>

      <Box sx={{ px: 2, pt: 2 }}>
        <Box className="flex justify-between items-center mb-2">
          <Typography
            variant="body1"
            component="h2"
            className="text-gray-800 font-medium"
            sx={{
              fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "16px" },
              fontWeight: 400,
            }}
          >
            {title}
          </Typography>

          <Box className="flex items-center">
            <Typography className="mr-1 text-gray-700" variant="body1">
              {rating}
            </Typography>
            <Rating value={1} max={1} readOnly className="text-yellow-400" />
          </Box>
        </Box>

        <Box className="flex flex-wrap gap-2 my-3 " sx={{ my: 2 }}>
          {tags.map((tag) => (
            <Chip
              key={tag.id}
              label={
                <Typography
                  variant="body2"
                  className="text-xs py-0"
                  sx={{ fontSize: "10px", fontWeight: 400 }}
                >
                  {tag.label}
                </Typography>
              }
              size="small"
              variant="outlined"
              sx={{
                color: (theme) => theme.palette.text.secondary,
                borderRadius: "6px",
                border: "1px solid #404040",
              }}
            />
          ))}
        </Box>

        <Box
          className="flex pt-3 border-t border-b border-gray-200  gap-2 justify-between items-center"
        >
          <Box className="flex flex-col">
            {originalPrice && (
              <Typography
                variant="body2"
                className="line-through text-gray-400"
                sx={{ fontSize: "14px", fontWeight: 400, color: "#BFBFBF" }}
              >
                ₹{originalPrice.toLocaleString()}
              </Typography>
            )}
            {discount && (
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                {discount}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
            <Typography
              variant="body1"
              component="span"
              sx={{
                fontSize: "24px",
                fontWeight: 400,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              ₹{price.toLocaleString()}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              / {unit}
            </Typography>
          </Box>
        </Box>
        <Box className="flex justify-center" py={1}>
          <Button
           onClick={() => router.push("/product-details")}
            size="small"
            variant="outlined"
            sx={{
              width: "132px",
              textTransform: "none",
              borderRadius: "9px",
              border: 1,
            }}
          >
            See More
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CustomFabricCard;
