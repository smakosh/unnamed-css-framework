import React from 'react'

const FormsCode = () => (
    <div className="container-full dark">
      <div className="container">
        <div className="code">
            <h4 className="pad">Input text & email</h4>
            <pre>
            <p>&lt;<span className="div">div</span> <span className="class">class</span>="<span className="class-name">input-field purple-input</span>"&gt;</p>
            <p>  &lt;<span className="div">span</span> <span className="class">class</span>="<span className="class-name">user-icon</span>"&gt;&lt;/<span className="div">span</span>&gt;</p>
            <p>  &lt;<span className="div">input</span> <span className="class">type</span>="<span className="class-name">text</span>" /&gt;</p>
            <p>&lt;/<span className="div">div</span>&gt;</p>
            
            <p>&lt;<span className="div">div</span> <span className="class">class</span>="<span className="class-name">input-field purple-input</span>"&gt;</p>
            <p>  &lt;<span className="div">span</span> <span className="class">class</span>="<span className="class-name">email-icon</span>"&gt;&lt;/<span className="div">span</span>&gt;</p>
            <p>  &lt;<span className="div">input</span> <span className="class">type</span>="<span className="class-name">email</span>" <span className="class">placeholder</span>="<span className="class-name">Enter your email...</span>" /&gt;</p>
            <p>&lt;/<span className="div">div</span>&gt;</p></pre>
          </div>

          <div className="code">
            <h4 className="pad">Select</h4>
            <pre>
            <p>&lt;<span className="div">div</span> <span className="class">class</span>="<span className="class-name">input-field purple-input</span>"&gt;</p>
            <p>   &lt;<span className="div">select</span>&gt;</p>
            <p>       &lt;<span className="div">option</span> <span className="class">value</span>=""&gt;Unnamed&lt;/<span className="div">option</span>&gt;</p>
            <p>       &lt;<span className="div">option</span> <span className="class">value</span>=""&gt;Unnamed&lt;/<span className="div">option</span>&gt;</p>
            <p>       &lt;<span className="div">option</span> <span className="class">value</span>=""&gt;Unnamed&lt;/<span className="div">option</span>&gt;</p>
            <p>   &lt;/<span className="div">select</span>&gt;</p>
            <p>&lt;/<span className="div">div</span>&gt;</p></pre>
          </div>

          <div className="code">
            <h4 className="pad">Text area</h4>
            <pre>
            <p>&lt;<span className="div">div</span> <span className="class">class</span>="<span className="class-name">input-field purple-input</span>"&gt;</p>
            <p>  &lt;<span className="div">span</span> <span className="class">class</span>="<span className="class-name">edit-icon</span>"&gt;&lt;/<span className="div">span</span>&gt;</p>
            <p>  &lt;<span className="div">textarea</span>&gt;&lt;/<span className="div">textarea</span>&gt;</p>
            <p>&lt;/<span className="div">div</span>&gt;</p></pre>
        </div>
    </div>
  </div>
)

export default FormsCode