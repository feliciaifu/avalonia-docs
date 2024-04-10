import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  LiveRegular,
  MicRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

 

  export default function HeroSection() {
    return (
      <>
        <section className="no-underline-links px-4 pt-16 lg:py-0 bg-gradient-to-t from-indigo-50 to-neutral-50">
          <div className="flex flex-col items-center justify-between py-32">
            <h2 className="mb-4 font-jakarta text-5xl font-bold text-black">
              考勤排班
            </h2>
            <p className="max-w-xl text-center text-gray-500 mt-5">
              详细设计文档            
            </p>
            <div>
              <Link
                className="button button--secondary button--lg "
                to="/docs/welcome">
                Get Started! 
              </Link>
            </div>
          </div>
        </section>
    
      </>
    );
  }