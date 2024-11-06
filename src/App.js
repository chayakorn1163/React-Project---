  import "./App.css";
  import From from "./component/From";
  import Transaction from "./component/Transcation"; // ตรวจสอบการสะกด
  import Appfrom from "./component/Appfrom";
  import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

  function App() {

    
    const initData = [
      { id: 1, title: "ค่ารักษาพยาบาล", amount: 2500, onedata: "08/10/2024" },
      { id: 2, title: "ค่าบริการทางสุขภาพ", amount: 1000, onedata: "06/10/2024" },
      { id: 3, title: "ค่าอุบัติเหตุ", amount: 500, onedata: "05/10/2024" },
      { id: 4, title: "ค่าบัตรเงินสด", amount: 1000 },
    ];

    const [items,setItems] = useState(initData)

    const onAddItem = (newnitem) => {
      setItems((prevItem) =>{
        return [newnitem,...prevItem]
      })
    }

    return (
      <div className="App">
        <h1 className="text-center">แบบฟอร์มสมัครงาน</h1>
        <From />
        <Appfrom  onAddItem ={onAddItem}/>
        <Transaction item={items} /> {}
      </div>
    );
  }

  export default App;
