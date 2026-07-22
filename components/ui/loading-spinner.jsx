export function LoadingSpinner({ label = "Loading" }) {
    return (<span className="inline-flex items-center gap-2" role="status">
      <span className="loading loading-spinner loading-sm" aria-hidden="true"/>
      <span>{label}</span>
    </span>);
}
