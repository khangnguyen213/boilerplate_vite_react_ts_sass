export default function PermissionDenied({ url }: { url: string | null }) {
  if (url) {
    window.location.href = url;
  }
  return <>{url == null && <div>PermissionDenied</div>}</>;
}
