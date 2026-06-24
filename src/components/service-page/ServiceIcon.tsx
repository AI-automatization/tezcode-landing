import {
  LifeBuoy, Flame, BarChart2, Puzzle, Link2, Globe, MessageCircle,
  Search, Zap, Rocket, BookOpen, ShoppingCart, Package, FileText,
  Monitor, Smartphone, Bot, Wrench, Receipt, Users, Banknote,
  CreditCard, Bell, Store, Wifi, Ruler, Calendar, FolderOpen,
  DollarSign, Phone, CheckCircle2, Timer, TrendingUp, ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "life-buoy": LifeBuoy,
  "flame": Flame,
  "bar-chart-2": BarChart2,
  "puzzle": Puzzle,
  "link-2": Link2,
  "globe": Globe,
  "message-circle": MessageCircle,
  "search": Search,
  "zap": Zap,
  "rocket": Rocket,
  "book-open": BookOpen,
  "shopping-cart": ShoppingCart,
  "package": Package,
  "file-text": FileText,
  "monitor": Monitor,
  "smartphone": Smartphone,
  "bot": Bot,
  "wrench": Wrench,
  "receipt": Receipt,
  "users": Users,
  "banknote": Banknote,
  "credit-card": CreditCard,
  "bell": Bell,
  "store": Store,
  "wifi": Wifi,
  "ruler": Ruler,
  "calendar": Calendar,
  "folder-open": FolderOpen,
  "dollar-sign": DollarSign,
  "phone": Phone,
  "check-circle-2": CheckCircle2,
  "timer": Timer,
  "trending-up": TrendingUp,
  "clipboard-list": ClipboardList,
};

export function ServiceIcon({ name, className = "w-6 h-6 text-white" }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name];
  if (!Icon) return <span className="text-xl">{name}</span>;
  return <Icon className={className} />;
}
