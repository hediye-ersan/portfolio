import Profile from '../components/Profile'
import MyServices from '../components/MyServices'
import Experiences from '../components/Experiences'
import WhyHireMe from '../components/WhyHireMe'
import MyProjects from '../components/MyProjects'
import LetDiscuss from '../components/LetDiscuss'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Profile />
      <MyServices />
      <Experiences />
      <WhyHireMe />
      <MyProjects />
      <LetDiscuss />
      <Footer />
    </div>
  )
}
