"use client";

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Box, Fab } from '@mui/material';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: { xs: 16, sm: 24 },
                right: { xs: 16, sm: 24 },
                zIndex: 1000,
            }}
        >
            {isVisible && (
                <Fab
                    color="primary"
                    aria-label="scroll to top"
                    onClick={scrollToTop}
                    sx={{
                        background: (theme) => theme.palette.backgroundGradient,
                        color: 'white',
                        transition: 'background 0.5s ease',
                        '&:hover': {
                            background: (theme) => theme.palette.primary.dark,
                        },
                        width: { xs: 48, sm: 56 },
                        height: { xs: 48, sm: 56 },
                    }}
                >
                    <Icon icon="mdi:chevron-up" width={24} height={24} />
                </Fab>
            )}
        </Box>
    );
};

export default ScrollToTop;