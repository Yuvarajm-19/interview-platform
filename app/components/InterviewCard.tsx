import dayjs from 'dayjs' 
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRandomInterviewCover } from '@/lib/utils'
import DisplayTechIcons from './DisplayTechIcons'

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null

  const normalizeType = /mix/gi.test(type) ? 'Mixed' : type
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format('MMM D, YYYY')

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview relative p-4">
    
        <div className="absolute top-5 right-5 w-fit px-2 py-1 rounded-bl-lg bg-light-600">
          <p className="badge-text">{normalizeType}</p>
        </div>

        <Image
          src={getRandomInterviewCover()}
          alt="cover image"
          width={90}
          height={90}
          className="rounded-full object-cover size-[70px]"
        />

        {/* Title */}
        <h3 className="mt-3 capitalize">{role} Interview</h3>

        {/* Date + Score */}
        <div className="flex flex-row gap-5 mt-3 items-center">
          <div className="flex items-center gap-2">
            <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
            <p>{formattedDate}</p>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/star.svg" alt="star" width={22} height={22} />
            <p>{feedback?.totalScore || '---'}/100</p>
          </div>
        </div>

        {/* Assessment */}
        <p className="line-clamp-2 mt-5">
          {feedback?.finalAssessment ||
            "You haven't taken the interview yet. Take it now to improve your skills."}
        </p>

        {/* Tech stack + Action */}
        <div className="flex flex-row justify-between items-center mt-4">
          <DisplayTechIcons techStack={techstack} />

          <Link
            href={
              feedback
                ? `/interview/${interviewId}/feedback`
                : `/interview/${interviewId}`
            }
            className="btn-primary"
          >
            {feedback ? 'View Feedback' : 'View Interview'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InterviewCard
