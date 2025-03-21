export const Screen = ({children }) => {
    return (
      <div className={`w-screen h-screen box-border flex justify-center items-center bg-neutral-900`}>
        {children}
      </div>
    );
  };
  