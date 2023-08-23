import { useState } from 'react'



// function App() {
  // const [count, setCount] = useState(0)

  // return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  // )
// }

// export default App



// function App() {
//   const [string, setPopUp] = useState("")
//   function request(){
//     setPopUp(string+"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum rerum possimus magnam error similique facere perferendis ad eius. Impedit consequuntur maxime culpa neque eum ad dignissimos obcaecati veritatis voluptates sint!")
//   }
//   return (
//   <button onClick={request}>Click me</button>
//   )
// }

// export default App



import ReactModal from 'react-modal';
 
function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Click me
      </button>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
       >
        <button className='crossBtn' onClick={()=> setIsOpen(false)}> <img src="https://media.istockphoto.com/id/1131230925/vector/check-marks-red-cross-icon-simple-vector.jpg?s=612x612&w=0&k=20&c=8oNof6faYkfOn1O6CAOHwpSmAhq3IK9hY_D3icbaQps=" alt="" /> </button>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, exercitationem! Itaque vero ducimus excepturi quod vitae fugiat officiis eius nesciunt ex, fugit dolorum consequuntur voluptate, blanditiis laboriosam atque soluta modi!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus itaque officia quis. Dolorum deleniti natus id distinctio praesentium veritatis repellendus! Illo eos, odit deleniti maiores, provident quam velit accusamus possimus, est atque cum et enim sit. Adipisci ratione unde doloribus!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, quae velit. Ut possimus natus officia expedita eveniet mollitia asperiores soluta.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit ut distinctio voluptas ad beatae et consectetur earum rerum magnam voluptatem, corrupti alias error aperiam ab veniam iste ullam quidem?
      </ReactModal>
    </div>
  );
}

 
export default App;
