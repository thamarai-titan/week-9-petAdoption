function Table(props) {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pet Name</td>
              <td>{props.data.petname}</td>
            </tr>
            <tr>
              <td>Pet Type</td>
              <td>{props.data.pettype}</td>
            </tr>
            <tr>
              <td>Breed</td>
              <td>{props.data.breed}</td>
            </tr>
            <tr>
              <td>Your Name</td>
              <td>{props.data.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{props.data.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{props.data.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Table;
  