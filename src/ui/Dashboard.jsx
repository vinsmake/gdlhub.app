export const Dashboard = ({ children }) => {
    return (
        <>
            <div className="w-[99%] h-[99%] bg-neutral-700 rounded-xl flex justify-center items-center p-4">
                {children}
            </div>
        </>
    )
}