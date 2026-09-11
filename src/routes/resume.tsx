import { createFileRoute } from '@tanstack/react-router'
import { marked } from 'marked'

import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '~/components/ui/hover-card'
import { Separator } from '~/components/ui/separator'
import { careerSummary, education, jobs } from '~/content/resume'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div className="min-h-screen p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">My Resume</h1>
          <p className="text-lg">Professional Experience &amp; Education</p>
          <Separator className="mt-8" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Career Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <p className="flex-1 leading-relaxed">{careerSummary}</p>
              <img
                src="/headshot-on-white.jpg"
                alt="Professional headshot"
                className="w-44 h-52 rounded-2xl object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Work Experience</h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.jobTitle}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{job.jobTitle}</CardTitle>
                      <p className="font-medium">
                        {job.company} - {job.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {job.startDate} - {job.endDate || 'Present'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 leading-relaxed">{job.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <HoverCard key={tag}>
                        <HoverCardTrigger>
                          <Badge variant="outline" className="cursor-pointer">
                            {tag}
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64">
                          <p className="text-sm">
                            Experience with {tag} in professional development
                          </p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                  {job.content && (
                    <div
                      className="mt-6 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: marked(job.content) as string,
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Education</h2>
          <div className="space-y-6">
            {education.map((entry) => (
              <Card key={entry.school}>
                <CardHeader>
                  <CardTitle className="text-xl">{entry.school}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{entry.summary}</p>
                  {entry.content && (
                    <div
                      className="mt-6 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: marked(entry.content) as string,
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
