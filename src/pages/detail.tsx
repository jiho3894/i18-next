import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Detail = () => {
  const { t } = useTranslation(["common", "detail"]);
  return (
    <div>
      <span>{t("common:h1")}</span>
    </div>
  );
};

export default Detail;

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "detail"])),
    },
  };
};
