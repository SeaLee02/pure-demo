import { sysHttp } from "@/utils/http/axios";
import { CaptchaOutPut } from "../models/sys-auth-input";

export const authGetCaptcha = () => {
  return sysHttp.get<CaptchaOutPut>({ url: `/Authorize/GetCaptcha` });
};
