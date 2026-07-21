"use client";

import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3500,
        style: {
          background: "#173f35",
          color: "#fffaf0",
          borderRadius: "14px",
        },
      }}
    />
  );
}
