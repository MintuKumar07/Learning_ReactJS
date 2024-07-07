const ErrorMessage=({items})=>{
  return (
    <>
    {items.length===0 && (<h3>No items found</h3>)}
    </>
  );
}

export default ErrorMessage;