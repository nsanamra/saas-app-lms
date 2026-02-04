import React from 'react'
import { Button } from "@/components/ui/button"
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    // 1. Main Container: "container mx-auto" centers the content and stops it from overflowing
    <div className="container mx-auto px-4 py-8">
      
      <h1 className="text-2xl font-bold mb-6">Popular Companions</h1>
      
      {/* 2. The Grid: This forces the cards to sit side-by-side (3 columns on large screens) */}
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>

        <CompanionCard
            id="123"
            name="Verba The Vocabulary Builder"
            topic="Language"
            subject="English"
            duration={45}
            color='#ffda6e'
        />
        <CompanionCard
            id="456"
            name="Countsy The Number Wizard"
            topic="Derivatives and Integrals"
            subject="Maths"
            duration={30}
            color='#e5d0ff'
        />
        <CompanionCard
            id="789"
            name="Neura The Brainy Explorer"
            topic="Neural Network of the Brain"
            subject="Science"
            duration={35}
            color='#bde7ff'
        />
    
      </section>
    
      {/* 3. Recent Sessions and CTA side by side */}
      <section className='flex flex-col lg:flex-row gap-6 items-start'>
        <div className="flex-1 min-w-0">
          <CompanionsList 
              title="Recently Completed Sessions"
              companions={recentSessions}
          />
        </div>
        <div className="w-full lg:w-[450px] flex-shrink-0">
          <CTA />
        </div>
      </section>
    
    </div>
  )
}

export default Page