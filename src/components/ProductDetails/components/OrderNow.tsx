import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Grid,
  Rating,
  Button,
  Chip,
  IconButton,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CustomButton from "@/custom/CustomButton";
import { useRouter } from "next/navigation";

interface ColorOption {
  id: number;
  imageUrl: string;
}

interface WidthOption {
  value: string;
  label: string;
}

interface ThumbnailImage {
  id: number;
  imageUrl: string;
}

interface DetailItem {
  label: string;
  value: string;
}

const OrderNow: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const thumbnails: ThumbnailImage[] = [
    { id: 1, imageUrl: "/images/details1.svg" },
    { id: 2, imageUrl: "/images/details2.png" },
    { id: 3, imageUrl: "/images/details3.png" },
    { id: 4, imageUrl: "/images/details4.png" },
    { id: 5, imageUrl: "/images/details4.png" },
  ];

  const [favorite, setFavorite] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<number>(3);
  const [selectedWidth, setSelectedWidth] = useState<string>('70"');
  const [activeImageId, setActiveImageId] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(
    thumbnails[0].imageUrl
  );

  const colorOptions: ColorOption[] = [
    { id: 1, imageUrl: "/images/details4.svg" },
    { id: 2, imageUrl: "/images/details4.svg" },
    { id: 3, imageUrl: "/images/details4.svg" },
    { id: 4, imageUrl: "/images/details4.svg" },
    { id: 5, imageUrl: "/images/details4.svg" },
  ];

  const widthOptions: WidthOption[] = [
    { value: '50"', label: '50"' },
    { value: '60"', label: '60"' },
    { value: '70"', label: '70"' },
    { value: '120"', label: '120"' },
  ];

  const details: DetailItem[] = [
    { label: "Yarn Type", value: "Bind" },
    { label: "Yarn Quality", value: "Pure" },
    { label: "Yarn Origin", value: "South" },
    { label: "Technique", value: "Machine" },
    { label: "Twist Type", value: "Double" },
    { label: "Composition", value: "Pure" },
  ];

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleColorSelect = (id: number) => {
    setSelectedColor(id);
  };

  const handleWidthSelect = (width: string) => {
    setSelectedWidth(width);
  };

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleThumbnailClick = (thumb: ThumbnailImage) => {
    setActiveImageId(thumb.id);
    setActiveImage(thumb.imageUrl);
  };

  return (
    <Box className="max-w-6xl mx-auto p-4">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box className="relative">
            <Card
              elevation={0}
              className="border border-gray-200  overflow-hidden"
              sx={{ borderRadius: "12px" }}
            >
              <CardMedia
                component="img"
                image={activeImage}
                alt="Swiss 2x2 Sheer Cotton Voile"
                className="w-full object-cover transition-all duration-300 hover:scale-105"
                sx={{ height: { xs: 300, sm: 400, md: 500 } }}
              />
              <IconButton
                onClick={toggleFavorite}
                aria-label="add to favorites"
                sx={{ position: "absolute", top: 0 }}
              >
                <Icon
                  icon={favorite ? "mdi:heart" : "mdi:heart-outline"}
                  className={favorite ? "text-red-500" : "text-white-600"}
                  width="30"
                  height="30"
                />
              </IconButton>
              <Chip
                label="In Stock"
                color="error"
                size="small"
                className="absolute top-2 right-2"
              />
            </Card>

            <Box
              className="flex mt-3 space-x-2 overflow-x-auto pb-2"
              sx={{ gap: 1, display: "flex", mt: 2 }}
            >
              {thumbnails.map((thumb) => (
                <Box
                  key={thumb.id}
                  component="img"
                  src={thumb.imageUrl}
                  alt={`Thumbnail ${thumb.id}`}
                  className="w-22 h-22 cursor-pointer border-3 hover:border-blue-500 transition-all duration-200"
                  sx={{
                    borderColor:
                      thumb.id === activeImageId ? "#000" : "#e5e7eb",
                    opacity: thumb.id === activeImageId ? 1 : 0.7,
                    borderRadius: "12px",
                  }}
                  onClick={() => handleThumbnailClick(thumb)}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: { xs: 1, sm: 4 }, my: 5 }}>
            <Button
            onClick={() => router.push("/cart")}
              variant="outlined"
              startIcon={
                <Icon
                  icon="fa6-solid:cart-arrow-down"
                  style={{
                    width: isMobile ? "18px" : "30px",
                    height: isMobile ? "18px" : "30px",
                  }}
                />
              }
              sx={{
                borderRadius: "9px",
                width: { xs: "50%", sm: "45%" },
                textTransform: "none",
                border: 2,
                fontSize: { xs: "15px", sm: "30px", md: "20px", lg: "30px" },
              }}
            >
              Add to Cart
            </Button>
            <CustomButton
             onClick={() => router.push("/cart")}
              gradient
              startIcon={
                <Icon
                  icon="mdi:truck-delivery-outline"
                  style={{
                    width: isMobile ? "18px" : "30px",
                    height: isMobile ? "18px" : "30px",
                  }}
                />
              }
              sx={{
                borderRadius: "9px",
                width: { xs: "50%", sm: "45%" },
                fontSize: { xs: "15px", sm: "30px", md: "20px", lg: "30px" },
              }}
            >
              Order Now
            </CustomButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ color: "#05004E" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "28px", sm: "30px", md: "34px", lg: "36px" },
              }}
            >
              Swiss 2x2 Sheer Cotton Voile
            </Typography>

            <Box className="flex items-center gap-7 mt-1 mb-4">
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "12px", sm: "18px", md: "20px", lg: "22px" },
                }}
              >
                HSN Code: #234052
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {" "}
                <Rating
                  value={3.2}
                  precision={0.1}
                  readOnly
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "22px",
                    },
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                      md: "16px",
                    },
                    color: "#8E86FF",
                  }}
                >
                  (200 reviews)
                </Typography>
              </Box>
            </Box>

            <Box className="border border-#000000-400" sx={{ mr: 1, my: 2 }}>
              <Grid container>
                {details.map((item, index) => (
                  <Grid
                    item
                    xs={4}
                    key={index}
                    className={`border border-#000000-400 p-4 text-center ${
                      index >= 3 ? "border-t-1" : ""
                    }`}
                    sx={{ py: 1 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontSize: { xs: "12px", sm: "18px" } }}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: { xs: "16px", sm: "22px" } }}
                    >
                      {item.value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box className="mb-6">
              <Box className="flex justify-between items-center mb-2">
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "16px", sm: "20px" } }}
                >
                  Description
                </Typography>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<Icon icon="mdi:eye" height="11" width="11" />}
                  sx={{
                    color: "#05004E",
                    borderColor: "#05004E",
                    // "&:hover": {
                    //   backgroundColor: "#05004E",
                    //   color: "#fff",
                    // },
                    textTransform: "none",
                    fontSize: "11px",
                    borderRadius: "12px",
                  }}
                >
                  View more
                </Button>
              </Box>
              <Box ml={1}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "16px", sm: "18px" } }}
                >
                  Content: 100% Cotton
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "16px", sm: "18px" } }}
                >
                  Width: 57/58 inches
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "16px", sm: "18px" } }}
                >
                  Weight: 70 GSMh
                </Typography>
              </Box>
            </Box>

            <Box className="mb-6">
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "16px", sm: "20px" } }}
              >
                Color Options
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Box sx={{ display: "flex", gap: 1, overflowX: "auto" }}>
                  {colorOptions.map((color) => (
                    <Box
                      key={color.id}
                      component="img"
                      src={color.imageUrl}
                      alt={`Color ${color.id}`}
                      className="w-22 h-22 cursor-pointer border-3 hover:border-black transition-all duration-200 rounded-[12px]"
                      sx={{
                        borderColor:
                          color.id === selectedColor ? "#000" : "#e5e7eb",
                      }}
                      onClick={() => handleColorSelect(color.id)}
                    />
                  ))}
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      width: "88px",
                      color: "#05004E",
                      border: "3px solid #666666",
                      // "&:hover": {
                      //   backgroundColor: "#05004E",
                      //   color: "#fff",
                      // },
                      textTransform: "none",
                      borderRadius: "12px",
                    }}
                  >
                    View more
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box my={1}>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "16px", sm: "20px" } }}
              >
                Width
              </Typography>
              <Box className="flex flex-wrap gap-2">
                {widthOptions.map((option) => (
                  <Chip
                    key={option.value}
                    label={option.label}
                    onClick={() => handleWidthSelect(option.value)}
                    color={
                      selectedWidth === option.value ? "primary" : "default"
                    }
                    variant={
                      selectedWidth === option.value ? "filled" : "outlined"
                    }
                    sx={{
                      backgroundColor:
                        selectedWidth === option.value
                          ? "#000000"
                          : "transparent",
                      color:
                        selectedWidth === option.value ? "#ffffff" : "#000000",
                      "&:hover": {
                        backgroundColor:
                          selectedWidth === option.value
                            ? "#333333"
                            : "#f0f0f0",
                      },
                      borderRadius: "12px",
                      border: "2px solid #000000",
                    }}
                  />
                ))}
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box className="flex justify-between mb-6" mb={1}>
              <Box className=" mb-1">
                <Typography
                  variant="body2"
                  className="text-orange-500 font-bold mr-2"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "24px" },
                    fontWeight: 600,
                    color: "#FC7D31",
                  }}
                >
                  25% off
                </Typography>
                <Box sx={{ display: "flex", alignItems: "baseline" }}>
                  <Typography
                    variant="body2"
                    className="text-gray-500 line-through"
                    sx={{ fontSize: { xs: "14px", sm: "18px", md: "20px" } }}
                  >
                    ₹1,200
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "14px", sm: "18px", md: "24px" } }}
                  >
                    ₹1,000/unit
                  </Typography>
                </Box>
              </Box>
              <Box className="">
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "14px", sm: "18px", md: "20px" } }}
                >
                  Total Price
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "16px", sm: "24px", md: "28px" } }}
                >
                  ₹2.4 Lakhs
                </Typography>
              </Box>
            </Box>

            <Box className="flex flex-wrap items-center mb-6 space-x-4 gap-4">
              <Typography variant="body1">Unit Quantity</Typography>
              <Typography
                variant="body2"
                sx={{
                  borderRadius: "12px",
                  border: "1px solid #CCCCCC",
                  px: 1.5,
                  py: 1.2,
                  // background: "#CCCCCC",
                  color: "#595959",
                }}
              >
                1 bag - 60kg
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  size="small"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  sx={{
                    px: 2,
                    borderRadius: "12px",
                    border: "1.5px solid #CCCCCC",
                    background: "#F2F2F2",
                  }}
                >
                  <Icon icon="mdi:minus" width="20" height="20" />
                </IconButton>
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  <input
                    value={quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      if (!isNaN(newQuantity)) {
                        setQuantity(newQuantity >= 1 ? newQuantity : 1); 
                      }
                    }}
                    min="1"
                    style={{
                      width: "80px",
                      textAlign: "center",
                      borderRadius: "12px",
                      border: "1.5px solid #CCCCCC",
                      padding: "8px 30px 8px 8px",
                      fontSize: "16px",
                      appearance: "none", 
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none", 
                      color: "#595959",
                      fontSize: "14px",
                    }}
                  >
                    bag
                  </Typography>
                </Box>
                <IconButton
                  size="small"
                  onClick={() => handleQuantityChange(1)}
                  sx={{
                    px: 2,
                    borderRadius: "12px",
                    border: "1.5px solid #CCCCCC",
                    background: "#F2F2F2",
                  }}
                >
                  <Icon icon="mdi:plus" width="20" height="20" />
                </IconButton>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box>
              <Typography variant="body1" mb={2}>
                Buy More & Save More
              </Typography>
              <Grid container spacing={2}>
                {[
                  { qty: 2, price: "3,640", discount: "25%" },
                  { qty: 3, price: "3,611", discount: "36%" },
                  { qty: 4, price: "3,568", discount: "45%" },
                ].map((option) => (
                  <Grid item xs={12} sm={4} key={option.qty}>
                    <Box
                      className=" p-3 text-center transition-all duration-200 cursor-pointer"
                      sx={{
                        border: "2px solid #666666",
                        borderRadius: "12px",
                        p: 1,
                        transition: "box-shadow 0.2s ease-in-out",
                        "&:hover": {
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                    >
                      <Typography variant="body1">Qty {option.qty}</Typography>
                      <Typography variant="body1">
                        ₹{option.price}
                        <Typography component="span" variant="body2">
                          /pc
                        </Typography>
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#0A730D", fontSize: "14px" }}
                      >
                        {option.discount} off
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderNow;
