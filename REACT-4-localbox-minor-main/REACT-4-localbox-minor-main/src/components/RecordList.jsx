import RecordRow from "./RecordRow";

function RecordList({records,deleteRecord,startEdit}){

  if(records.length === 0){
    return <p className="no-data">No Records Found</p>
  }

  return(

    <table className="table">

      <thead>

        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Actions</th>
        </tr>

      </thead>

      <tbody>

        {records.map((rec)=>(
          <RecordRow
          key={rec.id}
          record={rec}
          deleteRecord={deleteRecord}
          startEdit={startEdit}
          />
        ))}

      </tbody>

    </table>

  )

}

export default RecordList;