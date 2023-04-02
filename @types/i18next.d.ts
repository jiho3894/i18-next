import "i18next";

import type common from "../public/locales/ko/common.json";
import type detail from "../public/locales/ko/detail.json";

interface I18nNamespaces {
  common: typeof common;
  detail: typeof detail;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
