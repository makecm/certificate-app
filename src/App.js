import { useState } from 'react';
import axios from 'axios';
import 'minireset.css';

import './App.css';

import Header from './components/Header'
import Form from './components/Form'
import Preview from './components/Preview'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
  });
  const [isLoading, setIsLoading] = useState(false)
  const [certificate, setCertificate] = useState(null)

  function generateCertificate(e) {
    e.preventDefault();

    setIsLoading(true)

    const url = process.env.REACT_APP_MAKE_URL;

    const headers = {
      'Content-Type': 'application/json',
      'X-MAKE-API-KEY': process.env.REACT_APP_MAKE_KEY,
    }

    const data = {
      size: 'A4',
      'format': 'pdf',
      'data': {
        ...formData,
        date: new Date().toDateString().split(' ').slice(1).join(' ')
      },
      'postProcessing': {
        optimize: true
      }
    }

    axios.post(url, data, {
      headers: headers
    })
      .then((response) => {
        setIsLoading(false)
        setCertificate(response.data.resultUrl)
      }, (error) => {
        console.log(error);
        setIsLoading(false)
      });
  }

  return (
    <div className="App">
      <div className="container">
        <Header />

        <section>
          <div>
            <Form formData={formData} setFormData={setFormData} />
            <button
              type="button"
              disabled={isLoading}
              onClick={generateCertificate}
            >
              {isLoading ? 'Making...' : 'Make my certificate'}
            </button>
          </div>
          <div>
            <Preview certificate={certificate} isLoading={isLoading} />
            {certificate && (
              <a
                className="download"
                target="_blank"
                rel="noreferrer"
                href={certificate}
              >
                Download
              </a>
            )}
          </div>
        </section>

        <footer>
          Built with React and Make.cm
        </footer>
      </div>
    </div>
  );
}

export default App;
