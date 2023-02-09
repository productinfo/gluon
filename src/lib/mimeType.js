export default ext => ({
  "aac": "audio/aac",
  "avif": "image/avif",
  "avi": "video/x-msvideo",
  "bin": "application/octet-stream",
  "bmp": "image/bmp",
  "css": "text/css",
  "csv": "text/csv",
  "gz": "application/gzip",
  "gif": "image/gif",
  "htm": "text/html",
  "html": "text/html",
  "ico": "image/vnd.microsoft.icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "jsonld": "application/ld+json",
  "mid": "audio/midi",
  "midi": "audio/midi",
  "mjs": "text/javascript",
  "mp3": "audio/mpeg",
  "mp4": "video/mp4",
  "mpeg": "video/mpeg",
  "oga": "audio/ogg",
  "ogv": "video/ogg",
  "ogx": "application/ogg",
  "opus": "audio/opus",
  "otf": "font/otf",
  "png": "image/png",
  "pdf": "application/pdf",
  "rar": "application/vnd.rar",
  "rtf": "application/rtf",
  "svg": "image/svg+xml",
  "tar": "application/x-tar",
  "tif": "image/tiff",
  "tiff": "image/tiff",
  "ttf": "font/ttf",
  "txt": "text/plain",
  "wav": "audio/wav",
  "weba": "audio/webm",
  "webm": "video/webm",
  "webp": "image/webp",
  "woff": "font/woff",
  "woff2": "font/woff2",
  "xhtml": "application/xhtml+xml",
  "xml": "application/xml",
  "zip": "application/zip"
})[ext.toLowerCase()] ?? 'application/octet-stream';