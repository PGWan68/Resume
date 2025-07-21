import React, { useEffect, useState } from 'react';
import markdownIt from 'markdown-it';

const md = markdownIt();

const ResumeContent = ({ resumePath }) => {
  const [resumeHtml, setResumeHtml] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch(resumePath);
        const text = await response.text();
        const html = md.render(text);
        setResumeHtml(html);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchResume();
  }, [resumePath]);

  return (
    <div id="markdown-body" dangerouslySetInnerHTML={{ __html: resumeHtml }} />
  );
};

export default ResumeContent;