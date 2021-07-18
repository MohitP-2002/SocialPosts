import { faNotEqual } from '@fortawesome/free-solid-svg-icons'
import Popup from './popup'
import Like from './like'

import React,{useState} from 'react'
const Dashboard = () => {
    const [input, setInput] = useState('')
    const [items,setItems]=useState([])
    const [edit, setEdit] = useState(0)
    const [buttonPop, setButPop] = useState(false);
    const [buttondelPop, setButDelPop] = useState(false);

    var myArray = [
        "Theo Brady",
        "Freddie Ramsay",
        "Ayush Devi",
        "Suman Apte","Pratyush Kara","Bharat Krishna","Punkit Kumar", "Mohit Periwal","Gunjan Periwal","Chetna Periwal","Uddipan Das"
      ];
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  const addItem=()=>{
      if(!input)
      {}
      else{
     setItems([...items,input]);
     setInput('')
     setButPop(true)
     alert('Created Item Successfully')

      } 
  }
  const deleteItem = (id) =>{
    alert('Deleted Item Successfully')
     const updateitem = items.filter((elem,ind) => {
         return ind != id
     })
     setItems(updateitem)
  }



    return (
        <div class="dash">
            <div> <textarea name="post" value={input} onChange={(e)=>setInput(e.target.value)} id="post" cols="30" rows="10" placeholder="Create a post ✍️"></textarea></div>
          <div><button type="submit" className="share" onClick={addItem} value="Share">Share</button></div>
                <div>
               {
                  items.map((elem,ind)=> {
                      return(
                   <div className="show" key={ind}>
                     <h3 className="user"><span className="userrs">Mohit Periwal</span><span className="edit" >✎</span>   
                     <span className="delete" onClick={() => deleteItem(ind)}>❌</span></h3>     
                     <h5>{elem}</h5>
                     <Like like={elem} key={ind} />
                </div>
            )
                  })
              }
          </div>
         {/* <Popup trigger={buttonPop} setTrigger={setButPop}>
           <h2>Created Post successfully</h2>
           </Popup>
           <Popup trigger={buttondelPop} setTrigger={setButDelPop}>
           <h2>Deleted Post successfully</h2>
            </Popup>*/}
        </div>
    )
}

export default Dashboard
