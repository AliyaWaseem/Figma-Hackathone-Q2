import React from 'react';
import Link from "next/link";

export default function Lists() {
  return (
    <section className="py-10 px-10">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-0 lg:px-20">
              {/* Icons */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Icons</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-text-primary-gray">Air Force 1</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Huarache</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Air Max 90</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Air Max 95</Link></li>
                </ul>
              </div>

              {/* Shoes */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Shoes</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-text-primary-gray">All Shoes</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Custom Shoes</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Jordan Shoes</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Running Shoes</Link></li>
                </ul>
              </div>

              {/* Clothing */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Clothing</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-text-primary-gray">All Clothing</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Modest Wear</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Hoodies & Pullovers</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Shirts & Tops</Link></li>
                </ul>
              </div>

              {/* Kids */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Kids'</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-text-primary-gray">Infant & Toddler Shoes</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Kids' Shoes</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Kids' Jordan Shoes</Link></li>
                  <li><Link href="#" className="text-text-primary-gray">Kids' Basketball Shoes</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </section>
  );
}
