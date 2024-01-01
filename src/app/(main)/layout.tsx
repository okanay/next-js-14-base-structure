export default function MainLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      {/*Header*/}
      {props.children}
      {/*Footer*/}
    </div>
  );
}
