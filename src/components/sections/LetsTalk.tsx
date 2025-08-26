import React, { useState } from 'react';
import Button from '../ui/Button';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const LetsTalk: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Netlify Forms Integration
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
            Let's Talk
          </h2>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
          Lust, gemeinsam was zu starten? Ich freue mich über spannende Projekte, Kooperationen oder eine einfache Nachricht.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p className="font-medium">Nachricht erfolgreich gesendet!</p>
              <p className="text-sm">Ich melde mich bald bei Ihnen zurück.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="font-medium">Fehler beim Senden der Nachricht</p>
              <p className="text-sm">Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt per E-Mail.</p>
            </div>
          )}

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <input name="bot-field" />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white border border-black rounded-lg focus:ring-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white border border-black rounded-lg focus:ring-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="email@beispiel.de"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
                rows={5}
                className="w-full px-4 py-3 bg-white border border-black rounded-lg focus:ring-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Nachricht..."
              />
            </div>
            
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Wird gesendet...
                </div>
              ) : (
                'Nachricht senden'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
