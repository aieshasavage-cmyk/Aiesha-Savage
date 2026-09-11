export type Job = {
  jobTitle: string
  summary: string
  startDate: string
  endDate?: string
  company: string
  location: string
  tags: Array<string>
  content: string
}

export type Education = {
  school: string
  summary: string
  startDate: string
  endDate?: string
  tags: Array<string>
  content: string
}

export const careerSummary =
  'I am a passionate and driven professional seeking opportunities that will leverage my extensive experience in frontend development while providing continuous growth and learning opportunities. My goal is to contribute to innovative projects that challenge me to expand my skill set and make meaningful impacts through technology.'

export const jobs: Array<Job> = [
  {
    jobTitle: 'Job Title 1',
    summary:
      'Summary of responsibilities and achievements for this role.',
    startDate: '2021-01-01',
    endDate: '2021-12-31',
    company: 'Company 1',
    location: 'Remote',
    tags: ['Skill 1', 'Skill 2', 'Skill 3'],
    content: 'Description of work done in this role.',
  },
  {
    jobTitle: 'Job Title 2',
    summary:
      'Summary of responsibilities and achievements for this role.',
    startDate: '2022-01-01',
    endDate: '2022-12-31',
    company: 'Company 2',
    location: 'Remote',
    tags: ['Skill 1', 'Skill 4', 'Skill 5'],
    content: 'Description of work done in this role.',
  },
]

export const education: Array<Education> = [
  {
    school: 'School 1',
    summary: 'Degree or Certificate Program',
    startDate: '2020-01-01',
    endDate: '2020-12-31',
    tags: ['Skill 1', 'Skill 2', 'Skill 3'],
    content: 'Description of the program and what was learned.',
  },
]
