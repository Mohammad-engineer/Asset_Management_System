import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const JOB_DETAILS_TABS = [
  { label: 'Job content', value: 'content' },
  { label: 'Candidates', value: 'candidates' },
];

export const JOB_SKILL_OPTIONS = [
    'کسب و کار',
    'مدیریت',
    'فروش',
    'تکنولوژی',
    'آموزش',

  // 'UI',
  // 'UX',
  // 'Html',
  // 'JavaScript',
  // 'TypeScript',
  // 'Communication',
  // 'Problem Solving',
  // 'Leadership',
  // 'Time Management',
  // 'Adaptability',
  // 'Collaboration',
  // 'Creativity',
  // 'Critical Thinking',
  // 'Technical Skills',
  // 'Customer Service',
  // 'Project Management',
  // 'Problem Diagnosis',
];

export const JOB_WORKING_SCHEDULE_OPTIONS = [
  'Monday to Friday',
  'Weekend availability',
  'Day shift',
];

export const JOB_EMPLOYMENT_TYPE_OPTIONS = [
  { label: 'خرید', value: 'Full-time' },
  { label: 'فروش', value: 'Part-time' },
  { label: 'اجاره', value: 'On demand' },
  { label: 'آموزش', value: 'Negotiable' },
];

export const JOB_EXPERIENCE_OPTIONS = [
  { label: 'بدون سابقه', value: 'No experience' },
  { label: '1 سال سابقه', value: '1 year exp' },
  { label: '2 سال سابقه', value: '2 year exp' },
  { label: 'بیشتر از 3 سال سابقه', value: '> 3 year exp' },
];

export const JOB_BENEFIT_OPTIONS = [
  { label: 'مورد اول', value: 'Free parking' },
  { label: 'مورد دوم', value: 'Bonus commission' },
  { label: 'مورد سوم', value: 'Travel' },
  { label: 'مورد چهارم', value: 'Device support' },
  { label: 'مورد پنجم', value: 'Health care' },
  { label: 'مورد ششم', value: 'Training' },
  { label: 'مورد هفتم', value: 'Health insurance' },
  { label: 'مورد هشتم', value: 'Retirement plans' },
  { label: 'مورد نهم', value: 'Paid time off' },
  { label: 'مورد دهم', value: 'Flexible work schedule' },
];

export const JOB_PUBLISH_OPTIONS = [
  { label: 'Published', value: 'published' },
  { label: 'Draft', value: 'draft' },
];

export const JOB_SORT_OPTIONS = [
  { label: 'Latest', value: 'latest' },
  { label: 'Popular', value: 'popular' },
  { label: 'Oldest', value: 'oldest' },
];

const CANDIDATES = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

const CONTENT = `
<h6>Job description</h6>

<p>Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.</p>

<h6>Key responsibilities</h6>

<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>

<h6>Why You'll love working here</h6>

<ul>
  <li>Working with agency for design drawing detail, quotation and local production.</li>
  <li>Produce window displays, signs, interior displays, floor plans and special promotions displays.</li>
  <li>Change displays to promote new product launches and reflect festive or seasonal themes.</li>
  <li>Planning and executing the open/renovation/ closing store procedure.</li>
  <li>Follow‐up store maintenance procedure and keep updating SKU In &amp; Out.</li>
  <li>Monitor costs and work within budget.</li>
  <li>Liaise with suppliers and source elements.</li>
</ul>
`;

export const _jobs = [...Array(12)].map((_, index) => {
  const publish = index % 3 ? 'published' : 'draft';

  const salary = {
    type: (index % 5 && 'Custom') || 'Hourly',
    price: _mock.number.price(index),
    negotiable: _mock.boolean(index),
  };

  const benefits = JOB_BENEFIT_OPTIONS.slice(0, 3).map((option) => option.label);

  const experience =
    JOB_EXPERIENCE_OPTIONS.map((option) => option.label)[index] || JOB_EXPERIENCE_OPTIONS[1].label;

  const employmentTypes = (index % 2 && ['Part-time']) ||
    (index % 3 && ['On demand']) ||
    (index % 4 && ['Negotiable']) || ['Full-time'];

  const company = {
    name: _mock.companyNames(index),
    logo: _mock.image.company(index),
    phoneNumber: _mock.phoneNumber(index),
    fullAddress: _mock.fullAddress(index),
  };

  return {
    id: _mock.id(index),
    salary,
    publish,
    company,
    benefits,
    experience,
    employmentTypes,
    content: CONTENT,
    candidates: CANDIDATES,
    role: _mock.role(index),
    title: _mock.jobTitle(index),
    createdAt: _mock.time(index),
    expiredDate: _mock.time(index),
    skills: JOB_SKILL_OPTIONS.slice(0, 3),
    totalViews: _mock.number.nativeL(index),
    locations: [_mock.countryNames(1), _mock.countryNames(2)],
    workingSchedule: JOB_WORKING_SCHEDULE_OPTIONS.slice(0, 2),
  };
});
