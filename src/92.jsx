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
    imageUrl: "./92-1.jpg",
    description: [
      "Agatha Nara Anindya Windarto",
      "23 Juni 2010",
      "087788991829",
      "@agathaanara",
      "agathanara06@gmail.com",
      "“Tables turn, bridges burn, you live and learn.”",
    ],
  },
  {
    imageUrl: "./92-2.jpg",
    description: [
      "Andrea Denny Setyono",
      "6 Oktober 2010",
      "08111537253",
      "@andrea_ds610",
      "andrea.setyono@gmail.com",
      "“Masa lalu tidak menentukan siapa kita.”",
    ],
  },
  {
    imageUrl: "./92-3.jpg",
    description: [
      "Arletta Cherryl Kusnadi",
      "3 Agustus 2010",
      "081380688344",
      "@cherry._.ontop03",
      "ackcherryl@gmail.com",
      "“Life is hard, so try to enjoy every simple step in life!”",
    ],
  },
  {
    imageUrl: "./92-4.jpg",
    description: [
      "Aurellie Cleoza Iskandar",
      "17 Desember 2009",
      "082311116900",
      "@aurellie.cleoza",
      "aurelliecleozaiskandar@gmail.com",
      "“Do good and good will come to you.”",
    ],
  },
  {
    imageUrl: "./92-5.jpg",
    description: [
      "Caroline Regina Darwis",
      "7 Maret 2010",
      "085282380345",
      "@caroline_darwis",
      "carolinereginadarwis7289@gmail.com",
      "“Life is cool.”",
    ],
  },
  {
    imageUrl: "./92-6.jpg",
    description: [
      "Cecilia Greenela Valeska Koetin",
      "3 May 2010",
      "081511019587",
      "@grne.vals_",
      "greenelavaleska@gmail.com",
      "“No, my favorite color isn't green.”",
    ],
  },
  {
    imageUrl: "./92-7.jpg",
    description: [
      "Chloe Patricia Laus",
      "8 Juli 2024",
      "082311550771",
      "@kloi.lauw__",
      "chloe.lauw0807@gmail.com",
      "“.”",
    ],
  },
  {
    imageUrl: "./92-8.jpg",
    description: [
      "Clarissa Olivia Setiawan",
      "25 April 2010",
      "08111799072",
      "@Cla.0livia",
      "clrs.oliviaa@gmail.com",
      "“If you do your best each and every day, good things are sure to come your way.”",
    ],
  },
  {
    imageUrl: "./92-9.jpg",
    description: [
      "Devinna",
      "25 Juni 2010",
      "081382710097",
      "@clarisa_devinna",
      "clarisadevinna@gmail.com",
      "“Can't change the weather, might not be forever.”",
    ],
  },
  {
    imageUrl: "./92-10.jpg",
    description: [
      "Elsa Narita Ray",
      "5 Juli 2010",
      "081398857883",
      "@xaaa_lxaa",
      "lsa.ash.ray@gmail.com",
      "“Tidak ada yang mustahil jika tetap memiliki usaha yang kuat.”",
    ],
  },
  {
    imageUrl: "./92-11.jpg",
    description: [
      "Eugenia Bianca Liu",
      "19 Maret 2010",
      "085782017338",
      "@eugeniabiancaa",
      "liu.bianca.eugenia@gmail.com",
      "“.”",
    ],
  },
  {
    imageUrl: "./92-12.jpg",
    description: [
      "Felicia Ilona Gunawan",
      "1 April 2010",
      "085157481717",
      "@feliciailonagnwn",
      "feliciailonagunawan@gmail.com",
      "“You can't please everyone, the best thing to do is not to let yourself down.”",
    ],
  },
  {
    imageUrl: "./92-13.jpg",
    description: [
      "Genoveva Jane Ponomban",
      "9 Maret 2010",
      "081533335633",
      "@j.jan3e",
      "jane.ponomban@gmail.com",
      "“Keep on going with your silly dream, Life is prettier than it may seem.”",
    ],
  },
  {
    imageUrl: "./92-14.jpg",
    description: [
      "Gracia Jeconia Putri Maha",
      "3 Maret 2010",
      "08111631608",
      "@graciiamaha",
      "graciajeconia@gmail.com",
      "“If it doesn't challenge you, it doesn't change you.”",
    ],
  },
  {
    imageUrl: "./92-15.jpg",
    description: [
      "Jessica Susanto",
      "10 November 2009",
      "0895395300007",
      "@jessicaaasusanto",
      "jessdaartz89@gmail.com",
      "“This time next year, I'll be livin' so good.”",
    ],
  },
  {
    imageUrl: "./92-16.jpg",
    description: [
      "Joanne Angela Arilito",
      "13 Januari 2011",
      "087784520701",
      "@ang3la_jo",
      "jo.angela1301@gmail.com",
      "“Push through the pain, giving up hurts more.”",
    ],
  },
  {
    imageUrl: "./92-17.jpg",
    description: [
      "Jovanka Louise Leiwakabessy",
      "8 Juni 2010",
      "085121118610",
      "@daylightjoov",
      "jovanka.leiwa@gmail.com",
      "“Life will always be filled with stressful moments, but you can always choose to see something positive through it all.”",
    ],
  },
  {
    imageUrl: "./92-18.jpg",
    description: [
      "Katya Rose Hartanto",
      "30 September 2010",
      "087717117177",
      "@katyarrose",
      "katyarose112@gmail.com",
      "“.”",
    ],
  },
  {
    imageUrl: "./92-19.jpg",
    description: [
      "Kayla Almyra Wardhana",
      "28 April 2010",
      "081992804105",
      "@kylmyrwrdhn",
      "kayla.wardhana@gmail.com",
      "“Failure is a concept. How you recover is the truth.”",
    ],
  },
  {
    imageUrl: "./92-20.jpg",
    description: [
      "Keira Mulia",
      "9 Desember 2009",
      "087878889912",
      "@vkeiguts",
      "yuuraeuclase@gmail.com",
      "“Only a woman knows how to treat a woman right.”",
    ],
  },
  {
    imageUrl: "./92-21.jpg",
    description: [
      "Kiarra Agatha Johan",
      "20 Juli 2010",
      "081389552007",
      "@kiarraagatha",
      "kiarra.agatha2007@gmail.com",
      "“Fill your day with smiles.”",
    ],
  },
  {
    imageUrl: "./92-22.jpg",
    description: [
      "Kimie Pratono Wijaya",
      "18 Oktober 2009",
      "081313250073",
      "@kimiepratono",
      "kimie.pratono@gmail.com",
      "“Minimalis bukan berarti tidak kreatif.”",
    ],
  },
  {
    imageUrl: "./92-23.jpg",
    description: [
      "Lucia Nera Candra Puntadewa",
      "26 Februari 2010",
      "0811952602",
      "@mxonwy",
      "nera.puntadewa@gmail.com",
      "“How can beauty that is living be anything but true?”",
    ],
  },
  {
    imageUrl: "./92-24.jpg",
    description: [
      "Maria Renata Gwynne Allena",
      "28 September 2010",
      "087775353881",
      "@mariaawynnee",
      "mrenatagwynne@gmail.com",
      "“Be in the sky but still have your feet on the ground.”",
    ],
  },
  {
    imageUrl: "./92-25.jpg",
    description: [
      "Nadira Puti Ardelia",
      "27 Oktober 2010",
      "08118123424",
      "@nadiraaputi",
      "nadiraputiardelia@gmail.com",
      "“Sometimes we don’t understand the value of a moment until it passes.”",
    ],
  },
  {
    imageUrl: "./92-26.jpg",
    description: [
      "Naomi Emmanuella Sudarto",
      "28 October 2009",
      "087875873839",
      "-",
      "mimichukyutie@gmail.com",
      "“You can't control the wind but you can adjust your sails.”",
    ],
  },
  {
    imageUrl: "./92-27.jpg",
    description: [
      "Natalia Viola Andina Nugroho",
      "25 December 2009",
      "08118069944",
      "@nataliaviolaa",
      "natalia.nugroho@yahoo.com",
      "“Stay yolo, and make impossible things turn possible.”",
    ],
  },
  {
    imageUrl: "./92-28.jpg",
    description: [
      "Nida Annabel Feby Sitorus",
      "5 Februari 2010",
      "082111958721",
      "@niidaannabel",
      "nidaannabel@gmail.com",
      "“Before things come together, they have to fall apart.”",
    ],
  },
  {
    imageUrl: "./92-29.jpg",
    description: [
      "Richelle Budiwarman",
      "21 Januari 2010",
      "081382775965",
      "@richelle.21",
      "rishbudiwarman@gmail.com",
      "“Find your light and shine on, no matter the fate or trouble that comes your way.”",
    ],
  },
  {
    imageUrl: "./92-30.jpg",
    description: [
      "Rosalyne  Eleanor Tamba",
      "17 September 2010",
      "082114912218",
      "@eltmba",
      "eleanortam17@gmail.com",
      "“One day or day one.”",
    ],
  },
  {
    imageUrl: "./92-31.jpg",
    description: [
      "Sefina Louisa Pramono",
      "21 September 2010",
      "085770397278",
      "@finnalou",
      "sefinalouisa@gmail.com",
      "“Always think positive and never give up.”",
    ],
  },
  {
    imageUrl: "./92-32.jpg",
    description: [
      "Sherlynsky Wijaya",
      "13 Januari 2010",
      "0859106526653",
      "@sherlynsky.w",
      "sherlynskywij@gmail.com",
      "“She believed she could, so she will do it.”",
    ],
  },
  {
    imageUrl: "./92-33.jpg",
    description: [
      "Stella Audrey Halim Effendy",
      "8 Februari 2010",
      "08111906899",
      "@123456idkone",
      "halimeffendystellaaudrey@gmail.com",
      "“Every setback is a setup for a comeback.”",
    ],
  },
  {
    imageUrl: "./92-34.jpg",
    description: [
      "Tatiana Aurelia Fleming",
      "20 Agustus 2010",
      "081287654327",
      "@_ana.fleming",
      "tatianaaureliaflem@gmail.com",
      "“Step out of what’s familiar and discover what’s possible, always believe in yourself!”",
    ],
  },
  {
    imageUrl: "./92-35.jpg",
    description: [
      "Theresia Yosevine Gunawan",
      "2 Desember 2009",
      "08161391825",
      "@yosevine.212",
      "t.yosevine.g@gmail.com",
      "“Senyum adalah cara terbaik untuk menjalani hidup.”",
    ],
  },
  {
    imageUrl: "./92-36.jpg",
    description: [
      "Vanessa Christabell Ladjuardi",
      "24 Januari 2010",
      "087852863185",
      "@vanessa.c_l",
      "vanvanchristabelle@gmail.com",
      "“Don't wish for it, work for it.”",
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