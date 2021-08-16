function AllCaps(props) {
  return <>{props.children.toUpperCase()}</>;
}

function SomeComponent() {
  return (
    <h1>
      <AllCaps>This Text will be in All Caps</AllCaps>
    </h1>
  );
}
