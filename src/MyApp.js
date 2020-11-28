import React from 'react'

function MyApp(){
    return(
    <div>    
      <h1>Functional Components using export</h1>
      <h2>Prachi Kodle</h2>
      <ul>
        <li>I am a girl</li>
        <li>I love myself and believe in living today.</li>
        <li>I love travel.</li>
      </ul>
      <h2>This was done through modular components.</h2>
    </div>
    )
}

// export default MyApp;

function MyFirstComponent(){
    return(
        <h3>Complexity which is why we will use Parent/Child components.</h3>
    )
}

function MySecondComponent(){
    return(
        <div>
            <MyFirstComponent></MyFirstComponent>
            <p>We will basically nest the functional components as much as we want.</p>
        </div>
    )
}

export default MySecondComponent;