import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { Icon } from "@iconify/react"; // Import Iconify
import CustomButton from "@/custom/CustomButton";
import { motion } from "framer-motion"; // Import Framer Motion

const videos = [
  {
    title: "The Art of Fashion Blogging: Tips for Aspiring Fashion Influencers",
    description:
      "Fashion blogging blends creativity and influence, allowing bloggers to shape trends and connect with a global audience. Success requires defining a niche, creating a unique voice, investing in quality visuals, and staying consistent. Engaging storytelling, social media presence, and brand partnerships help build a loyal following and monetise influence.",
    videoId: "62-rXriXL3Q",
    thumbnail: "/images/OurLatestVlog1.png",
  },
  { videoId: "62-rXriXL3Q", thumbnail: "/images/OurLatestVlog2.png" },
  { videoId: "62-rXriXL3Q", thumbnail: "/images/OurLatestVlog3.png" },
  { videoId: "62-rXriXL3Q", thumbnail: "/images/OurLatestVlog4.png" },
];

const OurlatestVlog: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        delayChildren: 0.6, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <Box className="max-w-6xl mx-auto py-12 px-4" mt={6}>
      <Typography
        variant="h1"
        sx={{
          color: (theme) => theme.palette.text.secondary,
          fontSize: { xs: "28px", sm: "30px", md: "34px", lg: "36px" },
        }}
      >
        Our Latest Vlogs
      </Typography>

      <Box className="grid grid-cols-1 lg:grid-cols-12 gap-8" mt={4}>
        <Box className="lg:col-span-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card
              className="shadow-lg overflow-hidden"
              sx={{ borderRadius: "12px" }}
            >
              {selectedVideo ? (
                <Box
                  className="relative"
                  sx={{ height: { xs: "250px", sm: "400px", md: "400px" } }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </Box>
              ) : (
                <CardActionArea
                  onClick={() => setSelectedVideo(videos[0].videoId)}
                >
                  <Box className="relative">
                    <CardMedia
                      component="img"
                      image={videos[0].thumbnail}
                      alt="Video Thumbnail"
                      sx={{ height: { xs: "250px", md: "400px" } }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "50%",
                        width: 64,
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        icon="octicon:play-16"
                        color="white"
                        width={96}
                        height={96}
                      />
                    </Box>
                  </Box>
                </CardActionArea>
              )}
            </Card>
          </motion.div>
        </Box>

        <Box className="flex flex-col lg:col-span-7">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Typography
              variant="body1"
              sx={{
                color: (theme) => theme.palette.text.disabled,
                fontSize: { xs: "20px", sm: "22px", md: "24px", lg: "26px" },
              }}
            >
              {videos[0].title}
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.text.disabled,
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px" },
                mt: 4,
              }}
            >
              {videos[0].description}
            </Typography>
            <CustomButton gradient sx={{ width: 150, p: 1, fontSize: "20px", mt: 6 }}>
              Know More
            </CustomButton>
          </motion.div>
        </Box>
      </Box>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Box
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          mt={3}
        >
          {videos.slice(1).map((video, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                className="shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(video.videoId)}
                sx={{ borderRadius: "12px" }}
              >
                <CardActionArea>
                  <Box className="relative">
                    <CardMedia
                      component="img"
                      image={video.thumbnail}
                      alt="Video Thumbnail"
                      sx={{ height: { xs: "180px", md: "250px" } }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "50%",
                        width: 48,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        icon="octicon:play-16"
                        color="white"
                        width={88}
                        height={88}
                      />
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default OurlatestVlog;