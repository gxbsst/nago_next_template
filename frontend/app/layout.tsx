import {fetchMenu} from "@nago/graphql";
import {Toaster} from "@nago/components/toaster";
import Header from "@nago/components/header";
import localFont from "next/font/local";

// const arial = localFont({
//   src: "../styles/fonts/ARIAL.ttf",
//   variable: "--font-arial",
// });


import "./globals.css";
import Container from "@nago/components/container";
import {FooterSection} from "@nago/components/footer_section";

export const metadata = {
  title: process.env.SITE_TITLE,
  description: process.env.SITE_DESCRIPTION,
};

export default async function RootLayout({children}: {
  children: React.ReactNode;
}) {
  const menu = await fetchMenu();
  return (
    <html
      lang="en"
      // className={`${arial.variable} font-sans`}
      className={`font-sans`}
    >
    <head>
      <meta charSet="utf-8"/>
      <title>{metadata.title}</title>
      {/*<script src="http://nadi_next.home/wp/wp-includes/js/jquery/jquery.js?ver=3.7.1" />*/}
      {/*<script src="http://nadi_next.home/app/plugins/LayerSlider/assets/static/layerslider/js/layerslider.utils.js?ver=7.10.1" />*/}
      {/*<script src="http://nadi_next.home/app/plugins/LayerSlider/assets/static/layerslider/js/layerslider.transitions.js?ver=7.10.1" />*/}
      {/*<script src="http://nadi_next.home/app/plugins/LayerSlider/assets/static/layerslider/js/layerslider.kreaturamedia.jquery.js?ver=7.10.1" />*/}
    </head>
    <body className="flex flex-col h-screen">
    <div className="w-full bg-primary z-10 fixed">
      <Container className="h-[68px] px-[112px]">
        {/*// @ts-ignore */}
        <Header menu={menu!}/>
      </Container>
    </div>
    <main className="w-full grow pt-[68px]">
      {children}
    </main>
    <FooterSection/>

    <Toaster/>
    </body>
    </html>
  );
}
