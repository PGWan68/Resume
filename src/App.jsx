import React from 'react';
import HeaderInfo from './components/HeaderInfo';
import ResumeContent from './components/ResumeContent';
import yaml from 'js-yaml';
import { useEffect, useState } from 'react';
import './style.css';

const App = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('../_config.yml');
        const text = await response.text();
        const parsedConfig = yaml.load(text);
        setConfig(parsedConfig);
      } catch (error) {
        console.error('Error fetching config:', error);
      }
    };

    fetchConfig();
  }, []);

  if (!config) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container">
      <div className="paper">
        {config.showHeader && <HeaderInfo headerInfo={config.headerInfo} />}
        <ResumeContent resumePath={config.resumePath} />
      </div>
    </main>
  );
};

export default App;