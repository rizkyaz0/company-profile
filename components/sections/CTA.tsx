import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function CTA() {
  return (
    <section className="container mx-auto px-6 py-20">
      <Card className="text-center bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Ready to Get Started?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            Join thousands of developers building apps with modern design and
            dark mode support.
          </p>
          <Button size="lg" className="" variant="secondary">
            Sign Up Now
          </Button>
          
        </CardContent>
      </Card>
    </section>
  );
}
