import { Geist, Roboto,} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "bioBox Pharma",
  description: "BioBox Pharma commitment to quality Healthcare",
};

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
      <body className={`${geistSans.variable} ${redHatDisplay.variable} ${sanchez.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
