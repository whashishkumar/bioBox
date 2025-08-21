'use client';
import { Geist, } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Provider } from "react-redux";
import store from "@/store/store";
import Head from "next/head";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const sanchez= localFont({
  src: './../../public/fonts/Sanchez-Regular.ttf', 
  weight: '400', 
  variable: '--font-sanchez',
});

const redHatDisplay= localFont({
   src: [
    { path: "./../../public/fonts/RedHatDisplay-VariableFont_wght.ttf", weight: "400", style: "normal" },
    { path: "./../../public/fonts/RedHatDisplay-VariableFont_wght.ttf", weight: "500", style: "normal" },
    { path: "./../../public/fonts/RedHatDisplay-VariableFont_wght.ttf", weight: "600", style: "normal" },
    { path: "./../../public/fonts/RedHatDisplay-VariableFont_wght.ttf", weight: "700", style: "normal" },
  ],
   variable: '--font-red-hat-display',
});

const poppins = localFont({
     src: [
    { path:"./../../public/fonts/RedHatDisplay-VariableFont_wght.ttf", weight: "400", style: "normal" },
    { path:"./../../public/fonts/RedHatDisplay-VariableFont_wght.ttf", weight: "500", style: "normal" },
    { path:"./../../public/fonts/RedHatDisplay-VariableFont_wght.ttf", weight: "600", style: "normal" },
    { path:"./../../public/fonts/RedHatDisplay-VariableFont_wght.ttf", weight: "700", style: "normal" },
  ],
  variable: '--font-poppins', 
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>bioBox Pharma</title>
        <meta name="description" content="BioBox Pharma commitment to quality Healthcare" />
      </Head>
        <title>BioBox Pharma</title>
        <meta name="description" content="BioBox Pharma commitment to quality Healthcare" />
        <link rel="icon" href="/favicon.ico" />
      <body className={`${geistSans.variable} ${redHatDisplay.variable} ${sanchez.variable} ${poppins.variable} `}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}


