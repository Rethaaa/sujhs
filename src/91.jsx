import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import Polaroid from "./Polaroid";

// Scroll animation
const scroll = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
`;

const ScrollContainer = styled(Box)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "100%",
  padding: "30px",
});

const ScrollContent = styled(Box)(({ isPaused }) => ({
  display: "inline-flex",
  whiteSpace: "nowrap",
  animation: `${scroll} 10s linear infinite`,
  animationPlayState: isPaused ? "paused" : "running",
}));

const polaroids = [
  {
    imageUrl: "./91-1.jpg",
    description: [
      "Adinda Breton",
      "1/26/2010",
      "08211786553",
      "@adinda.breton",
      "adindabreton10@gmail.com",
      "“Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer.” —Oprah Winfrey",
    ],
  },
  {
    imageUrl: "./91-2.jpg",
    description: [
      "Amadea Tirzasinthadewi Sembiring",
      "4/28/2010",
      "08118336228",
      "@aprilamadea",
      "amadeaprilia@gmail.com",
      "“Any star can shine as long as they have the courage to.”",
    ],
  },
];

const allPolaroids = [...polaroids, ...polaroids];

const InfiniteScrollPolaroids = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleOpen = (cardData) => setExpandedCard(cardData);
  const handleClose = () => setExpandedCard(null);

  return (
    <>
      <ScrollContainer>
        <ScrollContent isPaused={isPaused} speed={10}>
          {allPolaroids.map((data, index) => (
            <Polaroid
              key={index}
              imageUrl={data.imageUrl}
              description={data.description}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => handleOpen(data)}
            />
          ))}
        </ScrollContent>
      </ScrollContainer>

      <Dialog open={Boolean(expandedCard)} onClose={handleClose} maxWidth="sm" fullWidth>
        {expandedCard && (
          <>
            <DialogTitle>{expandedCard.description[0]}</DialogTitle>
            <DialogContent>
              <Box
                component="img"
                src={expandedCard.imageUrl}
                alt="Expanded Polaroid"
                sx={{ width: "100%", borderRadius: 2, marginBottom: 2 }}
              />
              {expandedCard.description.map((text, i) => (
                <Typography key={i} variant="body1" gutterBottom>
                  {text}
                </Typography>
              ))}
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default InfiniteScrollPolaroids;
