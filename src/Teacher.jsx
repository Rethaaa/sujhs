import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import Polaroid from "./Polaroid";

// Scroll animation
const scroll = keyframes`
  0% { transform: translate3d(-50%, 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
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
    imageUrl: "IPA-1.jpg",
    description: [
      "Elisa Tri Meistiawan",
      "4 Mei",
      "082110621133",
      "educator45@gmail.com ",
      "@iwan_etm",
      "“Nak, tajamkan keunggulan pribadimu & terangilah sekitarmu dengan tidak sombong karena kita juga pribadi yang penuh dengan keterbatasan. Keep growing 🙏🏼.”",
    ],
  },
  {
    imageUrl: "IPA-2.jpg",
    description: [
      "FA. Dimas Andika Wahyuanto",
      "11 Juli",
      "085729036488",
      "wiryodiharjo90@gmail.com ",
      "@fadimasanto",
      "“Kamu memiliki potensi yang tak terbatas, hanya perlu diaktifkan. Keep moving forward and think like a proton”",
    ],
  },
  {
    imageUrl: "./IPA-3.jpg",
    description: [
      "Fransisca Wiwik Martasari ",
      "7 Maret",
      "081325373202",
      "wiexmartasari@gmail.com",
      "@wiwik_martasari",
      "Keberhasilan bukanlah milik orang yang pintar. Keberhasilan adalah kepunyaan mereka yang senantiasa berusaha ",
    ]
  },
  {
    imageUrl: "./IPA-4.jpg",
    description: [
      "Eleonora Yolanda Endear Ganamurti Sudarbe",
      "20 Januari",
      "089635945348",
      "yolandaendear.sudarbe@gmail.com",
      "@yolanda.endear",
      "Selalu Bahagia dimanapun kalian berada ^_^",
    ]
  },
  {
    imageUrl: "./Matematika-1.jpg",
    description: [
      "Martinus Didik Setyawan",
      "22 Februari",
      "081316883877",
      "didik@smp.santaursulajakarta.sch.id",
      "@martinusdidik",
      "Syukuri selalu yang ada...",
    ]
  },
  {
    imageUrl: "./Matematika-2.jpg",
    description: [
      "Chatarina Maryani",
      "3 Maret",
      "08128188217",
      "chatarinamaryani@gmail.com",
      "@chatarina_maryani",
      "Nikmatilah masa mudamu dengan bertanggungjawab, dan jadilah wanita yang bermartabat.",
    ]
  },
  {
    imageUrl: "./Matematika-3.jpg",
    description: [
      "Emilia Hendra Kristanti",
      "1 Oktober",
      "082225068535",
      "emiliahendra1990@gmail.com",
      "@emiliahendra",
      "Jangan takut untuk mencoba, karena setiap langkah kecil kita, akan membawa kita lebih dekat ke tujuan.",
    ]
  },
  {
    imageUrl: "./IPS-1.jpg",
    description: [
      "Theresia Yulianti",
      "29 Juli",
      "081382450104",
      "thresyuli@gmail.com",
      "",
      "Jangan pernah berhenti belajar, karena hidup tak pernah berhenti memberikan pelajaran.",
    ]
  },
{
    imageUrl: "./IPS-2.jpg",
    description: [
      "Agustinus Susanto",
      "11 Oktober",
      "081398726745",
      "agus@smp.santaursulajakarta.sch.id ",
      "@ats_susanto",
      "Teruslah bergerak maju, meski langkah kecil sekalipun, adalah tanda bahwa kamu sedang mendekati tujuan besar.",
    ]
  },
  {
    imageUrl: "./IPS-3.jpg",
    description: [
      "Lorencia Helen Dora Sisworo",
    "6  Desember",
      "08112656509",
      "lorenciahelendora@gmail.com",
      "@lhelendora",
      "",
    ]
  },
  {
    imageUrl: "./IPS-Pkn-1.jpg",
    description: [
      "Aloysius Krismaryanta ",
      "31 Mei",
      "08161319649",
      "krisma31.ak@gmail.com",
      "",
      "Belajarlah dari hidup  kesederhanaan Bapa Paus Fransiskus",
    ]
  },
  {
    imageUrl: "./IPS-Pkn-2.jpg",
    description: [
      "Arny Porba",
      "4 April",
      "081389780562",
      "arnyporba@gmail.com",
      "@arnyporba",
      "",
    ]
  },
  {
    imageUrl: "./IPS-Pkn-3-.jpg",
    description: [
      "Arya Raka Sadewa ",
      "21 September",
      "082332340556",
      "aryaraka799@gmail.com",
      "@arakas_ss",
      "Sonder",
    ]
  },
  {
    imageUrl: "./Inggris-1.jpg",
    description: [
      "Vina Agustin",
      "6 Agustus",
      "0818844757",
      "vinagustin6@gmail.com",
      "",
      "Be the best version of yourself. ",
    ]
  },
  {
    imageUrl: "./Inggris-2.jpg",
    description: [
      "Khrisna Putuningsih",
      "8 Juni",
      "08161311904",
      "khrisnaputuningsih@gmail.com",
      "@khrisna.putu",
      "Do to others what you want others do to you (Matthew 7:12) ",
    ]
  },
  {
    imageUrl: "./Inggris-3.jpg",
    description: [
      "Yohana Alaya Prudenti",
      "23 Juni",
      "08112996623",
      "yohanaalayaprudenti@gmail.com",
      "@yohnaap",
      "Life is a box full of surprises.",
    ]
  },
  {
    imageUrl: "./Agama-1.jpg",
    description: [
      "Karinna",
      "28 November",
      "085691942328",
      "karinnaingleton@gmail.com",
      "@karinnaingleton",
      "“Jadilah obor yang mampu menerangi peziarahan hidup”",
    ]
  },
  {
    imageUrl: "./Agama-2.jpg",
    description: [
      "Ignatius Dimmas",
      "9 Juli",
      "08561542234",
      "dimaslight9@gmail.com",
      "@ignatiusdimmas",
      "Don't Rich People Difficult",
    ]
  },
  {
    imageUrl: "./PJOK-1.jpg",
    description: [
      "Edyson Isdy",
      "10 Oktober",
      "081294295960",
      "edysonisdy1967@gmail.com",
      "@edyson.isdy",
      "Jika kamu Serviam sejati terbangmu jauh jangan lupa kembali ke kampus Ursula",
    ]
  },
  {
    imageUrl: "./PJOK-2.jpg",
    description: [
      "Jose Geni",
      "28 Februari",
      "081219083060",
      "josegeni2802@gmail.com",
      "@josegeniii.jg",
      "Perjalananmu mungkin tidak lurus, tapi setiap belokan memiliki makna. Teruslah melangkah, dan kamu akan sampai ke tujuanmu",
    ]
  },
  {
    imageUrl: "./Bahasa Indonesia-1.jpg",
    description: [
      "Yulia Sri Utami",
      "28 Mei",
      "081843280572",
      "kotanutama@gmail.com",
      "@juliautami ",
      "Peganglah semangat Serviam dalam hidupmu. SERVIAM.",
    ]
  },
  {
    imageUrl: "./Bahasa Indonesia-2.jpg",
    description: [
      "Antonius Haris Septiaji ",
      "20 September",
      "085713905941",
      "ant.haris20@gmail.com",
      "@antoniusharis20",
      "Bersyukur adalah langkah awal untuk berkembang.",
    ]
  },
  {
    imageUrl: "./Bahasa Indonesia-3.jpg",
    description: [
      "Yuvensia Kharisma Novena",
      "12 November",
      "081475507844",
      "ynovena@gmail.com",
      "@ynovena",
      "”Hujan mungkin turun seolah akan menyapu segalanya. Tapi begitu matahari mulai bersinar lagi, kehidupan bangkit kembali, apa pun yang terjadi.” -WLGUT-",
    ]
  },
  {
    imageUrl: "./Bahasa Indonesia-4.jpg",
    description: [
      "Nova Kristina Pakpahan",
      "23 Mei",
      "085283708498",
      "novapakpahan19@gmail.com",
      "@novacp",
      "Hakuna Matata",
    ]
  },
  {
    imageUrl: "./Prakarya-1.jpg",
    description: [
      "Ermina Kristiyani",
      "23 Februari",
      "087882940581",
      "erminakity4@gmail.com",
      "",
      "Miliki cukup keberanian untuk memulai dan cukup hati untuk menyelesaikannya",
    ]
  },
  {
    imageUrl: "./Prakarya-2.jpg",
    description: [
      "Andreas Krisna Putra Wiseno",
      "23 Mei",
      "081296653523",
      "andreaskrisnapw@gmail.com",
      "@andreaskrisnapw",
      "Be Creative 😉",
    ]
  },
  {
    imageUrl: "./Prakarya-3.jpg",
    description: [
      "Beda Pranowo",
      "4 November",
      "085881526898",
      "beda_mercury@yahoo.com",
      "",
      "Jadilah pribadi yang sederhana, jujur dan selalu bersyukur. Dan jangan lupa untuk selalu mengandalkan Tuhan. Sukses Selalu. Tuhan Memberkati.",
    ]
  },
  {
    imageUrl: "./BK-1.jpg",
    description: [
      "Dwi Endah Prasetyowati",
      "14 April",
      "081519808178",
      "endahkhristiandri77@gmail.com",
      "@endahyuliana",
      "Success is the sun of small efforts, repeated day-in and day-out",
    ]
  },
  {
    imageUrl: "./BK-2.jpg",
    description: [
      "Dewi Sartika Nadeak",
      "5 Desember",
      "085211004802",
      "nadeakrajagukguk@gmail.com",
      "@Nadeak_Dewi",
      "Konsistensi adalah kunci menuju kesuksesan",
    ]
  },
  {
    imageUrl: "./BK-3.jpg",
    description: [
      "Marcellina Yovita",
      "17 Juli",
      "087875103551",
      "marcellina.yovitaa@gmail.com",
      "@marcellina.y",
      "Do the best and let God do the rest!",
    ]
  },
  {
    imageUrl: "./TIK-1.jpg",
    description: [
      "Yustina Indrati",
      "18 Desember",
      "081289648528",
      "yindrati@gmail.com",
      "@yustinaindrati",
      "Tetap sehat dan semangat untuk angkatan ini, raih kesuksesanmu. Tuhan Memberkati.",
    ]
  },
  {
    imageUrl: "./TIK-2.jpg",
    description: [
      "Robbidin Subagja",
      "20 November",
      "083862418796",
      "robbidinsubagja@gmail.com",
      "@robbidin20",
      "Boleh jadi kamu membenci sesuatu, padahal ia amat baik bagimu, dan boleh jadi (pula) kamu menyukai sesuatu, padahal ia amat buruk bagimu. Allah mengetahui, sedangkan kamu tidak mengetahui",
    ]
  },
  {
    imageUrl: "./TIK-3.jpg",
    description: [
      "Ruthmana Purba",
      "30 Agustus",
      "082294089173",
      "ruthmana0@gmail.com",
      "@ruthmana_purba",
      "Kesuksesan itu bukan ditunggu, tetapi diwujudkan lewat usaha dan kegigihan",
    ]
  },
  {
    imageUrl: "./Staff TU-1.jpg",
    description: [
      "Synthia Caroline",
      "14 Oktober",
      "08119141480",
      "syncaroline81@gmail.com",
      "@mimosben14",
      "Bersukacitalah dalam pengharapan, sabarlah dalam kesesakan, dan bertekunlah dalam doa! (Roma 12:12)",
    ]
  },
  {
    imageUrl: "./Staff TU-2.jpg",
    description: [
      "Margaretha Yuniaty S.",
      "16 Juni",
      "081318793672",
      "rethasanur@gmail.com",
      "",
      "ORA ET LABORA",
    ]
  },
  {
    imageUrl: "./Staff TU-3.jpg",
    description: [
      "Fransiskus Herry Diantoro",
      "2 Desember",
      "081212879768",
      "dianbill22@gmail.com",
      "@HERRY_DIANTORO",
      "Jadilah versi terbaik dari dirimu, bukan tiruan dari orang lain. Dunia membutuhkanmu, bukan seseorang yang lain.",
    ]
  },
  {
    imageUrl: "./Staff TU-4.jpg",
    description: [
      "Novitasari Ginting",
      "9 September",
      "085275007251",
      "ovi.sari99@gmail.com",
      "@novita_sariginting",
      "semangat...semangat ...semangat",
    ]
  },
  {
    imageUrl: "./Staff TU-5.jpg",
    description: [
      "Theresia Anita",
      "15 Juni",
      "081298787332",
      "lunar.eclipse85@gmail.com",
      "@lunar.eclipse85",
      "Jangan biarkan kegagalan kemarin membuatmu berhenti, jangan pula berhenti karena keraguanmu.",
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