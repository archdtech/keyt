"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard,
  Brain,
  Users,
  Target,
  Building,
  Mail,
  BarChart3,
  Settings,
  TrendingUp,
  Award,
  Globe,
  Lightbulb,
  Menu,
  X,
  ChevronDown,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/venture-studio",
    icon: <LayoutDashboard className="w-4 h-4" />,
  },
  {
    title: "Intelligent Matching",
    href: "/venture-studio/matching",
    icon: <Brain className="w-4 h-4" />,
    badge: "AI",
    children: [
      {
        title: "Founder Matches",
        href: "/venture-studio/matching/founders",
        icon: <Users className="w-4 h-4" />,
      },
      {
        title: "Company Analysis",
        href: "/venture-studio/matching/companies",
        icon: <Building className="w-4 h-4" />,
      },
      {
        title: "Skill Gap Analysis",
        href: "/venture-studio/matching/skills",
        icon: <Target className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Applications",
    href: "/venture-studio/applications",
    icon: <Target className="w-4 h-4" />,
    badge: "12",
    children: [
      {
        title: "All Applications",
        href: "/venture-studio/applications/all",
        icon: <Users className="w-4 h-4" />,
      },
      {
        title: "Screening Queue",
        href: "/venture-studio/applications/screening",
        icon: <BarChart3 className="w-4 h-4" />,
      },
      {
        title: "Interview Schedule",
        href: "/venture-studio/applications/interviews",
        icon: <Award className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Portfolio",
    href: "/venture-studio/portfolio",
    icon: <Building className="w-4 h-4" />,
    children: [
      {
        title: "Portfolio Companies",
        href: "/venture-studio/portfolio/companies",
        icon: <Building className="w-4 h-4" />,
      },
      {
        title: "Performance Metrics",
        href: "/venture-studio/portfolio/performance",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        title: "Success Stories",
        href: "/venture-studio/portfolio/success",
        icon: <Award className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Lead Nurturing",
    href: "/venture-studio/nurturing",
    icon: <Mail className="w-4 h-4" />,
    badge: "3",
    children: [
      {
        title: "Email Campaigns",
        href: "/venture-studio/nurturing/campaigns",
        icon: <Mail className="w-4 h-4" />,
      },
      {
        title: "Lead Segmentation",
        href: "/venture-studio/nurturing/segments",
        icon: <Users className="w-4 h-4" />,
      },
      {
        title: "Automation Rules",
        href: "/venture-studio/nurturing/automation",
        icon: <Settings className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Analytics",
    href: "/venture-studio/analytics",
    icon: <BarChart3 className="w-4 h-4" />,
    children: [
      {
        title: "Matching Analytics",
        href: "/venture-studio/analytics/matching",
        icon: <Brain className="w-4 h-4" />,
      },
      {
        title: "Conversion Metrics",
        href: "/venture-studio/analytics/conversions",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        title: "ROI Analysis",
        href: "/venture-studio/analytics/roi",
        icon: <DollarSign className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Settings",
    href: "/venture-studio/settings",
    icon: <Settings className="w-4 h-4" />,
    children: [
      {
        title: "General Settings",
        href: "/venture-studio/settings/general",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        title: "AI Configuration",
        href: "/venture-studio/settings/ai",
        icon: <Brain className="w-4 h-4" />,
      },
      {
        title: "Email Templates",
        href: "/venture-studio/settings/templates",
        icon: <Mail className="w-4 h-4" />,
      },
    ],
  },
];

export default function VentureStudioNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href === "/venture-studio") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.title);
    const active = isActive(item.href);

    return (
      <div key={item.href} className="w-full">
        <Collapsible open={isExpanded} onOpenChange={() => toggleExpanded(item.title)}>
          <CollapsibleTrigger asChild>
            <Link
              href={item.href}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                active 
                  ? "bg-purple-100 text-purple-700 font-medium" 
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              style={{ paddingLeft: `${level * 12 + 12}px` }}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.title}</span>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </div>
              {hasChildren && (
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    isExpanded ? "transform rotate-180" : ""
                  }`} 
                />
              )}
            </Link>
          </CollapsibleTrigger>
          
          {hasChildren && (
            <CollapsibleContent className="mt-1 space-y-1">
              {item.children?.map((child) => renderNavItem(child, level + 1))}
            </CollapsibleContent>
          )}
        </Collapsible>
      </div>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Venture Studio</h1>
                <p className="text-xs text-gray-500">Intelligent Platform</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => renderNavItem(item))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-900">AI Insights</span>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                3 new high-potential matches this week
              </p>
              <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                View Insights
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}