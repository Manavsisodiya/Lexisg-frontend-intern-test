import { useState } from 'react';
import './Lexi.css'
import logo from '../images/logo.png'
import logo2 from '../images/logo2.png'
const LexiLegalAssistant = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {

    if (!query.trim()) return;

    setLoading(true);

    setTimeout(() => {
      const simulatedresponse = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text:
              "As the age of the deceased at the time of accident was held to be about 54–55 years... 10% of annual income should have been awarded on account of future prospects.",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link:
              "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };
      setResponse(simulatedresponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="containermain">
      <div className="blob blob-purple"></div>
      <div className="blob blob-blue"></div>
      <img className="logo" src={logo} alt='logo'></img>
      <h1 className='headingtxt'>Your <span style={{ color: 'rgb(131, 102, 255)' }}>AI</span> Assistant</h1>

      <div className="input-wrapper">
  <label className="textarea-wrapper">
    <textarea
      className="textarea"
      placeholder="Enter your legal query..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  </label>

  <button
    className="btnsubmit"
    onClick={handleSubmit}
    disabled={loading}
  >
    {loading ? <div className="spinner"></div> : <img src={logo2} alt="submitarrow" className="logo2" />}
  </button>
</div>

      {response && (
        <div className="answer-box">
          <h2 className="answer-title">Answer:</h2>
          <div className="answer-text">{response.answer}</div>

          <h3 className="citation-title">Citation:</h3>
          {response.citations.map((citation, idx) => (
            <div key={idx} className="citation-box">
              <div><strong>Source:</strong> {citation.source}</div>
              <a
                href={citation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="citation-link"
              >
                {citation.text}
              </a>
            </div>
          ))}
        

    </div>
  )
}
      </div >
    
  );
};

export default LexiLegalAssistant;
