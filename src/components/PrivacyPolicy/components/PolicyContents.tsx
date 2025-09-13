import {
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function PolicyContents() {
  return (
    <Box>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
              mt: 6,
            }}
          >
            Thank you for visiting TexKart. This privacy policy explains how we
            collect, use, and protect your personal information on our platform.
            Please review this policy carefully before using our website or
            submitting any personal data. By accessing or using TexKart, you
            agree to the practices described in this privacy policy.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            We may update this policy from time to time, and any changes will
            apply to future activities and data collection. We encourage you to
            review this policy periodically to stay informed about how your
            personal information is used and protected.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              fontSize: { xs: "34px", sm: "36px", md: "38px" },
              color: "#000",
              my: 2,
              textTransform: "uppercase",
            }}
          >
            Collection of Information
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            We collect personally identifiable information, such as names,
            postal addresses, email addresses, phone numbers, and business
            details, only when voluntarily submitted by our users. This
            information is primarily used to:
          </Typography>
        </motion.div>

        <List component="ul" sx={{ color: "#353535" }}>
          {[
            "Process orders and transactions",
            "Provide customer support",
            "Improve user experience",
            "Send relevant updates and promotional offers (only with user consent)",
          ].map((text, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: "30px", color: "#353535" }}>
                  <Icon icon="mdi:circle-small" width="24" height="24" />
                </ListItemIcon>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "22px", sm: "24px", md: "24px" } }}
                >
                  {text}
                </Typography>
              </ListItem>
            </motion.div>
          ))}
        </List>
        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            Your information will not be used for any purpose other than
            fulfilling your specific request unless you provide permission for
            additional usage, such as subscribing to our newsletters.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              fontSize: { xs: "34px", sm: "36px", md: "38px" },
              color: "#000",
              my: 2,
              textTransform: "uppercase",
            }}
          >
            Cookies AND TRACKING TECHNOLOGY
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            TexKart uses cookies and tracking technologies to enhance user
            experience and gather analytical data, such as:
          </Typography>
        </motion.div>

        <List component="ul" sx={{ color: "#353535" }}>
          {[
            "Browser type and operating system",
            "Number of visitors and site usage patterns",
            "User preferences for personalized content",
          ].map((text, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: "30px", color: "#353535" }}>
                  <Icon icon="mdi:circle-small" width="24" height="24" />
                </ListItemIcon>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "22px", sm: "24px", md: "24px" } }}
                >
                  {text}
                </Typography>
              </ListItem>
            </motion.div>
          ))}
        </List>
        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            These technologies help us customize the website based on user
            interactions. While cookies do not collect personal information, if
            you have provided identifiable data before, cookies may be linked to
            that information. We may share aggregated tracking data with
            third-party partners for analytics and improvements.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              fontSize: { xs: "34px", sm: "36px", md: "38px" },
              color: "#000",
              my: 2,
              textTransform: "uppercase",
            }}
          >
            Sharing of Information
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            TexKart uses cookies and tracking technologies to enhance user
            experience and gather analytical data, such as:
          </Typography>
        </motion.div>

        <List component="ul" sx={{ color: "#353535" }}>
          {[
            "Browser type and operating system",
            "Number of visitors and site usage patterns",
            "User preferences for personalized content",
          ].map((text, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: "30px", color: "#353535" }}>
                  <Icon icon="mdi:circle-small" width="24" height="24" />
                </ListItemIcon>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "22px", sm: "24px", md: "24px" } }}
                >
                  {text}
                </Typography>
              </ListItem>
            </motion.div>
          ))}
        </List>
        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            These technologies help us customize the website based on user
            interactions. While cookies do not collect personal information, if
            you have provided identifiable data before, cookies may be linked to
            that information. We may share aggregated tracking data with
            third-party partners for analytics and improvements.
          </Typography>
        </motion.div>


        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              fontSize: { xs: "34px", sm: "36px", md: "38px" },
              color: "#000",
              my: 2,
              textTransform: "uppercase",
            }}
          >
            Commitment to Data Security
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            We prioritize the security of your personal information. TexKart
            employs advanced security measures, including encryption and access
            restrictions, to safeguard user data. Only authorized employees and
            service providers who have agreed to confidentiality policies have
            access to this information.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              fontSize: { xs: "34px", sm: "36px", md: "38px" },
              color: "#000",
              my: 2,
              textTransform: "uppercase",
            }}
          >
            Online Advertising & Remarketing
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            TexKart uses Google Analytics Advertising Features to enhance
            marketing strategies. This includes remarketing, which allows us to
            display relevant ads based on your interaction with our website. A
            cookie placed on your device helps us show tailored ads without
            storing or accessing your personal data. You can opt-out of
            remarketing campaigns by adjusting your Google Ad Settings or using
            the Google Analytics Opt-out Browser Add-on.
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              fontSize: { xs: "34px", sm: "36px", md: "38px" },
              color: "#000",
              my: 2,
              textTransform: "uppercase",
            }}
          >
            Policy Updates
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            TexKart reserves the right to modify this privacy policy at any
            time. Any updates will be posted on this page, and changes will
            apply to future interactions only.
            <br />
            If you have any questions or concerns about our Privacy Policy,
            please contact us at:
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            📧{" "}
            <Link
              href="mailto:support@texkart.com"
              sx={{
                color: "#353535",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              support@texkart.com
            </Link>
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "22px", sm: "24px", md: "22px" },
              color: "#353535",
            }}
          >
            📞{" "}
            <Link
              href="tel:+91XXXXXXXXXX"
              sx={{
                color: "#353535",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              +91-XXXXXXXXXX
            </Link>
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
}
