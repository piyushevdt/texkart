import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Rating,
  IconButton,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  styled,
  useMediaQuery, useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react";
import CustomButton from "@/custom/CustomButton";

// Types
interface ReviewProps {
  id: string;
  retailerName: string;
  rating: number;
  comment: string;
  purchased: string;
  purchaseDate: string;
  helpfulCount: number;
  images?: string[];
  hasSellerReply: boolean;
}

// Styled components
const ReviewCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  border: `1px solid `,
  borderRadius: 10,
  boxShadow: "none",
  background: "#FFF",
}));

const ReviewHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(1),
  color: "#000000",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: "#000000",
  overflowX: "auto",
}));

const ReviewImage = styled("img")({
  height: 120,
  objectFit: "cover",
  borderRadius: 4,
});


// Main component
const ReviewsRatings: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewProps[]>([
    {
      id: "1",
      retailerName: "Shubham Traders",
      rating: 5,
      comment: "Quality fabric and fast delivery. Highly recommended!",
      purchased: "Cotton Fabric – 500m",
      purchaseDate: "Feb 15, 2025",
      helpfulCount: 5,
      images: ["/images/Category4.svg", "/images/Category4.svg"],
      hasSellerReply: true,
    },
    {
      id: "2",
      retailerName: "Shubham Traders",
      rating: 5,
      comment: "Quality fabric and fast delivery. Highly recommended!",
      purchased: "Cotton Fabric – 500m",
      purchaseDate: "Feb 15, 2025",
      helpfulCount: 0,
      hasSellerReply: false,
    },
  ]);

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [currentReview, setCurrentReview] = useState<ReviewProps | null>(null);
  const [editedRating, setEditedRating] = useState<number | null>(null);
  const [editedComment, setEditedComment] = useState<string>("");
  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleEdit = (review: ReviewProps) => {
    setCurrentReview(review);
    setEditedRating(review.rating);
    setEditedComment(review.comment);
    setOpenEditDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenEditDialog(false);
  };

  const handleSaveEdit = () => {
    if (currentReview && editedRating !== null) {
      const updatedReviews = reviews.map((review) =>
        review.id === currentReview.id
          ? { ...review, rating: editedRating, comment: editedComment }
          : review
      );
      setReviews(updatedReviews);
      setOpenEditDialog(false);
    }
  };

  const handleMarkHelpful = (reviewId: string) => {
    const updatedReviews = reviews.map((review) =>
      review.id === reviewId
        ? { ...review, helpfulCount: review.helpfulCount + 1 }
        : review
    );
    setReviews(updatedReviews);
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 800, margin: "0 auto" }}>
      <ReviewHeader sx={{ mb: 1 }}>
        <Typography sx={{color: "#000000",  fontSize: "24px", mb: 2}}>Reviews & Ratings</Typography>
        {/* <Icon icon="mdi:pencil" width={24} height={24} /> */}
      </ReviewHeader>

      {reviews.map((review) => (
        <ReviewCard key={review.id}>
          <CardContent sx={{ color: "#000000" }}>
            <ReviewHeader>
              <Typography
                variant="body2"
                fontWeight={700}
                sx={{ fontSize: { xs: "26px", sm: "28px", md: "28px" } }}
              >
                {review.retailerName} (Retailer)
              </Typography>
              <IconButton onClick={() => handleEdit(review)}>
                <Icon icon="mdi:pencil" width={20} height={20} />
              </IconButton>
            </ReviewHeader>

            <Rating value={review.rating} readOnly precision={1} />

            <Typography
              variant="body2"
              sx={{ my: 1.5, fontSize: { xs: "14px", sm: "22px", md: "22px" } }}
            >
              &quot;{review.comment}&quot;
            </Typography>

            <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}}}>
              <Box
                component="span"
                sx={{
                  // bgcolor: '#F8EAD8',
                  p: 0.5,
                  borderRadius: 1,
                  mr: 1,
                  color: "#000000",
                }}
              >
                <Typography
                  variant="body2"
                  component="span"
                  sx={{
                    fontSize: { xs: "14px", sm: "22px", md: "22px" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    icon="bxs:purchase-tag-alt"
                    inline={true}
                    style={{
                      marginRight: "4px",
                      verticalAlign: "text-bottom",
                      transform: "rotate(-45deg)",
                    }}
                  />
                  Purchased:
                </Typography>
              </Box>
              <Typography
                variant="body2"
                component="span"
                sx={{ fontSize: { xs: "14px", sm: "22px", md: "22px" } }}
              >
                {review.purchased} | <Typography variant="body2" component="span" sx={{ fontSize: { xs: "14px", sm: "22px", md: "22px" }, fontWeight: 600, }}>{review.purchaseDate}</Typography>
              </Typography>
            </Box>

            {review.images && review.images.length > 0 && (
              <ImageContainer>
                {review.images.map((image, index) => (
                  <ReviewImage
                    key={index}
                    src={image}
                    alt={`Review image ${index + 1}`}
                  />
                ))}
              </ImageContainer>
            )}

            <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, mt: 1}}>
              <Box sx={{display: "fex"}}>
              <IconButton
                size="small"
                onClick={() => handleMarkHelpful(review.id)}
              >
                <Icon icon="mdi:thumb-up-outline" width={18} height={18} />
              </IconButton>
              <Typography variant="body2" sx={{ mx: 1, fontSize: { xs: "14px", sm: "22px", md: "22px" }, fontWeight: 700, }}>
                {review.helpfulCount} people found this helpful
              </Typography>
              </Box>
              {review.hasSellerReply && (
                <Typography variant="body2" sx={{ mx: 1, fontSize: { xs: "14px", sm: "22px", md: "22px" }, fontWeight: 700, display: "flex"}}>
                  <span style={{display: isMobile? "none": "block", marginRight: "10px"}}>|</span> Reply from Seller
                </Typography>
              )}
            </Box>
          </CardContent>
        </ReviewCard>
      ))}

      <Dialog
        open={openEditDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="sm"
        PaperProps={{ sx: { backgroundColor: "white" } }}
      >
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Icon icon="mdi:pencil" style={{ marginRight: "8px" }} />
            Edit Review
          </Box>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Typography>Rating:</Typography>
            <Rating
              value={editedRating}
              onChange={(_, newValue) => setEditedRating(newValue)}
              precision={1}
            />
            <TextField
              label="Review"
              multiline
              rows={4}
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            startIcon={<Icon icon="mdi:close" />}
            sx={{borderRadius: "12px"}}
          >
            Cancel
          </Button>
          <CustomButton gradient onClick={handleSaveEdit}  startIcon={<Icon icon="mdi:content-save" />}>Save</CustomButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ReviewsRatings;
