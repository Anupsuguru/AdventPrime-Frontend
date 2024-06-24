
import "./PillComponent.css"

export default function PillComponent({content}){
    return(
        <>
            <div className="pill" style={{backgroundColor: content.color}}>
                <h3 className="text-xl font-bold pillh3" >{content.name}</h3>

            </div>
        </>
    )
}