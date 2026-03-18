import { useState, useEffect } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";
import "./App.css";

function App() {

  const [records, setRecords] = useState([]);
  const [editData, setEditData] = useState(null);

  //localstorage load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(saved);
  }, []);

  // localstorage save
  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  // add
  const addRecord = (data) => {
    const newRecord = { id: Date.now(), ...data };
    setRecords([...records, newRecord]);
  };

  // delete
  const deleteRecord = (id) => {

    if(window.confirm("Are you sure you want to delete this record?")){
      const filtered = records.filter((rec) => rec.id !== id);
      setRecords(filtered);
    }

  };

  // edit
  const startEdit = (id) => {
    const record = records.find((rec) => rec.id === id);
    setEditData(record);
  };

  // update 
  const updateRecord = (data) => {

    const updated = records.map((rec) =>
      rec.id === editData.id ? { ...rec, ...data } : rec
    );

    setRecords(updated);
    setEditData(null);
  };

  // clear all records
  const clearAllRecords = () => {

    if(window.confirm("Are you sure you want to clear all records?")){
      setRecords([]);
      localStorage.removeItem("records");
    }

  };

  return (

    <div className="container">

      <h1>LocalBox Miner</h1>

      <RecordForm
        addRecord={addRecord}
        updateRecord={updateRecord}
        editData={editData}
      />

      <button className="clear-btn" onClick={clearAllRecords}>
        Clear All Records
      </button>

      <RecordList
        records={records}
        deleteRecord={deleteRecord}
        startEdit={startEdit}
      />

    </div>

  );
}

export default App;