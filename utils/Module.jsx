export function Preview({ children }) {
    return (
        <>
            <div className='text-sky-700 text-bold'>Preview</div>
            <div className='p-2 w-full border rounded-md text-black'>{children}</div>
        </>
    )
}
