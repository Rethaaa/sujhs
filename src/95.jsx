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
  animation: `${scroll} 40s linear infinite`,
  animationPlayState: isPaused ? "paused" : "running",
}));

const polaroids = [
  {
    imageUrl: "./95-1.jpg",
    description: [
      "Alexandra Nicole Natalie Ang Gunadi",
      "9 Januari 2011",
      "08161981119",
      "@nii_nattt",
      "nicolegunadi10@gmail.com",
      "“Funny how present turns past.”",
    ],
  },
  {
    imageUrl: "./95-2.jpg",
    description: [
      "Amaria Taruli Poerba",
      "2 Maret 2010",
      "081388224691",
      "@riqlix_",
      "amariapoerba@gmail.com",
      "“In the end we only regret the chances we didn't take.”",
    ],
  },
  {
    imageUrl: "./95-3.jpg",
    description: [
      "Anastasia Maharani Hermanto Putri",
      "26 April 2010",
      "081282168867",
      "@anasmhrni_",
      "anasmaharani@gmail.com",
      "“Carpe Diem. Seize the day.”",
    ],
  },
  {
    imageUrl: "./95-4.jpg",
    description: [
      "Anastasia Nadia Ivanna Putri",
      "12 April 2010",
      "0818120410",
      "@nadivnnas",
      "anastasianadia5831@gmail.com",
      "“Seek beauty in the ordinary.”",
    ],
  },
  {
    imageUrl: "./95-5.jpg",
    description: [
      "Arini Jovita Mora Mirani SIlalahi",
      "4 Desember 2009",
      "081213123199",
      "@j0vit4mra",
      "sarinijovitamoramirani@gmail.com",
      "“Pain is inevitable, misery is a choice.”",
    ],
  },
  {
    imageUrl: "./95-6.jpg",
    description: [
      "Aubrey Olivia Arifin",
      "22 November 2009",
      "08111702545",
      "@cecilia._.fl0wer",
      "aubrey.arifin@gmail.com",
      "“.”",
    ],
  },
  {
    imageUrl: "./95-7.jpg",
    description: [
      "Aureen Caitlyn Japutra",
      "15 Juli 2010",
      "081318088800",
      "@aureencaitlynj",
      "aureencaitlyn@gmail.com",
      "“Never Stop Learning because Life Never Stops Teaching.”",
    ],
  },
  {
    imageUrl: "./95-8.jpg",
    description: [
      "Aurelia Abrielle",
      "23 November 2009",
      "08119775678",
      "@oddaaaa_",
      "splishsplashsp@gmail.com",
      "“Park that car, drop that phone, sleep on the floor, think about me.”",
    ],
  },
  {
    imageUrl: "./95-9.jpg",
    description: [
      "Aurelia Amber Budyarto",
      "26 Desember 2009",
      "087868504568",
      "@aurelia_aab",
      "aureliaab26@gmail.com",
      "“But if it's forever, it's even better.”",
    ],
  },
  {
    imageUrl: "./95-10.jpg",
    description: [
      "Beatrice Cleodora Wanasti",
      "24 Mei 2010",
      "081380063614",
      "@cleod0r3",
      "beatrice.cleodora10@gmail.com",
      "“If you can dream it, you can do it.”",
    ],
  },
  {
    imageUrl: "./95-11.jpg",
    description: [
      "Bennedicta Christabel Hartawan",
      "2 Juli 2010",
      "081517223002",
      "@chrys._.bell",
      "bennedictachristabelh@gmail.com",
      "“Life is more than just work, you must find any joy in the results.”",
    ],
  },
  {
    imageUrl: "./95-12.jpg",
    description: [
      "Bunga Alexandra Connie Judana",
      "25 Februari 2010",
      "089530204344",
      "@xa444____",
      "alexajjudana@gmail.com",
      "“If i could, i swear i'd go back.”",
    ],
  },
  {
    imageUrl: "./95-13.jpg",
    description: [
      "Castalia Nicole Gracia",
      "9 Februari 2010",
      "08118102424",
      "@arthkespeago",
      "c.nicolegracia@gmail.com",
      "“Be proud of your beliefs—and your fashion sense!.”",
    ],
  },
  {
    imageUrl: "./95-14.jpg",
    description: [
      "Celestine Aiko Erdest",
      "6 April 2010",
      "085210583008",
      "@celestineerdest",
      "celestineaikoerdest@gmail.com",
      "“Keep your face always toward the sunshine and shadows will fall behind you.”",
    ],
  },
  {
    imageUrl: "./95-15.jpg",
    description: [
      "Fathia Kayla Ismail",
      "30 Juli 2010",
      "08551189819",
      "@fathiakay",
      "fathia.k.ismail@gmail.com",
      "“What, like it's hard?.”",
    ],
  },
  {
    imageUrl: "./95-16.jpg",
    description: [
      "Felice Bunyamin",
      "30 April 2010",
      "081292926343",
      "@shovfell",
      "felicebunyamin@gmail.com",
      "“You can never be overeducated.”",
    ],
  },
  {
    imageUrl: "./95-17.jpg",
    description: [
      "Gabrielle Becanessy Yap",
      "29 Juni 2010",
      "087738311058",
      "@gbyyy.09",
      "gabrielleyap29@gmail.com",
      "“Sometimes people still treats you the same even though you've changed.”",
    ],
  },
  {
    imageUrl: "./95-18.jpg",
    description: [
      "Imelda Melani Ratri",
      "13 Mei 2010",
      "081210854951",
      "@imeldamratri",
      "imr13010@gmail.com",
      "“Better to fail than never to try at all.”",
    ],
  },
  {
    imageUrl: "./95-19.jpg",
    description: [
      "Jacinta Olive Weningjayanti",
      "1 Feb 2010",
      "085697236005",
      "@jacintaolivee_",
      "jacintaolive@smp.santaursulajakarta.sch.id",
      "“Reality is more cruel than our imagination, but we are stronger than the person we imagine ourselves to be.”",
    ],
  },
  {
    imageUrl: "./95-20.jpg",
    description: [
      "Jemima Naomi Pandiangan",
      "14 Dec 2009",
      "08111563511",
      "@irenealtactv",
      "irenemlxn@gmail.com",
      "“Those who can receive, can learn to share the fortune to those in need.”",
    ],
  },
  {
    imageUrl: "./95-21.jpg",
    description: [
      "Jesica Sieman",
      "9 Agust 2010",
      "087789916388",
      "@jesicasieman",
      "jesicasieman@gmail.com",
      "“Create meaning in life & do your best for God.”",
    ],
  },
  {
    imageUrl: "./95-22.jpg",
    description: [
      "Joanna Natasha Aryanto",
      "3 Jan 2010",
      "081210061391",
      "@jo_qnnz",
      "natasha.aryanto@gmail.com",
      "“There’s beauty in the struggle and ugliness in the success.”",
    ],
  },
  {
    imageUrl: "./95-23.jpg",
    description: [
      "Judith Amanda Benetta Bestari",
      "28 Jan 2010",
      "08118689213",
      "@___judithhamanda",
      "mandajdth@gmail.com",
      "“.”",
    ],
  },
  {
    imageUrl: "./95-24.jpg",
    description: [
      "Kathleen Olivia Halim",
      "16 Apr 2010",
      "085885312983",
      "kootoo_030",
      "@limxiaowei.416@gmail.com",
      "",
      "“.”",
    ],
  },
  {
    imageUrl: "./95-25.jpg",
    description: [
      "Kaylee Madeline Kurniawan",
      "7 Jul 2010",
      "08119101072",
      "@_vallerst",
      "kyleemadylin@gmail.com",
      "“.”",
    ],
  },
  {
    imageUrl: "./95-26.jpg",
    description: [
      "Kelly Kirana Setiawan",
      "28 Mar 2011",
      "08119002803",
      "@kelly.kirana",
      "kelly.kirana@gmail.com",
      "“Your energy is yours, and mine is mine.”",
    ],
  },
  {
    imageUrl: "./95-27.jpg",
    description: [
      "Kimaya Chris",
      "26 Nov 2009",
      "081282185567",
      "@kimayahutapea",
      "kimayachris@gmail.com",
      "“I'm a star, how could I not shine?”",
    ],
  },
  {
    imageUrl: "./95-28.jpg",
    description: [
      "Marilyn Kayla Laurence",
      "19 Apr 2010",
      "0811970798",
      "@mariilynkayla",
      "marilynkayla2010@gmail.com",
      "“You dont have to be great to start but you have to start to be great.”",
    ],
  },
  {
    imageUrl: "./95-29.jpg",
    description: [
      "Michelle Ellis Djumadi",
      "3 Nov 2010",
      "085186400311",
      "@michelledjumadi",
      "michelle.e.djumadi@gmail.com",
      "“Let loose, we only live for a little while. In hindsight, we’ll die anyways. Seize the day!”",
    ],
  },
  {
    imageUrl: "./95-30.jpg",
    description: [
      "Natasha Shelley",
      "14 Juni 2010",
      "081298290314",
      "@natash_shelley14",
      "natashashelly1014@gmail.com",
      "“.”",
    ],
  },
  {
    imageUrl: "./95-31.jpg",
    description: [
      "Patricia Marsha Gunardi",
      "25 Jul 2010",
      "08111728211",
      "@marshagunardi",
      "patriciamarshagunardi@",
      "“Birds of a feather we should stick together.”",
    ],
  },
  {
    imageUrl: "./95-32.jpg",
    description: [
      "Perlita Garcia",
      "6 August 2010",
      "081296750663",
      "@perlitagarcia__",
      "perlitagarcia6810@gmail.com",
      "“You can be that bright place with infinite capacities.”",
    ],
  },
  {
    imageUrl: "./95-33.jpg",
    description: [
      "Rinjani Sasikirana",
      "12 Sept 2010",
      "08197910970",
      "@just._rinny",
      "rinjani.sasikirana@gmail.com",
      "“Never forget. Believe in yourself, that is your magic! 🪄🌸”",
    ],
  },
  {
    imageUrl: "./95-34.jpg",
    description: [
      "Savina Destiny Januari",
      "28 Jan 2010",
      "081385554806",
      "@Destin2610",
      "sdestinyj@gmail.com",
      "“Musuh terburuk kreativitas adalah keraguan diri.”",
    ],
  },
  {
    imageUrl: "./95-35.jpg",
    description: [
      "Shianne Angelic Atmawijaya",
      "19 Sept 2010",
      "08984227878",
      "@shianne.an",
      "shianne.angelic.a@gmail.com",
      "“Success is not final, failure is not fatal: it is the courage to continue that counts.”",
    ],
  },
  {
    imageUrl: "./95-36.jpg",
    description: [
      "Theresia Kinanthi Keola Putri Setiawan",
      "23 Okt 2009",
      "085772734690",
      "@kinanthi.st",
      "kinansetiawan51@gmail.com",
      "“No yolo, no memories. Live your life.”",
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
        <ScrollContent isPaused={isPaused} speed={40}>
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