import React from 'react';
import { Youtube, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="font-syne text-2xl font-bold mb-6">
              <span className="text-text-primary">Prompt</span>
              <span className="text-primary">Edit</span>
            </div>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              The AI marketplace for video creators. All the world's best models in one place.
            </p>
            <p className="text-text-ghost text-xs">
              © 2025 Paul Xavier International LLC
            </p>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              {['AI Tools', 'Pricing', 'Templates Library', 'Request a Tool'].map(link => (
                <li key={link}><a href="#" className="text-text-secondary text-sm hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About', 'Terms & Conditions', 'Privacy Policy', 'Earnings Disclaimer'].map(link => (
                <li key={link}><a href="#" className="text-text-secondary text-sm hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-bold mb-6">Connect</h4>
            <p className="text-text-secondary text-sm mb-6">Built for creators, by creators.</p>
            <div className="flex gap-4">
              {[Youtube, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-primary/20 hover:text-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-text-ghost text-[10px] mt-6 italic">Not affiliated with Facebook / Meta.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="text-[10px] text-text-ghost leading-relaxed text-center max-w-4xl mx-auto opacity-50">
            DISCLAIMER: This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc. We believe in being fully transparent with you. We do not believe in “get rich quick” programs. We believe in hard work, adding value and serving others. And that’s what our programs are designed to help you do. As stated by law, we can not and do not make any guarantees about your own ability to get results or earn any money with our ideas, information, programs or strategies. We don’t know you and, besides, your results in life are up to you. Agreed? We’re here to help by giving you our greatest strategies to move you forward, faster. However, nothing on this page or any of our websites or emails is a promise or guarantee of future earnings. Any financial numbers referenced here, or on any of our sites or emails, are simply estimates or projections or past results, and should not be considered exact, actual or as a promise of potential earnings - all numbers are illustrative only.
          </p>
        </div>
      </div>
    </footer>
  );
};
