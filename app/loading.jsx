import { LoadingSpinner } from "@/components/ui/loading-spinner";
export default function Loading() {
    return (<div className="page-shell grid min-h-[55vh] place-items-center py-16">
      <div className="rounded-3xl border border-[#173f35]/10 bg-white px-8 py-6 shadow-sm">
        <LoadingSpinner label="Opening the library"/>
      </div>
    </div>);
}
