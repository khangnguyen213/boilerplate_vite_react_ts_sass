export default function PermissionDenied({ url }) {
  if (url) {
    window.location.href = url;
  }
  return <>{url == null && <div>PermissionDenied</div>}</>;
}
