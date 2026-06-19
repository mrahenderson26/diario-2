export default function CajaElegante({ children }) {
    const style = {
        backgroundColor: "orange",
        padding: "6px",
        border: "solid 4px green"
    }

    return (
        <>
            <div style={style}>            
            {children}            
            </div>
        </>
    )
}
