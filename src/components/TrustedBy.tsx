
import React from 'react';

const TrustedBy = () => {
  const companies = [
    'Acme Inc', 'Globex', 'Soylent', 'Initech', 
    'Umbrella', 'Cyberdyne', 'Hooli', 'Massive Dynamic'
  ];

  return (
    <div className="bg-accent py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider">
            Trusted by AI-driven organizations worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div key={index} className="h-8 flex items-center">
              <div className="text-foreground/40 font-semibold text-xl">{company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
