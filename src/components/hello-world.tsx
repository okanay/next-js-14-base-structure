type TProps = React.FC<{}>;
export const HelloWorld: TProps = () => {
  return (
    <div
      className={"flex h-screen w-full flex-col items-center justify-center"}
    >
      <h1 className={"font-mono text-4xl text-primary-500"}>
        Next JS - v14.0.4
      </h1>
    </div>
  );
};
