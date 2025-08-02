import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  width?: number
  height?: number
  text?: string
  className?: string
  bgColor?: string
  textColor?: string
}

export function ImagePlaceholder({ 
  width = 400, 
  height = 300, 
  text = "Image Placeholder",
  className,
  bgColor = "bg-gradient-to-br from-blue-50 to-indigo-100",
  textColor = "text-gray-600"
}: ImagePlaceholderProps) {
  return (
    <div 
      className={cn(
        "flex items-center justify-center rounded-lg",
        bgColor,
        textColor,
        className
      )}
      style={{ width, height }}
    >
      <div className="text-center">
        <div className="text-sm font-medium">{text}</div>
        <div className="text-xs opacity-75">{width} × {height}</div>
      </div>
    </div>
  )
}
