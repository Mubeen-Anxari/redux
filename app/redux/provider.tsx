import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
export function Providers({ children }) {
  return;
  <Provider store={store}>{children}</Provider>;
}
