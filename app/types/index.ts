import { MutationObserverOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

export interface MutationConfigOptions {
  config?: AxiosRequestConfig;
  options?: Omit<MutationObserverOptions<any, any, any, any>, `initialData`>;
}
