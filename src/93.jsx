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
        imageUrl: "./93-1.jpg",
        description: [
            "Anastasia Janice Wibhawa Hendradi",
            "18 Maret 2010",
            "0817181857",
            "@thyv_jeje",
            "jajalulelo@gmail.com",
            "Sometimes loneliness is the only rest we get, sometimes emptiness actually lets us forget and sometimes forgiveness is easiest in secret.”",
        ],
    },
    {
        imageUrl: "./93-2.jpg",
        description: [
            "Angela Genevieve Putri Samodro",
            "19 Januari 2010",
            "085218497268",
            "@angelamoodro",
            "angela.190110@gmail.com",
            "“Nilai merah tidak tumbang, lulus SMP puji Tuhan bang!”",
        ],
    },
    {
        imageUrl: "./93-3.jpg",
        description: [
            "Audrey Angelica Sondang Kephas",
            "12 Juli 2010",
            "081310045272",
            "@audrey_k3phas",
            "audreylove.purple1368247@gmail.com",
            "“Keep on going with your silly dreams” - by Laufey",
        ],
    },
    {
        imageUrl: "./93-4.jpg",
        description: [
            "Cathleen Mulan Tyas Ho",
            "6 Januari 2010",
            "082299008367",
            "@mulan.ho",
            "cathleenmulantyasho@gmail.com",
            "1 Corinthians 10:13 - And God is faithful; He will not let you be tempted beyond what you can bear.",
        ],
    },
    {
        imageUrl: "./93-5jpg",
        description: [
            "Claire Arabelle Setiadi",
            "3 Februari 2010",
            "087870104444",
            "@clairearabelles",
            "setiadi.clairea@gmail.com",
            "",
        ],
    },
    {
        imageUrl: "./93-6.jpg",
        description: [
            "Clarice Geodge",
            "14 Januari 2010",
            "081808999888",
            "@clarice_geodge",
            "geodgeclarice@gmail.com",
            "I see it, I like it, I want it, I got it. - Ariana Grande",
        ],
    },
    {
        imageUrl: "./93-7.jpg",
        description: [
            "Evelyn Tanzil",
            "3 April 2010",
            "0817383596",
            "@evelyn.tanzil",
            "evelyn.tanzil0304@gmail.com",
            "Be yourself because no one can say you're doing it wrong.",
        ],
    },
    {
        imageUrl: "./93-8.jpg",
        description: [
            "Gabriella Erynn Widjaja",
            "8 Juni 2010",
            "085830154199",
            "@g.erynn.w",
            "gabriella.erynn2010@gmail.com",
            "Don't give up because the end is near",
        ],
    },
    {
        imageUrl: "./93-9.jpg",
        description: [
            "Gabriella Michelle Budojo",
            "27 Agustus 2010",
            "085811166765",
            "@michellebudojo",
            "michelle.budojo@gmail.com",
            "Tables turn, bridges burn, you live and learn",
        ]
    },
    {
        imageUrl: "./93-10.jpg",
        description: [
            "Grace Miranda",
            "28 Juli 2010",
            "08118252122",
            "@_gracexw",
            "123grace.miranda@gmail.com",
            "life is like a bowl of cherries, sour but leaves a sweet aftermath <3",
        ],
    },
    {
        imageUrl: "./93-11.jpg",
        description: [
            "Gracia Regina Kristovi",
            "12 Maret 2010",
            "087839945017",
            "@chaargna",
            "graciakristovi@gmail.com",
            "",
        ]
    },
    {
        imageUrl: "./93-12.jpg",
        description: [
            "Isabelle Aliana Nardy ",
            "6 Mei 2010",
            "087886150542",
            "@nardyisabelle_2010",
            "sabelle060510@gmail.com",
            "No one is perfect, that's why pencils have eraser..!",
        ]
    },
    {
        imageUrl: "./93-13.jpg",
        description: [
            "Jeanette Alena Jiauw",
            "3 Maret 2010",
            "08170808097",
            "@jeanette.jiauw",
            "jeanette.a.jiauw@gmail.com",
            "",
        ]
    },
    {
        imageUrl: "./93-14.jpg",
        description: [
            "Jemima Arcella Hasian Allagan",
            "10 Oktober 2010",
            "085967190616",
            "@jemimarcl",
            "jemimallagan10@gmail.com",
            "If you ever feel on your lowest point, make sure you don't fall from it.",
        ]
    },
    {
        imageUrl: "./93-15.jpg",
        description: [
            "Kathleen Shawn Nainggolan",
            "18 Februari 2010",
            "081292921177",
            "@kathleenshawn",
            "kathleenshawn44@gmail.com",
            "Stay true to yourself, live with courage and integrity, and let every step reflect your authentic self.",
        ]
    },
    {
        imageUrl: "./93-16.jpg",
        description: [
            "Kathryn Abigail Nabasa Marpaung",
            "11 Februari 2010",
            "08118951188",
            "@dkatein",
            "agentducky994@gmail.com",
            "Risking is better than regretting",
        ]
    },
    {
        imageUrl: "./93-17.jpg",
        description: [
            "Kiara Patricia Ongkowijoyo",
            "23 Oktober 2009",
            "082175008862",
            "@kiara.ogkwj",
            "kiaraongkowijoyo@gmail.com",
            "sleep deeply, smile brightly, study wisely",
        ]
    },
    {
        imageUrl: "./93-18.jpg",
        description: [
            "Kimi Kartasasmita",
            "23 April 2010",
            "081311551785",
            "@akk_0423",
            "kimi.kartasasmita@gmail.com",
            "It's okay to not be okay",
        ]
    },
    {
        imageUrl: "./93-19.jpg",
        description: [
            "Latisha Lowena Lynd",
            "20 April 2010",
            "081285611005",
            "@lowenaur",
            "lowenalatisha@gmail.com",
            "No matter what anybody tells you, words and ideas can change the world",
        ]
    },
    {
        imageUrl: "./93-20.jpg",
        description: [
            "Megan Simargi",
            "11 Februari 2011",
            "08119938699",
            "@megansimargi._",
            "Komikmegansimargi@gmail.com",
            "If not now, when?",
        ]
    },
    {
        imageUrl: "./93-21.jpg",
        description: [
            "Michelina Joanna Saleh",
            "6 Oktober 2010",
            "087893377031",
            "@michelinajoannasaleh",
            "Michelinajoannasaleh@gmail.com",
            "Berpikir ke depan, berpikir besar, berpikir cepat, dan lakukan",
        ]
    },
    {
        imageUrl: "./93-22.jpg",
        description: [
            "Naftalya Josephine Racheletta Tumanggor",
            "16 Desember 2009",
            "081311487083",
            "@nafnafjrt",
            "naftajrt@gmail.com",
            "Semua hal yang terjadi di hidupku, hanyalah cara Tuhan dalam membentukku.",
        ]
    },
    {
        imageUrl: "./93-23.jpg",
        description: [
            "Natalie Giselle Hartanto",
            "21 Mei 2010",
            "08118582105",
            "@natalie_gisellee",
            "nataliegiselle21@gmail.com",
            "",
        ]
    },
    {
        imageUrl: "./93-24.jpg",
        description: [
            "Nathania Garcia",
            "6 Agustus 2010",
            "081296750668",
            "@nathaniadecoco_",
            "",
            "Tidak ada seorang pun yang bertanggung jawab atas keadaanmu kecuali dirimu sendiri.",
        ]
    },
    {
        imageUrl: "./93-25.jpg",
        description: [
            "Patricia Catherine Mulya",
            "12 Desember 2009",
            "081779966514",
            "@pc_mulya",
            "patricesplatoonfan@gmail.com",
            "“Keep doing your best and be optimistic”",
        ]
    },
    {
        imageUrl: "./93-26.jpg",
        description: [
            "Quinn Belle Wiryadinata",
            "8 April 2010",
            "08111688876",
            "@winniee_belle",
            "quinnbellewiryadinata10@gmail.com",
            "Some things have to end for better things to begin",
        ]
    },
    {
        imageUrl: "./93-27.jpg",
        description: [
            "Rachel Olivia Josephine",
            "21 September 2010",
            "081293381229",
            "@oliviajsphnee",
            "racheloliviajosephine.19.5b@gmail.com",
            "Your direction is more important than your speed",
        ]
    },
    {
        imageUrl: "./93-28.jpg",
        description: [
            "Raina Lilian Hartanto",
            "7 Juni 2010",
            "081977042888",
            "@rainalilian",
            "rainalilianh@gmail.com",
            "there are no shortcuts to any place worth going",
        ]
    },
    {
        imageUrl: "./93-29.jpg",
        description: [
            "Rakyanestri Widyaningtyas",
            "3 November 2009",
            "08138245359",
            "@rkynstr",
            "rkynstr@gmail.com",
            "Bersikap adillah sejak dalam pikiran!",
        ]
    },
    {
        imageUrl: "./93-30.jpg",
        description: [
            "Sabrina Pinkan Rephauly Lumbuun",
            "20 September 2010",
            "081219204021",
            "@sabrinalumbuun ",
            "sabrinalumbuun@gmail.com",
            "don’t say goodbye, smell u later ",
        ]
    },
    {
        imageUrl: "./93-31.jpg",
        description: [
            "Samantha Elaine Gunawan",
            "15 Oktober 2010",
            "081717151010",
            "@elainesamanthaa",
            "elainesam1510@gmail.com",
            "elainesam1510@gmail.com",
        ]
    },
    {
        imageUrl: "./93-32.jpg",
        description: [
            "Teresanny",
            "23 Februari 2010",
            "081319939127",
            "@teresannyy",
            "teresannyy@gmail.com",
            "kalau hidup itu film, pasti genrenya komedi absurd",
        ]
    },
    {
        imageUrl: "./93-33.jpg",
        description: [
            "Vallerie Graciella Sebastian",
            "10 November 2010",
            "085710192121",
            "@valleriesebastian",
            "valleriegraciellaseb@gmail.com",
            "Ready for the next one",
        ]
    },
    {
        imageUrl: "./93-34.jpg",
        description: [
            "Vianney Nicole Epifania ",
            "4 Januari 2010",
            "081299888643",
            "@vianney_772",
            "vianneyepifania@gmail.com",
            "When you're lost in the darkness, look for the light",
        ]
    },
    {
        imageUrl: "./93-35.jpg",
        description: [
            "Yustina Gadiella Dharani",
            "27 Februari 2010",
            "081389923450",
            "@gaegaegaega",
            "yustinaega27@gmail.com",
            "dihina tidak tumbang, dipuji makasi bang",
        ]
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