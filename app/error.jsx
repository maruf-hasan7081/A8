"use client";
import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
export default function GlobalError({ error, reset, }) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (<div className="page-shell grid min-h-[55vh] place-items-center py-16 text-center">
      <div className="max-w-lg rounded-[2rem] border border-red-200 bg-white p-8 shadow-lg">
        <AlertTriangle className="mx-auto size-12 text-red-500" aria-hidden="true"/>
        <h1 className="mt-5 font-display text-3xl font-bold text-[#173f35]">
          Something interrupted your reading
        </h1>
        <p className="mt-3 leading-7 text-slate-600">
          The page could not be completed. Please try the request again.
        </p>
        <button type="button" onClick={reset} className="btn mt-6 border-0 bg-[#173f35] text-white hover:bg-[#24594b]">
          <RefreshCw className="size-4" aria-hidden="true"/>
          Try again
        </button>
      </div>
    </div>);
}
