import "material-icons/iconfont/material-icons.css"
import "material-symbols/index.css"
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import GlobalProvider from "providers/global"
import envs from "../helpers/envs"
import * as S from "./styles"
import { Metadata } from "next"

export async function generateMetadata() {
  return {
    title: "Pro Distribuidora",
    description:
      "A Pro Distribuidora é uma empresa especializada na distribuição de soluções profissionais em higiene e limpeza, com atuação consolidada nos estados do Pará e Amapá. Com foco em qualidade, eficiência operacional e atendimento personalizado, a empresa se destaca como distribuidora oficial da linha Unilever PRO, reconhecida por sua performance superior no setor institucional.",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    icons: {
      icon: "/favicon.ico",
    },
    /*     alternates: {
      canonical: "https://grupomedtech.com.br/",
    },
    verification: {
      google: "VKiTeugWSBm9cDPUXxs9Q2kcB5fjFPxgxshA1WbQZXY",
    }, */
    robots: {
      index: true,
    },
    /* openGraph: {
      type: "website",
      phoneNumbers: "+55 (73) 9199-1079",
      emails: "contato@grupomedtech.com.br",
      sameAs: [
        "https://www.facebook.com/grupomedtech/",
        "https://www.instagram.com/grupomedtech/",
      ],
      url: "https://grupomedtech.com.br/",
      description:
        "A Pro Distribuidora é uma empresa especializada na distribuição de soluções profissionais em higiene e limpeza, com atuação consolidada nos estados do Pará e Amapá. Com foco em qualidade, eficiência operacional e atendimento personalizado, a empresa se destaca como distribuidora oficial da linha Unilever PRO, reconhecida por sua performance superior no setor institucional.",
      siteName: "MedTech",
      images: [
        {
          type: "image/png",
          url: "https://grupomedtech.com.br/api/favicon?imageUrl=https://grupomedtech.com.br/favicon.ico&size=128",
          alt: "MedTech",
          width: 128,
          height: 128,
        },
      ],
    }, */
  } as Metadata
}

type TRootLayout = {
  children: React.ReactNode
}

async function RootLayout({ children }: TRootLayout) {
  return (
    <html lang="pt-br">
      {envs.node === "production" && (
        <>
          <GoogleTagManager gtmId="GTM-MSF7W9S8" />
          <GoogleAnalytics gaId="G-BP8WW8PZK6" />
          <SpeedInsights />
        </>
      )}
      <GlobalProvider>
        <S.Layout>{children}</S.Layout>
      </GlobalProvider>
    </html>
  )
}

export default RootLayout
