import { useState } from "react";
import { cn } from "@/lib/utils";

interface TokenIconProps {
  src?: string;
  symbol: string;
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const tokenEmojis: Record<string, string> = {
  ETH: "💎",
  USDC: "💵",
  USDT: "💰",
  DAI: "🪙",
  WBTC: "₿",
  UNI: "🦄",
  LINK: "🔗",
  MATIC: "🟣",
  AAVE: "👻",
  COMP: "🏛️",
  SUSHI: "🍣",
  CRV: "🌀",
  BAL: "⚖️",
  YFI: "💙",
  SNX: "⚡",
  MKR: "🏭",
};

export default function TokenIcon({ src, symbol, name, size = "md", className }: TokenIconProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const sizeClasses = {
    sm: "w-6 h-6 text-sm",
    md: "w-8 h-8 text-lg",
    lg: "w-12 h-12 text-2xl",
    xl: "w-16 h-16 text-3xl"
  };

  const fallbackIcon = tokenEmojis[symbol.toUpperCase()] || symbol.charAt(0).toUpperCase();

  // If no src provided or image failed to load, show emoji/fallback
  if (!src || imageError || src.startsWith('https://cryptologos.cc')) {
    return (
      <div className={cn(
        "rounded-full flex items-center justify-center font-bold",
        "bg-gradient-to-br from-primary/20 to-primary-glow/20 border border-primary/30",
        sizeClasses[size],
        className
      )}>
        <span className="filter drop-shadow-sm">{fallbackIcon}</span>
      </div>
    );
  }

  return (
    <div className={cn("relative rounded-full overflow-hidden", sizeClasses[size], className)}>
      {imageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary-glow/20 border border-primary/30 rounded-full">
          <span className="text-lg font-bold">{fallbackIcon}</span>
        </div>
      )}
      <img
        src={src}
        alt={`${name} (${symbol})`}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-200",
          imageLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setImageLoading(false)}
        onError={() => {
          setImageError(true);
          setImageLoading(false);
        }}
      />
    </div>
  );
}