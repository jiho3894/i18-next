import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export default function Home({ locale }: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div>
      <h1>{t("h1")}</h1>
      <ul>
        <span>{locale}</span>
      </ul>
      <span onClick={() => router.push("/detail")}>3333</span>
    </div>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
