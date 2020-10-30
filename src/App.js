import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import {Link} from 'react-router-dom';
import Main from './components/main';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color " title="Hello There!" scroll>
            <Navigation>
                <Link to ="/aboutme">About Me</Link>
                <a href = "https://github.com/preritk/">Projects</a>
                <a href="https://drive.google.com/open?id=0B8hEIdSlNRSpS0JET19TaTB2MlVtQzhnQl9zVGk3c1QxSTFF">Resume</a>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Know About Me!">
            <Navigation>
                <Link to ="/aboutme">About Me</Link>
                <a href = "https://github.com/preritk/">Projects</a>
                <a href="https://drive.google.com/open?id=0B8hEIdSlNRSpS0JET19TaTB2MlVtQzhnQl9zVGk3c1QxSTFF">Resume</a>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
            <div className="footer">
                All rights reserved. © Site created and maintained by Prerit Khandelwal. {new Date().getFullYear()}
            </div>
        </Content>
    </Layout>
</div>
  );
}

export default App;
