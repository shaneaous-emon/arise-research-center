import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Publications from './pages/Publications';
import PublicationDetail from './pages/PublicationDetail';
import People from './pages/People';
import TeamMember from './pages/TeamMember';
import AdvisoryBoard from './pages/AdvisoryBoard';
import ResearchTeam from './pages/ResearchTeam';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Collaborations from './pages/Collaborations';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ResearchArea from './pages/ResearchArea';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="research/:area" element={<ResearchArea />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="publications" element={<Publications />} />
          <Route path="publications/:id" element={<PublicationDetail />} />
          <Route path="people" element={<People />} />
          <Route path="people/advisory-board" element={<AdvisoryBoard />} />
          <Route path="people/research-team" element={<ResearchTeam />} />
          <Route path="team/:id" element={<TeamMember />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="collaborations" element={<Collaborations />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;