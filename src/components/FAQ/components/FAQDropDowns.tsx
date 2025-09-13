import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is TexKart?",
    answer:
      "TexKart is a multi-vendor B2B e-commerce platform specializing in the textile industry, connecting buyers and sellers for seamless transactions.",
  },
  {
    question: "Who can use TexKart?",
    answer:
      "TexKart is a multi-vendor B2B e-commerce platform specializing in the textile industry, connecting buyers and sellers for seamless transactions.",
  },
  {
    question: "How does TexKart work?",
    answer:
      "TexKart is a multi-vendor B2B e-commerce platform specializing in the textile industry, connecting buyers and sellers for seamless transactions.",
  },
  {
    question: "How can I place an order on TexKart?",
    answer:
      "TexKart is a multi-vendor B2B e-commerce platform specializing in the textile industry, connecting buyers and sellers for seamless transactions.",
  },
  {
    question: "Is there a minimum order quantity (MOQ)?",
    answer:
      "TexKart is a multi-vendor B2B e-commerce platform specializing in the textile industry, connecting buyers and sellers for seamless transactions.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "TexKart is a multi-vendor B2B e-commerce platform specializing in the textile industry, connecting buyers and sellers for seamless transactions.",
  },
  {
    question: "What if I receive a damaged or incorrect product?",
    answer:
      "TexKart is a multi-vendor B2B e-commerce platform specializing in the textile industry, connecting buyers and sellers for seamless transactions.",
  },
];

const MotionAccordion = motion(Accordion);
const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const FAQDropDowns: React.FC = () => {
  return (
    <MotionBox
      sx={{ px: { xs: 0, md: 6, lg: 10 }, mb: 6 }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.5 }}
    >
      <MotionBox
        sx={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        {faqs.map((faq, index) => (
          <MotionBox key={index} px={2} variants={itemVariants}>
            <MotionAccordion
              disableGutters
              sx={{
                background: "#FFF",
                boxShadow: "none",
                border: "none",
                margin: 0,
                padding: 0,
                "&:before": { display: "none" },
                borderRadius:
                  index === 0
                    ? "30px 30px 0 0"
                    : index === faqs.length - 1
                    ? "0 0 30px 30px"
                    : "0",
              }}
              variants={itemVariants}
            >
              <AccordionSummary
                expandIcon={
                  <Icon
                    icon="mingcute:down-line"
                    className="text-xl"
                    style={{ color: "#212121" }}
                  />
                }
                sx={{ py: 2 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "18px",
                      md: "18px",
                      lg: "18px",
                    },
                    color: (theme) => theme.palette.text.disabled,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              {faq.answer && (
                <AccordionDetails>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "15px",
                        lg: "15px",
                      },
                      color: (theme) => theme.palette.text.disabled,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              )}
            </MotionAccordion>
            {index !== faqs.length - 1 && (
              <MotionBox px={2} sx={{ display: "block", width: "100%" }}>
                <Divider sx={{ backgroundColor: "#FC8230" }} />
              </MotionBox>
            )}
          </MotionBox>
        ))}
      </MotionBox>
    </MotionBox>
  );
};

export default FAQDropDowns;