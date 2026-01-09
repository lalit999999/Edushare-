
import React from 'react';
import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, Upload, Download, User, FileText, Shield } from 'lucide-react';

const faqs = [
  {
    id: '1',
    category: 'Getting Started',
    question: 'How do I create an account?',
    answer: 'Click on the "Register" button in the navigation bar, fill in your details including name, email, college, department, and semester. Once submitted, you can start using the platform immediately.'
  },
  {
    id: '2',
    category: 'Getting Started',
    question: 'Is EduShare free to use?',
    answer: 'Yes! EduShare is completely free for all students. Our mission is to make quality educational resources accessible to everyone.'
  },
  {
    id: '3',
    category: 'Uploading Resources',
    question: 'What types of files can I upload?',
    answer: 'You can upload PDF files for notes, assignments, and previous year questions. For projects, you can upload ZIP files containing your code and documentation. Maximum file size is 50MB.'
  },
  {
    id: '4',
    category: 'Uploading Resources',
    question: 'How do I upload a resource?',
    answer: 'After logging in, click on the "Upload" button in the navigation bar. Fill in the resource details, select your file, and click "Upload Resource". Make sure to provide a clear title and description.'
  },
  {
    id: '5',
    category: 'Uploading Resources',
    question: 'Can I edit or delete my uploaded resources?',
    answer: 'Currently, you can view all your uploads in your profile. For editing or deletion requests, please contact our support team through the Contact page.'
  },
  {
    id: '6',
    category: 'Downloading Resources',
    question: 'Do I need an account to download resources?',
    answer: 'Yes, you need to create a free account to download resources. This helps us maintain quality and track resource usage.'
  },
  {
    id: '7',
    category: 'Downloading Resources',
    question: 'How do I find specific resources?',
    answer: 'Use the search bar on the Resources page and apply filters for subject, semester, and resource type. You can also sort by latest, most popular, or highest rated.'
  },
  {
    id: '8',
    category: 'Account & Profile',
    question: 'How do I update my profile information?',
    answer: 'Go to your Profile page and click the "Edit Profile" button. You can update your name, college, department, and semester. Click "Save" when done.'
  },
  {
    id: '9',
    category: 'Account & Profile',
    question: 'How can I see my activity history?',
    answer: 'Visit your Profile page and navigate to the "Activity History" tab to see all your uploads, downloads, and saved resources.'
  },
  {
    id: '10',
    category: 'Safety & Quality',
    question: 'How do you ensure resource quality?',
    answer: 'We rely on our community rating system. Users can rate and review resources. Low-rated content is reviewed by our team. Report any inappropriate content through the resource page.'
  },
  {
    id: '11',
    category: 'Safety & Quality',
    question: 'What if I find inappropriate content?',
    answer: 'Please report it immediately through the Contact page with the resource link. We take content violations seriously and will review it within 24 hours.'
  },
  {
    id: '12',
    category: 'Technical Issues',
    question: 'What browsers are supported?',
    answer: 'EduShare works best on the latest versions of Chrome, Firefox, Safari, and Edge. Make sure JavaScript is enabled for full functionality.'
  }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaqId, setOpenFaqId] = useState(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Can We Help?
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions or contact our support team
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center space-x-3 px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all group cursor-pointer">
            <User className="w-10 h-10 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Getting Started</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Learn how to create an account and start using EduShare</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-green-500 dark:hover:border-green-500 transition-all group cursor-pointer">
            <Upload className="w-10 h-10 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Uploading Resources</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Guidelines for sharing your study materials</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all group cursor-pointer">
            <Download className="w-10 h-10 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Downloading Resources</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">How to find and download study materials</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-orange-500 dark:hover:border-orange-500 transition-all group cursor-pointer">
            <Shield className="w-10 h-10 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Safety & Quality</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Our commitment to safe, quality content</p>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No results found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try searching with different keywords</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map(faq => (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {faq.category}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                    </div>
                    {openFaqId === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                    )}
                  </button>
                  {openFaqId === faq.id && (
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-12 bg-linear-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Still Need Help?</h2>
          <p className="text-blue-100 mb-6">Can't find what you're looking for? Our support team is here to help!</p>
          <button className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}