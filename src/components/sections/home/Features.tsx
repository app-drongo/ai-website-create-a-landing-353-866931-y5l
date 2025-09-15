'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import {
  MousePointer2,
  Shield,
  Smartphone,
  Zap,
  BarChart3,
  Palette,
  Code2,
  Database,
  Webhook,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: MousePointer2,
      title: 'Drag & Drop Builder',
      description:
        'Create professional forms in minutes with our intuitive visual editor. No coding required.',
      badge: 'Core Feature',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOC 2 compliant with 256-bit SSL encryption. Your form data is protected at every level.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description:
        'Forms automatically adapt to any screen size. Perfect user experience on all devices.',
      badge: 'Design',
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description:
        'Publish forms with one click. Embed anywhere or use our hosted pages for immediate use.',
      badge: 'Performance',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description:
        'Track form performance, conversion rates, and user behavior with detailed insights.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'Custom Styling',
      description:
        'Match your brand perfectly with custom themes, colors, fonts, and CSS overrides.',
      badge: 'Customization',
    },
    {
      icon: Code2,
      title: 'Developer API',
      description:
        'RESTful API and webhooks for seamless integration with your existing tech stack.',
      badge: 'Integration',
    },
    {
      icon: Database,
      title: 'Smart Data Management',
      description:
        'Automatic data validation, duplicate detection, and export to 20+ formats including CSV, Excel.',
      badge: 'Data',
    },
    {
      icon: Webhook,
      title: 'Workflow Automation',
      description:
        'Connect with Zapier, Slack, HubSpot, and 500+ apps. Automate your entire lead process.',
      badge: 'Automation',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Powerful Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Build Forms That
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Convert & Perform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to create, deploy, and optimize high-converting forms. Trusted by
            50,000+ businesses worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to build your first high-converting form?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePrimaryAction}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Building Forms
            </button>
            <button
              onClick={handleSecondaryAction}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              View Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
