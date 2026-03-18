function RecordRow({record,deleteRecord,startEdit}){

  return(

    <tr>

      <td>{record.name}</td>
      <td>{record.email}</td>
      <td>{record.phone}</td>
      <td>{record.city}</td>

      <td>

        <button
        className="edit-btn"
        onClick={()=>startEdit(record.id)}
        >
        Edit
        </button>

        <button
        className="delete-btn"
        onClick={()=>deleteRecord(record.id)}
        >
        Delete
        </button>

      </td>

    </tr>

  )

}

export default RecordRow;