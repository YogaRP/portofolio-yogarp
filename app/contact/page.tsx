'use client'

import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Label } from '../../components/ui/label'
import { Badge } from '../../components/ui/badge'
import { Separator } from '../../components/ui/separator'
import { Mail, MessageSquare, Send, Github, Linkedin, MapPin, Phone, Clock, Calendar, Coffee } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Navigation } from '../../components/layout/navigation'
import { Footer } from '../../components/layout/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real app, you'd send this data to your API
    console.log('Form submitted:', formData)
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '', projectType: '' })
    setIsSubmitting(false)
    
    // Show success message (you could use a toast notification)
    alert('Message sent successfully! I\'ll get back to you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'E-commerce',
    'SaaS Platform',
    'API Development',
    'Consulting',
    'Other'
  ]

  const availability = [
    { type: 'Full-time Opportunities', status: 'Open', color: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' },
    { type: 'Freelance Projects', status: 'Available', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' },
    { type: 'Consulting', status: 'Limited', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-16 px-6 lg:px-8 border-b">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let's Work Together</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can collaborate to create something amazing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-8 sticky top-24"
                >
                  {/* Contact Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Get in Touch</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <a 
                            href="mailto:hello@yoga-rizky.dev" 
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            hello@yoga-rizky.dev
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Phone</p>
                          <a 
                            href="tel:+6281234567890" 
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            +62 812-3456-7890
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">Jakarta, Indonesia</p>
                          <p className="text-xs text-muted-foreground">Remote Friendly</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium">Response Time</p>
                          <p className="text-muted-foreground">Within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Availability Status */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Availability</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {availability.map((item) => (
                        <div key={item.type} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.type}</span>
                          <Badge className={item.color}>
                            {item.status}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Social Links */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Connect</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-3">
                        <a
                          href="https://github.com/yoga-rizky"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <div>
                            <p className="font-medium">GitHub</p>
                            <p className="text-xs text-muted-foreground">@yoga-rizky</p>
                          </div>
                        </a>
                        <a
                          href="https://linkedin.com/in/yoga-rizky"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                          <div>
                            <p className="font-medium">LinkedIn</p>
                            <p className="text-xs text-muted-foreground">yoga-rizky</p>
                          </div>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="h-fit">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5" />
                        Send a Message
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Tell me about your project, and I'll get back to you with ideas and next steps.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject *</Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="What's this about?"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="projectType">Project Type</Label>
                            <select
                              id="projectType"
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="">Select project type</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project, timeline, budget, and any specific requirements. The more details you provide, the better I can help you!"
                            rows={6}
                            required
                          />
                        </div>

                        <Separator />

                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">What happens next?</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              I'll review your message within 24 hours
                            </li>
                            <li className="flex items-center gap-2">
                              <Coffee className="w-4 h-4" />
                              We can schedule a call to discuss details
                            </li>
                            <li className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4" />
                              I'll provide a detailed proposal and timeline
                            </li>
                          </ul>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full" 
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-4 text-muted-foreground">
                Quick answers to common questions about working together
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What's your typical project timeline?</h3>
                    <p className="text-sm text-muted-foreground">
                      Most projects take 2-8 weeks depending on complexity. Simple websites can be completed in 1-2 weeks, while complex applications may take 2-3 months.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Do you work with international clients?</h3>
                    <p className="text-sm text-muted-foreground">
                      Absolutely! I work with clients worldwide and am comfortable with different time zones. All communication is in English.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">What technologies do you specialize in?</h3>
                    <p className="text-sm text-muted-foreground">
                      I specialize in modern web technologies: Next.js, React, TypeScript, Node.js, and various databases. I'm always learning new technologies based on project needs.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Do you provide ongoing support?</h3>
                    <p className="text-sm text-muted-foreground">
                      Yes! I offer maintenance packages and ongoing support for all projects. This includes updates, bug fixes, and feature additions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}