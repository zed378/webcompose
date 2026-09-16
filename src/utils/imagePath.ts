export function getImagePath(image: any): string {
  if (!image) return "";
  if (typeof image === "string") return image;
  if ((image as any)?.src) return (image as any).src;
  if ((image as any)?.default) return (image as any).default;
  return String(image);
}
