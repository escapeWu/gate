import FeatureTagList from '@/components/about/about-feature-list'
import AboutIntroduce from '@/components/about/about-introduce'
import AboutMotto from '@/components/about/about-motto'
import AboutRecentWork from '@/components/about/about-recent-work'
export const metadata = {
  title: 'FullStack Web Developer shancw'
}

export default async function IndexPage() {
  return (
    <div className='mt-[6vh] mb-[2vh] sm:mt-xl'>
      <AboutMotto />
      <div className='mt-6 flex flex-col items-start gap-6 sm:gap-8 lg:mt-14 lg:flex-row lg:gap-16'>
        <FeatureTagList />
      </div>
      <div className='mt-24'>
        <AboutRecentWork />
      </div>
      <div className='mt-12'>
        <AboutIntroduce />
      </div>
    </div>
  )
}
