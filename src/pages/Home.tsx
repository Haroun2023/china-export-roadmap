import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, TrendingUp, Anchor, ShieldCheck } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FDFBF7]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <img 
               src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
               alt="Port logistics" 
               className="object-cover w-full h-full mix-blend-multiply"
             />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-8">
              <Anchor size={16} className="text-teal-700" />
              <span className="text-sm font-medium text-teal-800">China to Saudi Arabia Import Guide</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1] mb-8">
              Your Complete <span className="text-teal-700">Import Roadmap</span> for Electrical & Plumbing Materials
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-2xl">
              Navigate Saudi Arabia's import regulations with confidence. From SABER compliance to supplier selection, we guide you through every step of building a profitable import business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/roadmap"
                className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start Your Journey <ArrowRight size={20} />
              </Link>
              <Link 
                to="/calculator"
                className="bg-white border border-stone-300 hover:border-teal-600 hover:text-teal-700 text-stone-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-md flex items-center justify-center gap-2"
              >
                Calculate Budget <Calculator size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { label: 'Western Province Projects', value: '$613B+', sub: 'Market Value' },
              { label: 'Gross Profit Margins', value: '25-45%', sub: 'Potential Return' },
              { label: 'Months to Break Even', value: '6-12', sub: 'Typical Timeline' },
              { label: 'MEP Market CAGR', value: '10.2%', sub: 'Annual Growth' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col p-6 rounded-2xl hover:bg-stone-50 transition-colors">
                <span className="font-serif text-4xl lg:text-5xl font-bold text-teal-800 mb-2">{stat.value}</span>
                <span className="text-stone-900 font-medium text-lg mb-1">{stat.label}</span>
                <span className="text-stone-500 text-sm">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-stone-600">We've broken down the complex process of importing into manageable, actionable steps tailored for the Saudi market.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/roadmap" className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all">
              <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                <ShieldCheck className="text-teal-700 h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-3 group-hover:text-teal-700 transition-colors">Compliance Roadmap</h3>
              <p className="text-stone-600 leading-relaxed mb-4">Step-by-step guide to commercial registration, ZATCA, and SABER certification.</p>
              <div className="text-teal-700 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
              </div>
            </Link>

            <Link to="/suppliers" className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all">
               <div className="bg-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                <Anchor className="text-orange-600 h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">Verified Suppliers</h3>
              <p className="text-stone-600 leading-relaxed mb-4">Access our curated list of Chinese manufacturers with Saudi export experience.</p>
              <div className="text-orange-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Browse Directory <ArrowRight size={16} />
              </div>
            </Link>

            <Link to="/market-analysis" className="group bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all">
               <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <TrendingUp className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-3 group-hover:text-blue-600 transition-colors">Market Analysis</h3>
              <p className="text-stone-600 leading-relaxed mb-4">Deep dive into city-specific opportunities, logistics costs, and demand trends.</p>
              <div className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View Insights <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
