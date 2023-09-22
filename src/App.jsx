import { useState } from 'react'
import './App.css'

function App() {
  const [link, setlink] = useState('https://www.linkedin.com/in/omgupta21/')
  const [img, setimg] = useState('https://media.licdn.com/dms/image/D5603AQG8sVnfVsOrww/profile-displayphoto-shrink_400_400/0/1693553496712?e=1700697600&v=beta&t=Ov9V6j6slc-1JgoyU9Z6XGd5CBA1TQ8aOePFAuMgEXc')

  return (
    <>
      <div>

        <center>
          <img src={img} className="logo react" alt="React logo" />
        </center>
      </div>
      <h1>I am starting first step toward #react.</h1>
      <div className="card">
        <div>
          <a href={link} >Connect with me</a>
        </div>
        <p>

        </p>
      </div>
      <p className="read-the-docs">
        As an ambitious and dedicated student pursuing an MCA in Computer Application at Maulana Abul Kalam Azad University of Technology, I am passionate about using my technical skills to make a positive impact on society. With a strong academic background in computer application and programming.
      </p>
    </>
  )
}

export default App
