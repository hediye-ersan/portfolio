import Profile from '../components/Profile'
import MyServices from '../components/MyServices'
import Experiences from '../components/Experiences'
import WhyHireMe from '../components/WhyHireMe'
import MyProjects from '../components/MyProjects'
import LetDiscuss from '../components/LetDiscuss'
import InfiniteMarquee from '../components/InfiniteMarquee'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div id="home">
        <Profile />
      </div>
      <div id="projects">
        <MyServices />
      </div>
      <div id="experience">
        <Experiences />
      </div>
      <div id="skills">
        <WhyHireMe />
      </div>
      <div id="certificate">
        <MyProjects />
      </div>
      <LetDiscuss />
      <InfiniteMarquee />
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}
