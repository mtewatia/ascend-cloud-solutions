import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              These terms govern your use of our services. Please read them carefully.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing or using CloudForge's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using or accessing our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  CloudForge provides AWS cloud consulting services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Cloud migration and modernization services</li>
                  <li>AWS Well-Architected reviews and optimization</li>
                  <li>DevOps and infrastructure automation</li>
                  <li>Security and compliance consulting</li>
                  <li>Managed cloud services and support</li>
                  <li>Training and knowledge transfer</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts and Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Creation</h4>
                  <p className="text-muted-foreground">
                    You may be required to create an account to access certain services. You are responsible 
                    for maintaining the confidentiality of your account credentials and for all activities 
                    that occur under your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">User Conduct</h4>
                  <p className="text-muted-foreground">
                    You agree not to use our services for any unlawful purpose or in any way that could 
                    damage, disable, overburden, or impair our services or interfere with any other party's 
                    use of our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Service Agreements and SOWs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Specific consulting engagements will be governed by separate Service Agreements 
                  or Statements of Work (SOWs) that will include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Detailed scope of work and deliverables</li>
                  <li>Project timelines and milestones</li>
                  <li>Pricing and payment terms</li>
                  <li>Specific terms and conditions for the engagement</li>
                  <li>Service level agreements and support terms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Fees and Billing</h4>
                  <p className="text-muted-foreground">
                    Fees for services will be specified in the applicable Service Agreement or SOW. 
                    Payment terms are typically net 30 days from invoice date unless otherwise specified.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Late Payments</h4>
                  <p className="text-muted-foreground">
                    Late payments may be subject to interest charges of 1.5% per month or the maximum 
                    rate permitted by law, whichever is less.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Our IP</h4>
                  <p className="text-muted-foreground">
                    All intellectual property rights in our services, methodologies, tools, and content 
                    remain the exclusive property of CloudForge or our licensors.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Client IP</h4>
                  <p className="text-muted-foreground">
                    You retain ownership of your data and intellectual property. We will only use your 
                    intellectual property as necessary to provide the agreed services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain strict confidentiality regarding all client information and data. 
                  Both parties agree to protect confidential information disclosed during the 
                  course of our engagement and not to use such information for any purpose 
                  other than the provision of services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLOUDFORGE SHALL NOT BE LIABLE FOR ANY 
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING 
                  WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
                <p className="text-muted-foreground">
                  Our total liability for any claims arising out of or related to these terms or 
                  our services shall not exceed the amount paid by you to CloudForge in the 
                  twelve (12) months preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold CloudForge harmless from any claims, damages, 
                  losses, or expenses arising from your use of our services, violation of these terms, 
                  or infringement of any third party rights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Either party may terminate a service engagement in accordance with the terms 
                  specified in the applicable Service Agreement or SOW. These Terms of Service 
                  remain in effect until terminated.
                </p>
                <p className="text-muted-foreground">
                  We may terminate your access to our services immediately if you breach these terms 
                  or engage in prohibited conduct.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with the laws of 
                  the State of Delaware, without regard to its conflict of law provisions. 
                  Any disputes shall be resolved in the federal or state courts located in Delaware.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify you of 
                  material changes by posting the updated terms on our website. Your continued 
                  use of our services after such changes constitutes acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> legal@cloudforge.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Technology Drive, San Francisco, CA 94105</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;