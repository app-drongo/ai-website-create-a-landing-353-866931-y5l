'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap, CheckCircle, BarChart3, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Start building forms
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true); // Watch product demo
  };

  const handleBadgeAction = () => {
    router.push('/'); // View AI features
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <Zap className="size-4 mr-2" />
              New: AI-Powered Form Generation
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Build Professional Forms
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Without Code
              </span>
              In Minutes
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Create stunning, responsive forms with our drag-and-drop builder. Collect data,
              automate workflows, and boost conversions with FormFlow's powerful no-code platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Build Your First Form
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                View Live Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  25,000+ businesses trust FormFlow
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 from 2,400+ reviews</span>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="size-4 text-primary" />
                <span>No coding required</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <BarChart3 className="size-4 text-primary" />
                <span>Real-time analytics</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="size-4 text-primary" />
                <span>Enterprise security</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted aspect-video flex items-center justify-center relative overflow-hidden">
                  {/* Form Builder Interface Mockup */}
                  <div className="absolute inset-4 bg-background rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="size-3 bg-primary rounded-full" />
                      <div className="size-3 bg-accent rounded-full" />
                      <div className="size-3 bg-secondary rounded-full" />
                      <div className="ml-auto text-xs text-muted-foreground">FormFlow Builder</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded" />
                        <div className="h-8 bg-muted/60 rounded border-2 border-dashed border-primary/30" />
                        <div className="h-3 bg-muted rounded w-3/4" />
                        <div className="h-8 bg-muted/60 rounded" />
                        <div className="h-6 bg-primary/20 rounded w-1/2" />
                      </div>
                      <div className="bg-muted/30 rounded p-2">
                        <div className="text-xs text-muted-foreground mb-2">Drag & Drop</div>
                        <div className="space-y-1">
                          <div className="h-4 bg-primary/20 rounded text-xs flex items-center px-2">
                            Text Input
                          </div>
                          <div className="h-4 bg-accent/20 rounded text-xs flex items-center px-2">
                            Dropdown
                          </div>
                          <div className="h-4 bg-secondary/20 rounded text-xs flex items-center px-2">
                            Checkbox
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse flex items-center justify-center">
                <Zap className="size-4 text-background" />
              </div>
              <div className="absolute -bottom-4 -right-4 size-6 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-secondary rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
