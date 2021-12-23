
function List({items}) {
    return (
      <ul>
        {items
          .map(item => {
            return (
            <li key={item}>{item}</li> 
            )
          })
         }
      </ul>
    );
  }
  

export default List;