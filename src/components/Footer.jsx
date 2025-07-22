
// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="print-stick">
          <div className="print-stick-content">
            如何导出简历？<br/>
            1）右键选择“打印” <br/>
            2）目标打印机设置为“另存为PDF”
          </div>
        </div>
       
       <div className="powered-by">
          Powered by <a href="https://github.com/PGWan68/make-cv" target="_blank" rel="noopener noreferrer">make-cv</a>
        </div>
      
    </footer>
  );
};

export default Footer;