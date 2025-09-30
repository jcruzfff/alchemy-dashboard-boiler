'use client';

import React from 'react';

/**
 * Example component demonstrating the new design system
 * This shows how to use the semantic tokens and design system classes
 * for future components while keeping existing dashboard intact
 */
export default function DesignSystemExample() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-h1 text-primary">Design System Example</h1>
      
      {/* Color Palette */}
      <section className="space-y-4">
        <h2 className="text-h2 text-primary">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm font-medium text-primary">Blue 50</div>
            <div className="text-xs text-secondary">#ecf3ff</div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <div className="text-sm font-medium text-primary">Blue 100</div>
            <div className="text-xs text-secondary">#dce9ff</div>
          </div>
          <div className="bg-blue-600 p-4 rounded-lg">
            <div className="text-sm font-medium text-white">Blue 600</div>
            <div className="text-xs text-blue-100">#363ff9</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-sm font-medium text-primary">Gray 100</div>
            <div className="text-xs text-secondary">#f5f5f5</div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-4">
        <h2 className="text-h2 text-primary">Typography</h2>
        <div className="space-y-2">
          <h1 className="text-h1 text-primary">Heading 1 - Page titles</h1>
          <h2 className="text-h2 text-primary">Heading 2 - Section titles</h2>
          <h3 className="text-h3 text-primary">Heading 3 - Subsections</h3>
          <h4 className="text-h4 text-primary">Heading 4 - Card titles</h4>
          <p className="text-body-lg text-primary">Body Large - 16px text</p>
          <p className="text-body text-secondary">Body - 14px default text</p>
          <p className="text-body-sm text-tertiary">Body Small - 12px small text</p>
          <p className="text-label text-primary">Label - 14px form labels</p>
          <p className="text-caption text-tertiary">Caption - 12px captions</p>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-h2 text-primary">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-brand text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Primary Button
          </button>
          <button className="bg-subtle text-primary border border-primary px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            Secondary Button
          </button>
          <button className="bg-success text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            Success Button
          </button>
          <button className="bg-warning text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
            Warning Button
          </button>
          <button className="bg-error text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
            Error Button
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-h2 text-primary">Cards</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-secondary border border-primary rounded-lg p-6 shadow">
            <h3 className="text-h3 text-primary mb-2">Card Title</h3>
            <p className="text-body text-secondary mb-4">This is a card using the design system colors and spacing.</p>
            <button className="bg-brand text-white px-3 py-1 rounded text-sm">
              Action
            </button>
          </div>
          <div className="bg-brand-subtle border border-brand rounded-lg p-6 shadow">
            <h3 className="text-h3 text-brand mb-2">Brand Card</h3>
            <p className="text-body text-secondary mb-4">This card uses brand colors for highlighting important content.</p>
            <button className="bg-brand text-white px-3 py-1 rounded text-sm">
              Primary Action
            </button>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="space-y-4">
        <h2 className="text-h2 text-primary">Form Elements</h2>
        <div className="max-w-md space-y-4">
          <div>
            <label className="text-label text-primary block mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full border border-primary rounded px-3 py-2 text-body focus-visible:border-brand focus-visible:shadow-focus"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-label text-primary block mb-1">Message</label>
            <textarea 
              className="w-full border border-primary rounded px-3 py-2 text-body focus-visible:border-brand focus-visible:shadow-focus"
              rows={3}
              placeholder="Enter your message"
            />
          </div>
        </div>
      </section>

      {/* Status Indicators */}
      <section className="space-y-4">
        <h2 className="text-h2 text-primary">Status Indicators</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-success-subtle text-success px-3 py-1 rounded-full text-sm">
            Success
          </div>
          <div className="bg-warning-subtle text-warning px-3 py-1 rounded-full text-sm">
            Warning
          </div>
          <div className="bg-error-subtle text-error px-3 py-1 rounded-full text-sm">
            Error
          </div>
          <div className="bg-brand-subtle text-brand px-3 py-1 rounded-full text-sm">
            Info
          </div>
        </div>
      </section>
    </div>
  );
}
