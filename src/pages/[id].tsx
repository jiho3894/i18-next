import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";

const Good = () => {
  const { t } = useTranslation(["common", "detail"]);
  return (
    <div>
      <span>{t("common:h3")}</span>
    </div>
  );
};

export default Good;

export const getServerSideProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "detail"])),
    },
  };
};
