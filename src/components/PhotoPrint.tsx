type PhotoPrintProps = {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function PhotoPrint({ src, alt, caption, className }: PhotoPrintProps) {
  return (
    <figure className={className ? `photo-print ${className}` : 'photo-print'}>
      <img src={src} alt={alt} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
