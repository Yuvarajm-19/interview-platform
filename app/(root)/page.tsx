import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/app/components/InterviewCard'
const Page = () => {
  return (
    <>
      <section className="card-cta flex items-center justify-between">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get interview ready with AI-Powered Practice</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="Robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className='interview-section'>
        {dummyInterviews.map((interview) => (
            <InterviewCard {...interview}key={interview.id}/>
        ))}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className="interviews-section">
            {dummyInterviews.map((interview) => (
            <InterviewCard {...interview}key={interview.id}/>
        ))}
        {/*<p>You have&apos;t taken any interviews</p>*/}
        </div>

      </section>
    </>
  )
}

export default Page
