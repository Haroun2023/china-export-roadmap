import React, { useState } from 'react';
import { SUPPLIERS } from '../constants';
import { Search, MapPin, Globe, Mail, Phone, Award, Filter, Briefcase, Star } from 'lucide-react';

export const Suppliers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Electrical' | 'Plumbing'>('All');
  const [activeTab, setActiveTab] = useState<'Direct' | 'Platforms'>('Direct');

  const filteredSuppliers = SUPPLIERS.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          supplier.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || supplier.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="font-serif text-4xl font-bold text-stone-900 mb-4">Verified Chinese Suppliers</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">Connect with top manufacturers of electrical and plumbing materials. All suppliers listed have export experience and can meet SASO certification requirements.</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 mb-8 sticky top-24 z-30">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={20} />
            <input 
              type="text" 
              placeholder="Search suppliers, products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-stone-50"
            />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {(['All', 'Electrical', 'Plumbing'] as const).map(cat => (
              <button 
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  categoryFilter === cat 
                    ? 'bg-teal-700 text-white' 
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'All' && <Filter size={14} className="inline mr-2" />}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200 mb-8">
        <button 
          onClick={() => setActiveTab('Direct')}
          className={`pb-3 px-1 text-sm font-medium border-b-2 mr-8 transition-colors ${
            activeTab === 'Direct' ? 'border-teal-700 text-teal-800' : 'border-transparent text-stone-500 hover:text-stone-700'
          }`}
        >
          Direct Suppliers ({filteredSuppliers.length})
        </button>
        <button 
          onClick={() => setActiveTab('Platforms')}
           className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'Platforms' ? 'border-teal-700 text-teal-800' : 'border-transparent text-stone-500 hover:text-stone-700'
          }`}
        >
          Sourcing Platforms
        </button>
      </div>

      {/* Grid */}
      {activeTab === 'Direct' ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSuppliers.map(supplier => (
            <div key={supplier.id} className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white ${supplier.category === 'Electrical' ? 'bg-yellow-400' : 'bg-blue-400'}`}>
                    {supplier.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900">{supplier.name}</h3>
                    <p className="text-sm text-stone-500">{supplier.description}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < supplier.rating ? "currentColor" : "none"} className={i < supplier.rating ? "text-yellow-400" : "text-stone-300"} />
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {supplier.subCategories.map(sub => (
                  <span key={sub} className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full border border-stone-200">
                    {sub}
                  </span>
                ))}
                {supplier.subCategories.length < 3 && <span className="px-2.5 py-1 bg-stone-100 text-stone-500 text-xs rounded-full">+1 more</span>}
              </div>

              {/* Certifications & Info */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center gap-2 text-stone-600">
                  <Award size={16} className="text-teal-600" />
                  <span>{supplier.certifications.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 text-stone-600">
                        <MapPin size={16} className="text-stone-400" />
                        <span>{supplier.location}</span>
                    </div>
                    <div className="font-medium text-stone-900">Min: {supplier.minOrder}</div>
                </div>
              </div>
              
              <hr className="border-stone-100 my-4" />

              {/* Contact */}
              <div className="space-y-2 mb-4">
                  <a href={supplier.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-teal-700 hover:underline">
                    <Globe size={16} /> {supplier.website.replace('https://', '')}
                  </a>
                   <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Mail size={16} className="text-stone-400" /> {supplier.email}
                  </div>
                   <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Phone size={16} className="text-stone-400" /> {supplier.phone}
                  </div>
              </div>

              <div className="bg-stone-50 rounded-lg p-3 text-xs text-stone-500 text-center border border-stone-100">
                  {supplier.stats}
              </div>
            </div>
          ))}
        </div>
      ) : (
          <div className="bg-white rounded-xl p-8 text-center border border-stone-200">
              <Briefcase size={48} className="mx-auto text-stone-300 mb-4" />
              <h3 className="text-lg font-medium text-stone-900 mb-2">Sourcing Platforms</h3>
              <p className="text-stone-600 mb-6">Use these verified platforms to find more suppliers.</p>
              <div className="flex justify-center gap-4">
                  <a href="#" className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-50">Alibaba.com</a>
                  <a href="#" className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-50">Made-in-China.com</a>
              </div>
          </div>
      )}

      {/* Footer Tips */}
      <div className="mt-16 bg-[#F5EAD6]/50 rounded-2xl p-8 border border-[#E8DCC2]">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Tips for Contacting Suppliers</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-semibold text-stone-900 mb-3">Before You Contact</h3>
                <ul className="space-y-2 text-stone-700 text-sm">
                    <li className="flex gap-2"><span className="text-orange-500">•</span> Prepare a detailed list of products with specifications</li>
                    <li className="flex gap-2"><span className="text-orange-500">•</span> Know your estimated order quantity (MOQ matters)</li>
                    <li className="flex gap-2"><span className="text-orange-500">•</span> Ask about SASO certification explicitly</li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-stone-900 mb-3">During Negotiation</h3>
                 <ul className="space-y-2 text-stone-700 text-sm">
                    <li className="flex gap-2"><span className="text-orange-500">•</span> Negotiate payment terms (30% deposit, 70% pre-ship)</li>
                    <li className="flex gap-2"><span className="text-orange-500">•</span> Use trade assurance for payment protection</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};
